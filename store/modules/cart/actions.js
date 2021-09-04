export default {
  addItem: ({ commit }, item) => commit('ADD_ITEM', item),
  removeItem: ({ commit }, item) => commit('REMOVE_ITEM', item),
  clearCart: ({ commit }) => commit('CLEAR_CART'),
  setUserInformation: ({ commit }, payload) => commit('SET_USER_INFORMATION', payload),
  clearUserInformation: ({ commit }) => commit('CLEAR_USER_INFORMATION')
}
