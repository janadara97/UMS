<template>
  <v-col cols="12" md="12">
    <v-card>
      <v-card-title  class="white--text primary" 
        >Students</v-card-title
      >
      <apexchart
        width="500"
        type="donut"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      series: [ 35 ,24 ],

      chartOptions: {
        chart: {
          type: "donut",
          width: 380,
        },
        labels: ["Female", "Male"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>