import {slug} from '@/helpers'


const getProductsByCategory = (products, category) =>
  products.filter(product => category !== 0 ? product.categories.indexOf(category) !== -1 : product)

export default {
  allProducts: ({products}) => products,
  products: ({products}, getters, rootState, rootGetters) => {
    let categorySelected = rootGetters['category/categorySelected']
    return getProductsByCategory(products, categorySelected)
  },

  productFromSlugParamRoute: ({products}) => paramSlug =>
    products.find(({name}) => slug(name) === paramSlug),

}
