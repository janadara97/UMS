<template>
  <v-app :style="{ background: $vuetify.theme.themes.light.background }">
    <div class="dashboard ma-15">
      <v-container class="my-5">
        <v-row no-gutters class="mainRow">
          <v-col cols="12" md="8" class="stat-box">
            <!-- Stat Boxes -->
            <stat-boxes />
          </v-col>
          <v-col cols="12" md="4" class="Notice-Board">
            <!-- Notice Board -->
            <notice-board ></notice-board>
          </v-col>
          <v-col cols="12" md="8" class="Analysis">
            <!-- Analysis  -->
            <score-analysis />
          </v-col>
         
          
          
          <v-col cols="12" md="4">
            <!-- Apex Chart -->
            <apex-pie-chart
          /></v-col>
          <v-col cols="12" md="8" class="progress-bar">
            <!-- Academic Progress Bar -->
            <progress-bar></progress-bar>
          </v-col>

          <v-col cols="12" md="4" >
             <profile :name="currentUser.userName" :role="currentUser.privileges" :token="currentUser.jwt"></profile>
          </v-col>
        
         
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import NoticeBoard from "../Widgets/NoticeBoard.vue";

import ScoreAnalysis from "../Widgets/ScoreAnalysis.vue";

import ProgressBar from "../Widgets/ProgressBar.vue";
import StatBoxes from "../Widgets/StatBoxes.vue";

import ApexPieChart from "../Widgets/ApexPieChart.vue";
import Profile from '../Widgets/Profile.vue'

export default {
  data() {
    return {
      userName:"",
      role:"",
      token:"",
      authoroties:"",
      
      notice:[
        {
          name:"",
          message:""
        }
      ]
      // colorCache: {},
      // width: 2,
      // lineCap: "round",
      // fill: false,
      // type: "trend",
      // autoLineWidth: false,
      // arrayEvents: null,
      // date2: new Date().toISOString().substr(0, 10),
      //picker: new Date.toISOString().substr(0, 10),
      // author: ["rep", "rep", "rep", "rep", "rep", "rep"],
    };
  },
  computed:{
    currentUser(){
      return this.$store.state.auth.user
      
    }
  },
  mounted(){
    if(!this.currentUser){
      this.$router.push('/authenticate')
    }
  },
  // computed:{
  //   itemss(){
  //     const colorsLength = this.colors.length
  //     const messageLength =this.message.length
  //     const authorLength=this.author.length

  //     return {

  //           color: this.colors[this.genRandomIndex(colorsLength)],
  //           message:this.message[this.genRandomIndex(messageLength)],
  //           author:this.authorLength[this.genRandomIndex(authorLength)],

  //         }
  //   }
  // },

  components: {
    
    ScoreAnalysis,
    NoticeBoard,
 
    ProgressBar,
    StatBoxes,
   
    ApexPieChart,
    Profile
  },
  methods:{
    
  }
  
};
</script>

<style>
.stat-box {
  height: 300px;
}
.Analysis {
  margin-top: -350px;
}
.Notice-Board {
  margin-top: -20px;
}
.progress-bar {
  margin-top: -320px;
}
</style>