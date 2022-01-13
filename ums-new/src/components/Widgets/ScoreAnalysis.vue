<template>
  <v-col cols="8" md="12" class="">
    <v-card>
      <v-card-title class="white--text primary"
        >Result Analysis</v-card-title
      >
      <v-sparkline
        :value="value"
        :smooth="radius || false"
        :padding="padding"
        
        :gradient="gradient"
        auto-draw
        show-labels
      >
      </v-sparkline>
    </v-card>
  </v-col>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  data() {
    return {
      value: [5, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      radius: 10,
      padding: 8,
      gradient: gradients[5],
      gradientDirection: "top",
      gradients,
    };
  },
};
</script>

<style>
</style>