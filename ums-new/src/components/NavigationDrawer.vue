<template>
<div>
<!-- 
   <v-sheet
    height="800"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height fill-weight" >
      
      
      <router-view></router-view>
       
     
    </v-container> -->
   

    <v-navigation-drawer
      
      permanent
      expand-on-hover
      color="primary"
      v-model="drawer"
      absolute
      app
      height="1500"
      
    >
      <v-list-item class="  pb-2" w>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg" @click.stop="mini = !mini"></v-img>
        </v-list-item-avatar>

        <v-list-item-content >
          <v-list-item-title class="bold white--text">Chathura</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense  two-line>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="grey--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  <!-- </v-sheet> -->
  </div>
</template>

<script>

export default {
  components: {  },
  data() {
    return {
      drawer: true,
      items: [
        
        { title: "Dash Board", icon: "dashboard", route: "/dashboard" },
        { title: "Admin", icon: "admin_panel_settings", route: "/admin" },
        
        { title: "Modules", icon: "view_module", route: "/modules" },
        { title: "Topics", icon: "view_module", route: "/getAllTopics" },

      ],
      mini: true,
    };
  },
};
</script>

<style>
</style>