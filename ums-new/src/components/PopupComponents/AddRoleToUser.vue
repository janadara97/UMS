<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#1C2842" dark v-bind="attrs" v-on="on">
          <v-icon left>add</v-icon>
          Add Role To User
        </v-btn>
      </template>
      <v-card>
        <v-layout row>
          <v-flex class="primary white--text text-center">
            <v-card-title>
              <span class="text-h5 pa-5">Add Role To User</span>
            </v-card-title>
          </v-flex>
        </v-layout>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="User Name*"
                  required
                  v-model="user.userName"
                  :rules="[
                    required('userName'),
                    minLength('userName', 5),
                    maxLength('userName', 20),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  :items="['ADMIN', 'STUDENT', 'LECTURER']"
                  label="Role"
                  dense
                  v-model="user.roleName"
                  outlined
                ></v-select>
               
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" depressed @click="dialog = false"> Close </v-btn>
          <v-btn
            :loading="loading"
            color="green white--text"
            @click.prevent="addRoleToUser"
          >
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
    showPassword: false,
    loading: false,
    user: {
      userName: "",

      roleName: "",
    },

    defaultUser: {
      userName: "",

      roleName: "",
    },

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
    async addRoleToUser() {
      await userService.addRoleToUser(this.user).then((response) => {
        if (response.data.success == true) {
          this.loading = false;
          this.$emit("successSnackbar", response.data.message);
        } else {
          this.$emit("errorSnackbar", response.data.message);
        }
      });
      this.$emit("updateTable");
      this.$nextTick(() => {
        this.user = Object.assign({}, this.defaultUser);
        this.dialog = false;
      });
    },
  },
  name: "AddRoleToUser",
};
</script>

<style>
</style>