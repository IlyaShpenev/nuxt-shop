export default {
  setStatus: ({ commit }, payload) => commit('SET_STATUS', payload),
  submit: ({ commit, dispatch }, payload) => {
    // request to backend or smth
    commit('SET_IS_SUBMITTED', true);
    commit('SET_STATUS', 'success');
    dispatch('cart/clearCart', null, { root: true });
    dispatch('cart/clearUserInformation', null, { root: true });

  },
  clearCheckout({ commit }) {
    commit('SET_IS_SUBMITTED', false);
    commit('SET_STATUS', '');
  }
}
