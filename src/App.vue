<template>
  <div id="app">
    <calculator />
    <div class="wrapper">
      <header>
        <router-link to="/dashboard">Dashboard</router-link> /
        <router-link to="/about">about</router-link> /
        <span @click="goToPageNotFound">notfound</span>
        <div class="title">My personal costs</div>
        <div class="total" v-if="total">Total: {{ total }}</div>
      </header>
      <main>
        <router-view />
        <!-- <add-payment-form />
        <payments-display :items="currentElements" />
        <pagination
          :cur="page"
          :n="n"
          :length="paymentsList.length"
          @paginate="changePage"
        /> -->
      </main>
    </div>
  </div>
</template>

<script>
// import Calculator from "./components/Calculator.vue";
// // import HelloWorld from "./components/HelloWorld.vue";
// import AddPaymentForm from "./components/AddPaymentForm.vue";
// import PaymentsDisplay from "./components/PaymentsDisplay.vue";
// import { mapMutations, mapGetters, mapActions } from "vuex";
// import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  // components: {
  //   // HelloWorld,
  //   Calculator,
  //   PaymentsDisplay,
  //   AddPaymentForm,
  //   Pagination,
  // },
  data() {
    return {
      // show: true,
      // page: 1,
      // n: 10,
    };
  },
  methods: {
    goToPageNotFound() {
      if (this.$route.name === "notfound") return;
      this.$router.push({
        name: "notfound",
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
