<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#1C2842" dark v-bind="attrs" v-on="on">
          <v-icon left>add</v-icon>
          Add User
        </v-btn>
      </template>
      <v-card>
        <v-layout row>
          <v-flex class="primary white--text text-center">
            <v-card-title>
              <span class="text-h5 pa-5">Add User</span>
            </v-card-title>
          </v-flex>
        </v-layout>

        <v-card-text>
          <v-container>
            <v-row>
             

              <v-col cols="12">
                <v-text-field
                  label="Name*"
                  required
                  v-model="user.name"
                  :rules="[
                    required('Name'),
                    minLength('Name', 5),
                    maxLength('Name', 20),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="User Name*"
                  v-model="user.userName"
                  :rules="[
                    required('userName'),
                    minLength('userName', 5),
                    maxLength('userName', 20),
                  ]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  placeholder="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="user.password"
                  :rules="[required('password')]"
                  @click:append="showPassword = !showPassword"
                >
                </v-text-field>
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
            @click.prevent="addUser"
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
    user: [
      {
        id: null,
        name: "",
        userName: "",
        password: "",
        roleNames: [],
      },
    ],
    defaultUser: [
      {
        id: null,
        name: "",
        userName: "",
        password: "",
        roleNames: [],
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
    async addUser() {
      console.log("hiiiiiii")
      await userService.addUser(this.user).then((response) => {
        if (response.data.success == true) {
          this.loading = false;
          this.$emit("successSnackbar", response.data.message);
        } else {
          this.$emit("errorSnackbar", response.data.message);
        }
      });
      this.$emit("updateTable");
      this.$nextTick(() => {
        this.topic = Object.assign({}, this.defaultUser);
        this.dialog = false;
      });
    },
  },
  name: "AddTopicPopup",
};
</script>

<style>
</style>