<template>
  <div class="select-list">
    <label class="select-list__label" :for="code"> {{ label }} </label>
    <select :id="code" @input="input($event.target.value)" class="select-list__select">
      <option v-for="item in items" :key="item.id" :selected="item.id === current"
              :value="item.id">{{ item.title }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'AppSelect',
  props: {
    label: {
      type: String,
      default: '',
      required: false
    },

    code: {
      type: String,
      default: '',
      required: true
    },

    items: {
      type: Array,
      default() {
        return []
      },
      required: true
    },

    current: {
      type: [String, Number],
      required: false
    }
  },
  methods: {
    input(value) {
      this.$emit('input', value);
    }
  }
}
</script>
