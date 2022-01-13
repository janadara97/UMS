<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#1C2842" dark v-bind="attrs" v-on="on">
          <v-icon left>add</v-icon>
          Add Module
        </v-btn>
      </template>
      <v-card>
        <v-layout row>
          <v-flex class="primary white--text text-center">
            <v-card-title>
              <span class="text-h5 pa-5">Add Module</span>
            </v-card-title>
          </v-flex>
        </v-layout>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Module Id*"
                  required
                  v-model="module.moduleId"
                  :rules="[required('Name')]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Module Name*"
                  required
                  v-model="module.moduleName"
                  :rules="[
                    required('Name'),
                    minLength('Name', 5),
                    maxLength('Name', 20),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Module Description*"
                  v-model="module.moduleDes"
                  :rules="[
                    required('Description'),
                    minLength('Description', 20),
                    maxLength('Description', 200),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  label="No Of Credits*"
                  v-model="module.moduleCredits"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" depressed @click="dialog = false"> Close </v-btn>
          <v-btn :loading="loading" color="green white--text" @click.prevent="addModules">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import userService from "../../Services/user.service";
export default {
  data: () => ({
    loading:false,
    module: [
      {
        moduleId: null,
        moduleName: "",
        moduleDes: "",
        moduleCredits: null,
      },
    ],
    defaultModule: [
      {
        moduleId: null,
        moduleName: "",
        moduleDes: "",
        moduleCredits: null,
      },
    ],

    dialog: false,
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
  }),
  methods: {
    async addModules() {
     await userService.addModules(this.module).then((response) => {
        if(response.data.success==true){
          this.loading=false;
          this.$emit('successSnackbar',response.data.message)
        }
        else{
          this.$emit('errorSnackbar',response.data.message)
        }
      });
      this.$emit("updateTable")
      this.$nextTick(() => {
        this.module = Object.assign({}, this.defaultModule);
        this.dialog = false;
      });
    },
  },
  name: "AddModulePopup",
};
</script>

<style>
</style>