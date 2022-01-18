<template>
  <div>
    <div class="display">
      <input id="one" name="1" v-model.number="operand1" type="number" />
      <input id="two" name="2" v-model.number="operand2" type="number" />
      = {{ result }}
    </div>
    <div class="keyboard">
      <button
        class="btn"
        v-for="operand in operands"
        :key="operand"
        :name="operand"
        @click="calculate(operand)"
        :title="`Операция ${operand}`"
        :disabled="operand === '/' && operand2 === 0"
      >
        {{ operand }}
      </button>
      <br />
      <input
        type="checkbox"
        id="keyboard"
        value="Клавиатура"
        v-model="checked"
      />
      <label for="keyboard">Отобразить экранную клавиатуру</label>
      <div v-if="checked">
        <button
          class="btn"
          v-for="keyboard in keyboards"
          :key="keyboard"
          :name="keyboard"
          @click="enterKeyboard(keyboard)"
        >
          {{ keyboard }}
        </button>
        <button class="btn" name="del" id="del" @click="delLastDigit">
          &larr;
        </button>
      </div>
      <br />
      <label for="one">
        <input
          @click="activeOperand = 1"
          type="radio"
          name="operand"
          value="operand1"
          v-model="picked"
          id="1"
        />
        <label for="1"> Операнд 1</label></label
      >
      <br />
      <label for="two">
        <input
          @click="activeOperand = 2"
          type="radio"
          name="operand"
          value="operand2"
          v-model="picked"
          id="2"
        />
        <label for="2"> Операнд 2</label></label
      >
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: "",
      operand2: "",
      operands: [
        "+",
        "-",
        "/",
        "*",
        "Возведение в степень",
        "Целочисленное деление",
      ],
      result: 0,
      checked: false,
      picked: "",
      keyboards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
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
    },
    add() {
      this.result = Number(this.operand1) + Number(this.operand2);
      // this.fibResult = this.fib1 + this.fib2;
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
    enterKeyboard(keyboard) {
      if (this.activeOperand === 2) {
        this.operand2 = this.operand2 + keyboard;
      } else {
        this.operand1 = this.operand1 + keyboard;
      }
    },
    delLastDigit() {
      let backspasedOperand = "";
      if (this.activeOperand === 1) {
        backspasedOperand = this.operand1.slice(0, -1);
        this.operand1 = backspasedOperand;
      } else {
        backspasedOperand = this.operand2.slice(0, -1);
        this.operand2 = backspasedOperand;
      }
    },
  },
};
</script>
