<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded color="primary" v-bind="attrs" v-on="on">
         <v-icon left><slot name="btn-icon">add</slot></v-icon>
          {{buttonName}}
        </v-btn>
        
      </template>
      <v-card>
        <v-layout row>
          <v-flex  class="primary white--text text-center">
            <v-card-title >
              <slot name="v-card-title">
              <span class="text-h5">User Profile</span>
              </slot>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-card-text>
          <v-card-container>
            <v-row>
              <v-col md="12" sm="12">
                <slot name="v-text-field">
                  <v-text-field
                  label=label,
                  >
                  </v-text-field>
          </slot>
              </v-col>

               
            </v-row>
          </v-card-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
          <slot name="action-button1"> Close</slot>
           
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
          <slot name="action-button2"> Save</slot>
           
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  components: {},
  data(){
    return{
     dialog: false,
    }
  },
  props:{
    buttonName:String,
  }
    
  
  
};
</script>

<style>
</style>