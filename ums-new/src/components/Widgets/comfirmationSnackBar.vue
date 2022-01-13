<template>
  <div class="text-center">
    <v-snackbar
    :color="snackColour"
    class="white--text"
    v-model="snackbar"
    multi-line
    :timeout="timeout"
    >
    <v-icon>
            {{snackIcon}}
        </v-icon>
      {{SnackText}}
        <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
         
          outlined
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
        
      </template>
      
     
    </v-snackbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            

        }
    },
    props:{
        snackbar:Boolean,
        SnackText:String,
        snackColour:String, //#EF5350
        snackIcon:String,
        timeout:Number


    }
};
</script>

<style>
</style>