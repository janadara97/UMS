<template>
  <v-col>
    <v-dialog
      v-model="editDialog"
      persistent
      max-width="500px"
      :retain-focus="false"
    >
      <v-card>
        <v-layout row>
          <v-flex class="primary white--text text-center">
            <v-card-title>
              <span class="text-h5 pa-5">Edit Topic</span>
            </v-card-title>
          </v-flex>
        </v-layout>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Topic ID*"
                  v-model="item.tId"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Topic Name*"
                  v-model="item.tName"
                  :rules="[
                   
                    minLength('Name', 5),
                    maxLength('Name', 50),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Topic Description*"
                  v-model="item.tDes"
                  :rules="[
                    
                    minLength('Description', 20),
                    maxLength('Description', 200),
                  ]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" depressed @click="close"> Close </v-btn>
          <v-btn color="green white--text" @click="updateTopic"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import userService from '../../Services/user.service'
export default {
  data: () => ({
    tab: null,

    editedIndex: -1,
     required(property) {
      return (v) => (v && v.length > 0) || `You Must Input a ${property}`;
    },
    minLength(property, minLength) {
      return (v) =>
        v.length >= minLength ||
        `${property} must be at least ${minLength} characters`;
    },
    maxLength(property, maxLength) {
      return (v) =>
        v.length <= maxLength ||
        `${property} must be at least ${maxLength} characters`;
    },
    getColor(credits) {
      if (credits >= 1 && credits < 3) {
        return "red";
      } else if (credits >= 3 && credits < 5) return "yellow";
      else return "green";
    },
  }),
  methods: {

     async updateTopic() {
      //this.item=this.editeItem

    await userService.updateTopic(this.item).then((response)=>{
      if(response.data.success==true){
        this.loading=false;
        this.$emit('successSnackbar',response.data.message)
      }
      else{
        this.$emit('errorSnackbar',response.data.message)
      }
    });
      this.item = "";
      this.editDialog = false;
      this.$emit("updateDialog", false);
      this.$emit('updateTopics')
    },
    editItem(item) {
      this.editedIndex = this.topics.indexOf(item);

      this.editedItem = Object.assign({}, item);

      this.dialog = true;
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    close() {
      this.editDialog = false;
      this.$nextTick(() => {
        this.item = "";
        this.$emit("updateDialog", false);
      });
    },
    
  },

  props: {
    editDialog: Boolean,
    item: Object,
  },
  watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },
};
</script>

<style>
</style>