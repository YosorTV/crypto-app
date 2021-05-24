export default {
  GET_CRYPTO_PRICE(state, payload) {
    return (state.price = payload);
  },
  GET_CRYPTO_DATA(state, payload) {
    return (state.data = payload);
  },
};
