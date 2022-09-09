<template>
  <div>
    <!-- not found -->
    <br />
    <v-btn block>
      <router-link
        :to="{
          name: 'addPayment',
          params: {
            category: 'Food',
          },
          query: { value: 200 },
        }"
        >Add Food</router-link
      >
    </v-btn>
    <v-btn block>
      <router-link
        :to="{
          name: 'addPayment',
          params: {
            category: 'Transport',
          },
          query: { value: 50 },
        }"
        >Add Transport</router-link
      ></v-btn
    >
    <v-btn block
      ><router-link
        :to="{
          name: 'addPayment',
          params: {
            category: 'Entertainmen',
          },
          query: { value: 2000 },
        }"
        >Add Entertainmen</router-link
      ></v-btn
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
