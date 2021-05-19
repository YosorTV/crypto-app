<template>
  <div class="container mx-auto flex flex-col items-center bg-gray-100 p-4">
    <div class="container">
      <add-card @onAdd="addTicker" />
      <hr class="w-full border-t border-gray-600 my-4" />
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <card
          v-for="(data, index) in cryptoData"
          :crypto="data"
          :key="index"
          @onDelete="deleteTicker(index)"
          @onActive="setActive"
        />
      </dl>
      <hr class="w-full border-t border-gray-600 my-4" />
      <graphs :graph="activeTiker" />
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      cryptoData: [
        {
          name: "WTF - USD",
          value: 1.11,
          active: false,
        },
        {
          name: "VUE - RUB",
          value: 80000.0,
          active: true,
        },
        {
          name: "BTC - USD",
          value: 99999.99,
          active: false,
        },
        {
          name: "DOGE - USD",
          value: 0.0014,
          active: false,
        },
      ],
      activeTiker: {}
    };
  },
  methods: {
    addTicker(tickerName) {
      const newTicker = {
        name: tickerName,
        value: Math.floor(100 + Math.random() * (9999 + 1 - 10)),
        active: false,
      };
      return this.cryptoData.unshift(newTicker);
    },
    deleteTicker(id) {
      return this.cryptoData.splice(id, 1);
    },
    setActive(tiker) {
      this.activeTiker = tiker
      tiker.active = !tiker.active
    } 
  },
};
</script>
