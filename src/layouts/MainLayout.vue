<template>
  <div class="app-main-layout">
    <app-navbar @click="isOpen = !isOpen"></app-navbar>

    <app-sidebar v-model="isOpen"></app-sidebar>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";

export default {
  name: "main-layout",
  data() {
    return {
      isOpen: true
    };
  },
  async mounted() {
    if (!Object.keys( this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }
  },
  components: {
    appNavbar: Navbar,
    appSidebar: Sidebar
  }
};
</script>

<style>
</style>
