<template>
  <v-col cols="12" md="12">
    <v-card>
      <v-card-title  class="white--text primary">Module Requests</v-card-title>

      <v-virtual-scroll
        :items="moduleRequests"
        :item-height="220"
        height="500"
      >
        <template v-slot:default="{ item }">
          <v-card
            rounded="lg"
            class="ma-2"
            
            
          >
            <v-card-title class="grey--text my-2">
                <span>Requested Module :- </span>
              <v-chip color="#1C2842" class="white--text">{{
                item.Name
              }}</v-chip></v-card-title
            >
            <v-card-subtitle class="">
                <span>Requested By :- </span><span class="font-weight-medium">{{ item.person }}</span>
              <h3 class="black--text lighten-2 font-weight-medium">
                
              </h3>
              <v-spacer />
              <h4 class="gey--text font-weight-regular">
                {{ item.date }}
              </h4>
            </v-card-subtitle>
            <v-card-action  class="justify-center">
                <v-btn  class="mx-5 mb-5" color="primary" small>Approve</v-btn>
                 <v-btn class="mx-5 mb-5" color="error" small> Desline</v-btn>
            </v-card-action>

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
  name:"ModuleRequests",
  data() {
    return {
      
    
      
    };
  },
  methods: {
  
  },
  computed:{
    moduleRequests(){
      return this.$store.state.moduleRequests;
    }
  }
};
</script>

<style>
</style>