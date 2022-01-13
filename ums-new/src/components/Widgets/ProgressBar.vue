<template>
  <v-col cols="12" md="12">
    <v-card>
      <v-card-title  class="white--text primary"
        >Academin Progress</v-card-title
      >
      <v-container>
        <v-row justify="center" align="center">
          <v-col
            cols="12"
            v-for="progress in progress"
            :key="progress.progressName"
          >
            <div>{{ progress.progressName }}</div>
            <v-progress-linear
              :color="setProgressBarColours(progress.progressValue)"
              height="25"
              :value="progress.progressValue"
              striped
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
export default {
   
   
  data() {
    return {
    
    };
  },
  methods: {
    setProgressBarColours(value) {
      if (value >= 0 && value <= 25) {
        return "red";
      } else if (value > 25 && value <= 50) {
        return "yellow";
      } else if (value > 50 && value <= 75) {
        return "blue";
      } else if (value > 75 && value <= 100) {
        return "green";
      }
    },
  },

  computed:{
    progress(){
      return this.$store.state.progress;
    }
  }
};
</script>

<style>
</style>