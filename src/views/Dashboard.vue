<template>
  <main>
    <add-payment-form />
    <payments-display :items="currentElements" />
    <pagination :cur="page" :n="n" :length="15" @paginate="changePage" />
  </main>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Dashboard",
  components: { PaymentsDisplay, AddPaymentForm, Pagination },
  data() {
    return {
      show: true,
      page: 1,
      n: 3,
    };
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
    currentElements() {
      return this.getPaymentsList.slice(
        this.n * (this.page - 1),
        this.n * (this.page - 1) + this.n
      );
    },
  },
  methods: {
    ...mapMutations({ fetch: "setPaymentsListData" }),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
      this.fetchData(p);
    },
  },
  async created() {
    // if (!PaymentList.length) {
    //   await this.fetchData();
    // }
    // await this.fetchData(1);
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page);
    }
  },
};
</script>

<style></style>
