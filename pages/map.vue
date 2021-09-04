<template>
  <section class="map">
    <client-only>
      <yandex-map
        :coords="mapConfig.coords"
        :controls="mapConfig.controls"
        :show-all-markers="mapConfig.showAllMarkers"
        @map-was-initialized="mapLoaded">

        <ymap-marker v-for="(place, index) in placemarks"
                     :key="`place-${index}`"
                     :marker-id="`place-${index}`"
                     marker-type="placemark"
                     :coords="place">

        </ymap-marker>

      </yandex-map>
    </client-only>
    <input type="text" v-model.lazy="firstAddress" placeholder="first address"/>
    <input type="text" v-model.lazy="secondAddress" placeholder="second address"/>
  </section>
</template>

<script>

export default {
  name: 'Map',
  data() {
    return {
      ymaps: null,
      firstAddress: '',
      secondAddress: '',
      mapConfig: {
        controls: ['fullscreenControl'],
        showAllMarkers: true,
        coords: [
          55.72896654088406,
          37.511893822753904,
        ],
      },
      placemarks: []
    }
  },
  watch: {
    firstAddress(newVal, oldVal) {
      this.getAddress(newVal, 0)
    },
    secondAddress(newVal, oldVal) {
      this.getAddress(newVal, 1)
    },
  },
  methods: {
    mapLoaded(instance) {
      this.ymaps = ymaps;
    },
    getAddress(query, index) {
      if (query.length) {
        let request = this.ymaps.geocode(query);
        request.then((res) => {
          let coords = res.geoObjects.get(0).geometry.getCoordinates();
          this.$set(this.placemarks, index, coords)
        }).catch((err) => {
        });
      }
    },
  },

}
</script>

<style type="text/css">
.map,
.ymap-container {
  height: 800px;
}
</style>

