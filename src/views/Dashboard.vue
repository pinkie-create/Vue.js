<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
        <v-dialog v-model="dialog" width="500"
          ><template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on">Add new cost +</v-btn>
          </template>
          <add-payment-form @addNewPayment="dialog = false" />
        </v-dialog>
        <payments-display :items="currentElements" />
        <v-pagination
          v-model="page"
          :cur="page"
          :n="n"
          :length="7"
          circle
          @paginate="changePage"
        ></v-pagination>
      </v-col>
      <v-col>chart</v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
// import Pagination from "../components/Pagination.vue";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    // Pagination
  },
  data() {
    return {
      addFormShow: false,
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
    openModal() {
      this.$modal.show("AddPaymentForm", {
        content: "addPaymentForm",
        header: "Add new cost",
      });
    },
  },
  async created() {
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page);
    }
  },
};
</script>

<style></style>
