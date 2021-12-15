<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button class="btn" @click="result = operand1 + operand2">+</button>
      <button class="btn" @click="result = operand1 - operand2">-</button>
      <button class="btn" @click="divide">/</button>
      <button class="btn" @click="multiply(operand1, operand2)">*</button>
      <br />
      <button class="btn" @click="result = Math.pow(operand1, operand2)">
        Возведение в степень
      </button>
      <br />
      <button class="btn" @click="result = Math.floor(operand1 / operand2)">
        Целочисленное деление
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    divide() {
      this.result = this.operand1 / this.operand2;
    },
    multiply(operand1, operand2) {
      this.result = operand1 * operand2;
    },
  },
};
</script>