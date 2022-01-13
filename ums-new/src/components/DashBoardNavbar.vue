<template>
  <nav>
  
      
        <v-app-bar app flat color="#1C2842">
        
          <v-toolbar-title class="font-weight-lighten text-uppercase white--text">UMS

          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="logout"  color="white">
           <span> Sign Out</span>
           <v-icon right>logout</v-icon>
            </v-btn>
            </v-app-bar>
      
      <!-- Navigation Drawer -->
    <NavigationDrawer/>
     
      </nav>
  
</template>

<script>
//import NavBar from './MainNavBar.vue'
import NavigationDrawer from './NavigationDrawer.vue'
export default {
  components:{
    NavigationDrawer
  },
  methods:{
    logout(){
      
    }
  },
data(){

  return{
  drawer:true
  }
}

}
</script>

<style>

</style>