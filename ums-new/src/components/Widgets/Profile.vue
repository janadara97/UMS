<template>
  <v-col cols="12" md="12">
            <v-card class=" text-center "  elevation="1">
              <v-avatar class="mt-n7" size="80">
                <img src="@/assets/student.png/" alt="" />
              </v-avatar>
              <v-card-title class="layout justify-center">
                 {{name}}
              </v-card-title>
              <v-card-subtitle class="layout justify-center"
                >{{role}}</v-card-subtitle
              >
              <v-card-text class="mt-n5">
               
                 
                  {{token}}
              </v-card-text>
            </v-card>
          </v-col>
</template>

<script>
export default {

props:{
  name:String,
  role:String,
  token:String,
}
}
</script>

<style>

</style>