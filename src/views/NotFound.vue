<template>
  <div>
    not found
    <br />
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
    <br />
    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Transport',
        },
        query: { value: 50 },
      }"
      >Add Transport</router-link
    >
    <br />
    <router-link
      :to="{
        name: 'addPayment',
        params: {
          category: 'Entertainmen',
        },
        query: { value: 2000 },
      }"
      >Add Entertainmen</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>