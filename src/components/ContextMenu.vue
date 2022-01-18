<template>
  <div class="contextMenu" v-if="show" :style="styles">
    <div
      class="contextMenu__item"
      v-for="(item, idx) in items"
      :key="idx"
      @click="onClickContextText(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      show: false,
      items: [],
      xPos: 0,
      yPos: 0,
    };
  },
  methods: {
    onClickContextText(item) {
      item.action();
      this.$context.close();
    },
    onClose() {
      this.items = [];
      this.show = false;
    },
    onShown({ items, caller }) {
      this.items = items;
      this.show = true;
      this.setPosition(caller);
    },
    setPosition(caller) {
      const pos = caller.getBoundingClientRect();
      this.xPos = pos.left;
      this.yPos = pos.top;
    },
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos + 10}px`,
        left: `${this.xPos + 20}px`,
      };
    },
  },
  mounted() {
    this.$context.EventBus.$on("show", this.onShown);
    this.$context.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("show", this.onShown);
    this.$context.EventBus.$off("close", this.onClose);
  },
};
</script>
<style lang="scss" scoped>
.contextMenu {
  position: absolute;
  background: #eee;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #43bb67;
}
</style>
