export default {
  // Target: https://go.nuxtjs.dev/config-target
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'online-shop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/filters',
    '@/plugins/repositories',
    {
      src: '@/plugins/vue-the-mask',
      mode: 'client'
    },
    {
      src: '@/plugins/ymapPlugin',
      mode: 'client'
    },
    {
      src: '@/plugins/vuelidate',
      mode: 'client'
    }
  ],

  publicRuntimeConfig: {
      ymLang: process.env.YMAP_LANG,
      ymCoordOrder: process.env.YMAP_COORDORDER,
      ymVersion: process.env.YMAP_VERSION,
      ymApiKey: process.env.YMAP_API_KEY

  },

  axios: {
    baseURL: process.env.BASE_URL
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
