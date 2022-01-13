<template>
  <v-dialog
    v-model="deleteDialog"
    persistent
    max-width="500px"
    :retain-focus="false"
  >
    <v-card>
      <v-toolbar color="error" dark>Alert !!!</v-toolbar>
      <v-card-text>
        <div class="text-h4 text-center py-12">Are You Sure ?</div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text :loading="loading" @click.prevent="confirmDelete">Yes</v-btn>
        <v-btn text @click="closeDelete">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import userService from "../../Services/user.service";
export default {
  data() {
    return {
      loading:false
    };
  },

  props: {
    deleteDialog: Boolean,
    itemId: String,
   
   
  },
  methods: {
    async confirmDelete() {
      
      this.loading=true;
      await userService.deleteTopic(this.itemId).then((response) => {
        if (response.data.success == true) {
          this.loading=false;
          this.$emit('successSnackbar',response.data.message)
        }
        else{
          this.$emit('errorSnackbar',response.data.message)
        }
      });
      this.deleteDialog = false;
      this.$emit("deleteDialog", false);
      //for update the table
      this.$emit("updateTable");
      
    },

    closeDelete() {
      this.itemId = "";
      this.deleteDialog = false;
      this.$emit("deleteDialog", false);
    },
  },
};
</script>

<style>
</style>