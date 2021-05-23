export default {
  GET_CRYPTO_PRICE: function (state, payload) {
    return (state.cryptoPrice = payload);
  },
};
