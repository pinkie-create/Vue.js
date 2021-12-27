<template>
  <div id="app">
    <calculator />
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
        <div class="total" v-if="total">Total: {{ total }}</div>
      </header>
      <main>
        <add-payment-form />
        <payments-display :items="currentElements" />
        <pagination
          :cur="page"
          :n="n"
          :length="paymentsList.length"
          @paginate="changePage"
        />
      </main>
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Calculator,
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      show: true,
      page: 1,
      n: 10,
    };
  },
  computed: {
    ...mapGetters({ paymentsList: "getPaymentsList" }),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
    currentElements() {
      const { n, page } = this;
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  methods: {
    ...mapMutations({ fetch: "setPaymentsListData" }),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
    },
    // fetchData() {
    //   return [
    //     {
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Transport",
    //       value: 360,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Internet",
    //       value: 532,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Sport",
    //       value: 532,
    //     },
    //     {
    //       date: "24.03.2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //   ];
    // },
    // addToPaymentList(props) {
    //   console.log("run");
    //   // this.paymentsList.push(data)
    //   this.paymentsList = [...this.paymentsList, props];
    // },
  },
  created() {
    this.fetchData();
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
