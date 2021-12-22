<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <calculator />
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>
      </header>
      <main>
        <add-payment-form @addNewPayment="addToPaymentList" />
        <payments-display :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import HelloWorld from "./components/HelloWorld.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Calculator,
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: true,
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          date: "24.03.2020",
          category: "Internet",
          value: 532,
        },
        {
          date: "24.03.2020",
          category: "Sport",
          value: 532,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
    addToPaymentList(props) {
      console.log("run");
      // this.paymentsList.push(data)
      this.paymentsList = [...this.paymentsList, props];
    },
  },
  created() {
    this.paymentsList = this.fetchData();
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
