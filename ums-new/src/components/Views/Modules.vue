<template>
  <v-app
    :style="{ background: $vuetify.theme.themes.light.background }"
    class="mx-5"
  >
    <div class="dashboard mt-5 pr-15">
      <comfirmation-snack-bar
        :timeout="2000"
        :snackbar="snackbar"
        :snackColour="snackColour"
        :snackIcon="snackIcon"
        :SnackText="snackText"
      />
      <v-container class="mx-10" fluid>
        <v-row class="mb-10 mx-1 pa-3">
          <add-module-popup
            @updateTable="getAllModules"
            @successSnackbar="successSnackbar"
            @errorSnackbar="errorSnackbar"
          />
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-card>
              <v-tabs v-model="tab" background-color="primary" dark>
                <v-tab> Table View </v-tab>
                <v-tab> Grid View </v-tab>
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
                  <delete-confirm-popup />
                  <edit-module-pop-up
                    @updateDialog="closeEditDialog"
                    :editDialog="editDialogVisibility"
                    :item="itemObject"
                    @updateModules="getAllModules"
                    @successSnackbar="successSnackbar"
                    @errorSnackbar="errorSnackbar"
                  />
                  <delete-module-pop-up
                    :snackbar="snackbar"
                    :loading="deleteLoading"
                    @deleteDialog="closeDelDialog"
                    :itemId="deleteItemId"
                    :deleteDialog="deleteDialogVisibility"
                    @updateTable="getAllModules"
                    @successSnackbar="successSnackbar"
                    @errorSnackbar="errorSnackbar"
                  />

                  <v-data-table
                    :search="search"
                    :headers="headers"
                    :items="modules"
                    class="elevation-1"
                  >
                    <template v-slot:[`item.moduleCredits`]="{ item }">
                      <v-chip :color="getColor(item.moduleCredits)" dark>
                        {{ item.moduleCredits }}
                      </v-chip>
                    </template>

                    <template v-slot:[`item.Actions`]="{ item }">
                      <v-row>
                        <v-col md="4">
                          <v-btn
                            rounded
                            color="primary"
                            @click="showEditDialog(item)"
                            >Edit</v-btn
                          >
                        </v-col>

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
                          >All Modules</v-card-subtitle
                        >
                        <v-row>
                          <v-col
                            cols="12"
                            md="3"
                            v-for="module in modules"
                            :key="module.moduleId"
                          >
                            <v-hover v-slot="{ hover }" open-delay="100">
                              <v-card class="ma-5" :elevation="hover ? 20 : 8">
                                <v-content>
                                  <img src="@/assets/svg1.svg/" alt="" />
                                </v-content>
                                <v-card-title class="justify-center">
                                  {{ module.moduleName }}
                                </v-card-title>
                                <v-card-subtitle>
                                  {{ module.moduleDes }}
                                </v-card-subtitle>
                                <v-card-actions class="justify-center">
                                  <div class="text-center">
                                    <v-btn color="primary"> Read More </v-btn>
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
            <ModuleRequests />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import AddModulePopup from "../PopupComponents/AddModulePopup.vue";

import ModuleRequests from "../Widgets/ModuleRequests.vue";
import userService from "../../Services/user.service";
import EditModulePopUp from "../PopupComponents/EditModulePopUp.vue";
import DeleteModulePopUp from "../PopupComponents/DeleteModulePopUp.vue";
import ComfirmationSnackBar from "../Widgets/comfirmationSnackBar.vue";

export default {
  data() {
    return {
      editDialogVisibility: false,
      deleteDialogVisibility: false,
      snackColour: "",
      snackIcon: "",
      snackText: "",
      snackbar: false,
      deleteLoading: false,
      itemObject: {
        moduleId: "",
        moduleName: "",
        moduleDes: "",
        moduleCredits: "",
      },
      tab: null,
      search: "",
      dialog: false,
      deleteDialog: false,
      editedIndex: -1,
      editedItem: {
        moduleId: "",
        moduleName: "",
        moduleDescription: "",
        moduleCredits: "",
      },
      toDeletedItem: {
        moduleId: "",
        moduleName: "",
        moduleDescription: "",
        moduleCredits: "",
      },
      defaultItem: {
        moduleId: "",
        moduleName: "",
        moduleDescription: "",
        moduleCredits: "",
      },
      headers: [
        {
          text: "Module ID",
          align: "start",
          sortable: "false",
          value: "moduleId",
        },
        { text: "Module Name", value: "moduleName" },
        { text: "Module Description", value: "moduleDes" },
        { text: "Number Of Credits", value: "moduleCredits" },
        { text: "Actions", value: "Actions" },
      ],

      modules: [],
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
    };
  },
  

  mounted() {
    this.getCurrentUser(), this.getAllModules();
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },

  methods: {
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
    getAllModules() {
      userService.getAllModules().then(
        (response) => {
          this.modules = response.data.data;
        },
        (error) => {
          error.message || error.toString();
        }
      );
    },
    getCurrentUser() {
      if (!this.currentUser) {
        this.$router.push("/authenticate");
      }
    },

    showEditDialog(item) {
      
      this.editDialogVisibility = true;
      this.itemObject = item;
    },
    showDeleteDialog(item) {
      this.deleteLoading = false;
      this.deleteDialogVisibility = true;
      this.deleteItemId = item.moduleId;
    },

    //Close Update and delete dialogs after competing the tasks

    closeEditDialog(value) {
      this.editDialogVisibility = value;
    },

    closeDelDialog(value) {
      this.deleteDialogVisibility = value;
    },
  },
  components: {
    ModuleRequests,
    AddModulePopup,
    EditModulePopUp,
    DeleteModulePopUp,
    ComfirmationSnackBar,
  },
};
</script>

<style>
</style>