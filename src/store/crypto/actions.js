/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { api, key } from "../../services/api";

export default {
  async fetchCryptoPrice({ commit }, { name }) {
    const { data } = await api.get(`price?fsym=${name}&tsyms=USD&api_key=${key}`);
    commit("GET_CRYPTO_PRICE", data);
    return data
  },
};
