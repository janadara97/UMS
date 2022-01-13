<template>
  <div>
    <navigation-drawer />
    
    <main-nav-bar />
  </div>
</template>

<script>
import MainNavBar from "../MainNavBar.vue";
import NavigationDrawer from "../NavigationDrawer.vue";

export default {
  components: {
    MainNavBar,
    NavigationDrawer,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    getCurrentUser() {
      if (!this.currentUser) {
        this.$router.push("/authenticate");
      }
    },
  },
  mounted() {
    this.getCurrentUser();
  },
};
</script>

<style>
</style>