import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps';


export default ({app}) => {

    const settings = {
      apiKey: app.$config.ymApiKey,
      lang: app.$config.ymLang,
      coordorder: app.$config.ymCoordOrder,
      version: app.$config.ymVersion
    }

    Vue.use(YmapPlugin, settings);


}
