<template>
     <v-data-table
      :headers="headers"
      :items="topics"
      items-per-page="10"
      class="elevation-1"
      >
      {{item}}
      <slot>
      <template v>
                    <v-btn color="success" >Create</v-btn>
      </template>
      </slot>
         
         
        
      </v-data-table>
</template>

<script>
//import EditTopicPopUps from '../PopupComponents/EditTopicPopups.vue'
export default {
  components:{
  //  EditTopicPopUps
  },
  props:['headers','topics','item'],
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>