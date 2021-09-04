import Vuex from 'vuex';
import cart from '@/store/modules/cart/';
import checkout from '@/store/modules/checkout/';
import product from '@/store/modules/product/';
import category from '@/store/modules/category/';

const store = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
      cart,
      product,
      category,
      checkout
    },
    mutations: {
    },
    actions: {
      async nuxtServerInit({ commit }, { $repositories }) {
        const products = await $repositories.products.get();
        commit('product/SET_PRODUCTS', products);
      }
    }
  })
}

export default store
