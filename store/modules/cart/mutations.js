export default {
  ADD_ITEM: (state, item) => {
    if (!state.cart.find(p => item.id === p.id)) {
      state.cart = [...state.cart, item]
    }
  },
  REMOVE_ITEM: (state, productId) => {
    state.cart = Array.from(state.cart.filter(product => product.id !== productId))
  },
  CLEAR_CART: state => { state.cart = [] },
  SET_SUCCESS: (state, value) => { state.success = value },
  SET_TOTAL: (state, value) => { state.total = value },
  SET_USER_INFORMATION: (state, {name, value}) => { state.userInformation[name] = value },
  CLEAR_USER_INFORMATION: state => { state.userInformation = {name: '', phone: '', email: ''} }
}
