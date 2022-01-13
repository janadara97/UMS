<template>
  <v-col cols="12" md="12">
    <v-card>
      <v-card-title class="white--text primary">Notice Board</v-card-title>

      <v-virtual-scroll
        :items="noticeBoardData"
        :item-height="125"
        height="500"
      >
        <template v-slot:default="{ item }">
          <v-card
            rounded="lg"
            class="ma-2"
            flat
            
          >
            <v-card-title class="white--text my-2">
              <v-chip :color="randomColour()" class="white--text">{{
                item.date
              }}</v-chip></v-card-title
            >
            <v-card-subtitle class="">
              <h3 class="black--text lighten-2 font-weight-medium">
                {{ item.message }}
              </h3>
              <v-spacer />
              <h4 class="gey--text font-weight-regular">
                {{ item.author }}
              </h4>
            </v-card-subtitle>

            <v-spacer></v-spacer>
          </v-card>
          <v-divider></v-divider>
        </template>

        <v-spacer></v-spacer>
      </v-virtual-scroll>
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
    randomColour() {
      // const r=()=>Math.floor(256*Math.random());
      return this.colors[this.genRandomIndex(this.colors.length)];
    },
    randomBackgroundColour() {
      // const r=()=>Math.floor(256*Math.random());
      return this.backColors[this.genRandomIndex(this.Backcolors.length)];
    },
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
  },

  computed:{
    noticeBoardData(){
      return this.$store.state.noticeBoardData
    },
    colors(){
      return this.$store.state.colors;
    },
    backColors(){
      return this.$store.state.backColors
    }
  }
};
</script>

<style>
</style>