<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button
        class="btn"
        v-for="operand in operands"
        :key="operand"
        @click="calculate(operand)"
        :title="`Операция ${operand}`"
        :disabled="operand === '/' && operand2 === 0"
      >
        {{ operand }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Calculator",
  data() {
    return {
      operands: [
        "+",
        "-",
        "/",
        "*",
        "Возведение в степень",
        "Целочисленное деление",
      ],
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "Возведение в степень":
          this.row();
          break;
        case "Целочисленное деление":
          this.floor();
          break;
      }

      const key = Date.now();
      const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
      this.$set(this.logs, key, value);
    },
    add() {
      this.result = this.operand1 + this.operand2;
      this.fibResult = this.fib1 + this.fib2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "На 0 делить нельзя";
        return;
      }
      this.result = operand1 / operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    row() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    floor() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
  },
};
</script>