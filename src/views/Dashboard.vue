<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- <div class="text-h5 text-sm-h3 mb-8 container">My personal costs</div> -->
        <payments-display />
        <pagination />
      </v-col>
      <v-col>
        <chart />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import AddPaymentForm from "../components/AddPaymentForm.vue";
import Chart from "../components/Chart.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Chart,
    Pagination,
    // AddPaymentForm,
  },
  data() {
    return {
      addFormShow: false,
      dialog: false,
      settings: {
        content: "addPaymentForm",
        header: "Add new cost",
      },
      // show: true,
      page: 1,
      n: 3,
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
    openModal() {
      this.$modal.show("AddPaymentForm", {
        content: "addPaymentForm",
        header: "Add new cost",
      });
    },
  },
};
</script>

<style></style>
