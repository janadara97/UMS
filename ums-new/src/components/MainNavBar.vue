<template>
  <nav>
      <v-toolbar flat >
        <v-app-bar app flat color="white">
        
          <v-toolbar-title class="font-weight-lighten text-uppercase black--text">UMS

          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn  color="black" @click.prevent="logOut">
           <span class="white--text"> Sign Out</span>
           <v-icon right class="white">logout</v-icon>
            </v-btn>
            </v-app-bar>
      </v-toolbar>
  </nav>
</template>

<script>
export default {
methods:{
  logOut(){
    
    this.$store.dispatch('auth/logout');
    this.$router.push('/authenticate')
  }

 
}
}
</script>

<style>

</style>