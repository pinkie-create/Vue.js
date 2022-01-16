<template>
  <v-card class="text-left pa-8">
    <v-text-field v-model="date" label="Date" />
    <v-select
      :items="categoryList"
      label="Category"
      v-model="category"
    ></v-select>
    <v-text-field v-model.number="value" label="Value" />
    <v-btn @click="onClick">Save!</v-btn>
  </v-card>
  <!-- <div class="wrapper">
    <input placeholder="date" v-model="date" />
    <div class="categoryList">
      <select v-model="category">
        <option
          v-for="(category, idx) in categoryList"
          :key="idx"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <input placeholder="value" type="number" v-model.number="value" />
    <button class="btn" @click="onClick">Сохранить</button>
  </div> -->
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  computed: {
    ...mapGetters({ categoryList: "getCategoryList" }),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    ...mapMutations(["addPaymentListData"]),
    ...mapActions(["fetchCategory"]),
    onClick() {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.addPaymentListData(data);
      this.$emit("addNewPayment", data);
    },
  },
  async mounted() {
    await this.fetchCategory();
    if (this.$route.params && this.$route.params.category) {
      this.category = this.$route.params.category;
    }
    if (this.$route.query?.value) {
      this.value = Number(this.$route.query.value);
    }
  },
};
</script>
