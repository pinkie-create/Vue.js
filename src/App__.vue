<template>
  <div id="app">
    <calculator />
    <div class="wrapper">
      <header>
        <router-link to="/dashboard">Dashboard</router-link> /
        <router-link to="/about">about</router-link> /
        <span @click="goToPageNotFound">notfound</span>
        <div class="title">My personal costs</div>
        <div class="total" v-if="total">Total: {{ total }}</div>
      </header>
      <main>
        <router-view />
      </main>
      <transition name="fade">
        <modal-window-add-pyament-form
          :settings="settings"
          :componentName="componentName"
          v-if="componentName"
        />
      </transition>
      <transition name="fade">
        <context-menu />
      </transition>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import ContextMenu from "./components/ContextMenu.vue";
export default {
  components: {
    ModalWindowAddPyamentForm: () =>
      import("./components/ModalWindowAddPyamentForm.vue"),
    ContextMenu,
  },
  name: "App",
  data() {
    return {
      settings: {},
      componentName: "",
    };
  },
  methods: {
    goToPageNotFound() {
      if (this.$route.name === "notfound") return;
      this.$router.push({
        name: "notfound",
      });
    },
    onShow({ name, settings }) {
      this.componentName = name;
      this.settings = settings;
    },
    onHide() {
      this.settings = {};
      this.componentName = "";
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show");
    this.$modal.EventBus.$off("hide");
  },
  // async created() {
  //   await this.fetchData(1);
  // },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
