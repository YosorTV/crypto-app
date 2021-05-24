<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <add-card @onAdd="addTicker" />
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <card
          v-for="ticker in data"
          :key="ticker.price"
          :crypto="ticker"
          :class="ticker.name === activeTiker.name ? 'border-4' : ''"
          @onDelete="deleteTicker(ticker.price)"
          @onActive="setActive"
        />
      </dl>
      <graphs
        v-if="activeTiker.name"
        :graph="activeTiker"
        :graphStatus="graphs"
        @onRemove="removeGraph"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src
import Card from "@/components/Card.vue";
import Graphs from "@/components/Graphs.vue";
import AddCard from "@/components/AddCard.vue";

export default {
  name: "Home",
  components: {
    Card,
    Graphs,
    AddCard,
  },
  async created() {
    await this.fetchCrypto();
  },
  data() {
    return {
      data: [],
      graphs: [],
      activeTiker: {
        name: "",
        price: "",
      },
    };
  },
  methods: {
    ...mapActions("cryptoData", ["fetchCryptoPrice", "fetchCryptoData"]),

    async fetchCrypto() {
      await this.fetchCryptoData();
    },

    async addTicker(tickerName) {
      const newTicker = { name: "", price: "" };
      newTicker.name = tickerName;
      await this.fetchCryptoPrice(newTicker);
      const { USD } = this.cryptoPrice;
      newTicker.price = USD;
      this.data.push(newTicker);
      if (this.activeTiker) {
        setInterval(async () => {
          await this.fetchCryptoPrice(newTicker);
          const { USD } = this.cryptoPrice;
          newTicker.price = USD;
          this.graphs.push(USD);
        }, 3000);
      } else {
        clearInterval();
        this.graphs = [];
      }
    },
    deleteTicker(id) {
      const card = this.data.findIndex((item) => item.id === id);
      this.graphs = [];
      return this.data.splice(card, 1);
    },
    removeGraph() {
      this.activeTiker = {};
      this.graphs = [];
    },
    setActive(tiker) {
      this.graphs = [];
      this.activeTiker = tiker;
    },
  },
  computed: {
    ...mapGetters("cryptoData", ["getCryptoPrice", "getCryptoData"]),
    cryptoPrice() {
      return this.getCryptoPrice;
    },
    cryptoData() {
      return this.getCryptoData;
    },
  },
};
</script>
