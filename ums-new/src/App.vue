<template>

  <v-app class="grey lighten-4">
    <main-dash-board v-if="!['login', 'notFound'].includes($route.name)"></main-dash-board>
    <v-main class="pa-0">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MainDashBoard from './components/Views/MainDashBoard.vue';

export default {
  name: "App",
  components: {
    MainDashBoard
    
    
  },

  data: () => ({
    //
  }),
};
</script>
