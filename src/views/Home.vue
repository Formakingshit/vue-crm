<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <app-loader v-if="loader"></app-loader>

    <div class="row" v-else>
      <app-home-currency :currency="currency"></app-home-currency>
    </div>
  </div>
</template>

<script>
import HomeCurrency from "@/components/home/HomeCurrency.vue";
import Loader from "@/components/app/Loader.vue";

export default {
  data() {
    return {
      loader: true,
      currency: null
    };
  },
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");

    this.setUpBaseCurrencyUAH();
  },
  name: "home",
  components: {
    appHomeCurrency: HomeCurrency,
    appLoader: Loader
  },
  methods: {
    async refresh() {
      this.loader = true;
      this.currency = await this.$store.dispatch("fetchCurrency");
      this.setUpBaseCurrencyUAH();
    },
    setUpBaseCurrencyUAH() {
      const rates = this.currency["rates"];
      const baseCurrency = rates["UAH"];

      delete rates["UAH"];

      for (const rate in rates) {
        rates[rate] = baseCurrency / rates[rate];
      }
      this.loader = false;
    }
  }
};
</script>
