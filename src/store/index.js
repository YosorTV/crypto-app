import Vue from "vue";
import Vuex from "vuex";

import { cryptoData } from "./crypto";

Vue.use(Vuex);

export default new Vuex.Store({ modules: { cryptoData } });
