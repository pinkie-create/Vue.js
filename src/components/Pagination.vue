<template>
  <div class="text-center">
    <v-pagination v-model="page" :length="6"></v-pagination>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    n: Number,
    cur: Number,
    length: Number,
  },
  computed: {
    pages() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClickPage(p) {
      if (p < 1 || p > this.pages) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>
<style lang="scss" scoped></style>
