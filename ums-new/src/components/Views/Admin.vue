<template>
  <v-app
    :style="{ background: $vuetify.theme.themes.light.background }"
    class="mx5"
  >
    <div class="dashboard mt-5 px-10">
      <confirmation-snack-bar
        :timeout="2000"
        :snackbar="snackbar"
        :snackColour="snackColour"
        :snackIcon="snackIcon"
        :SnackText="snackText"
      />
      <v-container class="mx-10" fluid>
        <v-row class="mb-10 mx-1 pa-3">
          <AddUserPopup
            @updateTable="getAllUsers"
            @successSnackbar="successSnackbar"
            @errorSnackbar="errorSnackbar"
          ></AddUserPopup>
          <add-role-to-user
            @updateTable="getAllUsers"
            @successSnackbar="successSnackbar"
            @errorSnackbar="errorSnackbar"
          ></add-role-to-user>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-card max-height="500">
              <v-tabs v-model="tab" background-color="primary">
                <v-tab class="white--text"> Table View </v-tab>
                <v-tab class="white--text"> Grid View </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card-title>
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    >
                    </v-text-field>
                  </v-card-title>

                  <delete-user-popup
                    :snackbar="snackbar"
                    :loading="deleteLoading"
                    @deleteDialog="closeDelDialog"
                    :itemId="deleteItemId"
                    :deleteDialog="deleteDialogVisibility"
                    @updateTable="getAllUsers"
                    @successSnackbar="successSnackbar"
                    @errorSnackbar="errorSnackbar"
                  />
                  <v-data-table
                    :search="search"
                    :headers="headers"
                    :items="users"
                    class="elevation-1"
                  >
                    <template v-slot:[`item.Actions`]="{ item }">
                      <v-row>
                        <!-- Delete Pop up -->
                        <v-col md="2">
                          <v-btn
                            rounded
                            color="error"
                            @click="showDeleteDialog(item)"
                            >Del</v-btn
                          >
                        </v-col>
                      </v-row>
                    </template>
                  </v-data-table>
                </v-tab-item>

                <v-tab-item>
                  <v-row class="mx-3">
                    <!-- v-card modules -->
                    <v-col cols="12" md="12" class="pl-0 px-7 mr-0">
                      <v-card class="my-5">
                        <v-card-subtitle class="grey--text"
                          >All Users</v-card-subtitle
                        >
                        <v-row>
                          <v-col
                            cols="12"
                            md="3"
                            v-for="user in users"
                            :key="user.UserName"
                          >
                            <v-hover v-slot="{ hover }" open-delay="100">
                              <v-card class="ma-5" :elevation="hover ? 20 : 8">
                                <v-content>
                                  <img class="mr-15" :src="user.image" alt="" />
                                </v-content>
                                <v-card-title class="justify-center">
                                  <v-chip color="yellow">{{}}</v-chip>

                                  <v-spacer></v-spacer>
                                  <span>{{ user.UserName }}</span>
                                </v-card-title>

                                <v-card-subtitle>
                                  <span class="mt-5"
                                    >Assigned Authorities :-
                                  </span></v-card-subtitle
                                >
                                <ul>
                                  <li class="grey--text">
                                    {{ user.Authorities }}
                                  </li>
                                </ul>

                                <v-card-actions class="justify-center">
                                  <div class="text-center">
                                    <v-btn color="primary"> Message </v-btn>
                                  </div>
                                </v-card-actions>
                              </v-card>
                            </v-hover>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <add-notice></add-notice>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import AddUserPopup from "../PopupComponents/AddUserPopup.vue";
import userService from "../../Services/user.service";
import ConfirmationSnackBar from "../Widgets/comfirmationSnackBar.vue";
import DeleteUserPopup from "../PopupComponents/DeleteUserPopup.vue";
import AddRoleToUser from '../PopupComponents/AddRoleToUser.vue'

//import DeleteConfirmPopup from "../PopupComponents/DeleteConfirmPopup.vue";
import AddNotice from "../Widgets/AddNotice.vue";

export default {
  components: {
    AddUserPopup,
    ConfirmationSnackBar,
    AddNotice,
AddRoleToUser ,
    DeleteUserPopup,
  },

  data() {
    return {
      deleteDialogVisibility: false,
      snackbar: false,
      deleteLoading: false,
      notice: [
        {
          name: "",
          message: "",
        },
      ],

      tab: null,

      search: "",
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,

      users: [],
      headers: [
        { text: "User ID", value: "id" },
        { text: "Name", value: "name" },
        {
          text: "User Name",
          align: "start",
          sortable: "false",
          value: "userName",
        },
        { text: "Role", value: "roleNames" },
        // { text: "Authorities", value: "Authorities" },
        { text: "Actions", value: "Actions" },
      ],
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
    };
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    showDeleteDialog(item) {
      this.deleteLoading = false;
      this.deleteDialogVisibility = true;
      this.deleteItemId = item.id;
    },
    closeDelDialog(value) {
      this.deleteDialogVisibility = value;
    },
    async successSnackbar(message) {
      this.snackbar = true;
      this.snackColour = "#43A047";
      (this.snackIcon = "check_circle"), (this.snackText = message);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.snackbar = false;
    },
    async errorSnackbar(message) {
      this.snackbar = true;
      this.snackColour = "error";
      (this.snackIcon = "error"), (this.snackText = message);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.snackbar = false;
    },
    getCurrentUser() {
      if (!this.currentUser) {
        this.$router.push("/authenticate");
      }
    },
    async getAllUsers() {
      await userService.getUsers().then(
        (response) => {
          console.log(response.data.message);
          this.users = response.data.data;
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
  },

  mounted() {
    this.getAllUsers();
  },
};
</script>

<style>
</style>