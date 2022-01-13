<template>
  <v-row>
    <v-col cols="4" md="3" v-for="stat in stats" :key="stat.user">
      <v-hover v-slot="{ hover }" open-delay="200">
         
        <v-card
          :color="stat.colors"
          max-height="200"
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
        >
          <v-row class="mx-auto">
            <v-col cols="12">
              <div class="avatar border">
                <v-avatar size="100">
                  <img :src="stat.avatar" />
                </v-avatar>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <v-card-title class="v-card-title">
                <v-row class="mx-auto pt-0" dense>
                  <v-col cols="12">
                    <div class="subhedding text-center white--text">
                      {{ stat.user }}
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-avatar class="avatar1" color="white" size="36">
                      <div class="black--text text-center">
                        {{ stat.number }}
                      </div>
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-card-title>
            </v-col>
            
          </v-row>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
    data(){
        return{
        
        }
    },
    computed:{
      stats(){
        return this.$store.state.stats;
      }
    }
};
</script>

<style>
.avatar {
  margin-top: -55px;
  text-align: center;
}
.avatar1 {
  margin: 0 87px;
  text-align: center;
}
.v-card-title {
  margin-top: -30px;
}
.v-card-action {
  margin-top: -35px;
}
.backgroundcolor {
  background-color: lightblue;
}
.progress-bar-div {
  height: 30%;
  background: red;
}
</style>