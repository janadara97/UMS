<template>
  <v-app
    class="mx-5"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <div class="dashboard mt-5">
      <comfirmation-snack-bar
        :timeout="2000"
        :snackbar="snackbar"
        :snackColour="snackColour"
        :snackIcon="snackIcon"
        :SnackText="snackText"
      />
      <v-container class="mx-10" fluid>
        <v-row class="mb-10 mx-5 pa-3">
          <Popup
            @updateTable="getAllTopics"
            @successSnackbar="successSnackbar"
            @errorSnackbar="errorSnackbar"
          ></Popup>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" class="pr-5">
            <v-card class="mr-10">
              <v-tabs
                v-model="tab"
                background-color="primary"
                dark
                class="mr-5"
              >
                <v-tab> Table View </v-tab>
                <v-tab> Grid View </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-row>
                    <v-col md="12">
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
                    </v-col>
                   
                  </v-row>

                  <edit-topic-popups
                    @updateDialog="closeEditDialog"
                    :editDialog="editDialogVisibility"
                    :item="itemObject"
                    @updateTopics="getAllTopics"
                    @successSnackbar="successSnackbar"
                    @errorSnackbar="errorSnackbar"
                  />
                  <delete-topic-popup
                    :snackbar="snackbar"
                    :loading="deleteLoading"
                    @deleteDialog="closeDelDialog"
                    :itemId="deleteItemId"
                    :deleteDialog="deleteDialogVisibility"
                    @updateTable="getAllTopics"
                    @successSnackbar="successSnackbar"
                    @errorSnackbar="errorSnackbar"
                  />
                  <v-data-table
                    :search="search"
                    :headers="headers"
                    :items="topics"
                    class="elevation-1"
                  >
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
                          >All Topics</v-card-subtitle
                        >
                        <v-row>
                          <v-col
                            cols="12"
                            md="3"
                            v-for="topic in topics"
                            :key="topic.tId"
                          >
                            <v-hover v-slot="{ hover }" open-delay="100">
                              <v-card class="ma-5" :elevation="hover ? 20 : 8">
                                <v-content>
                                  <img :src="topic.image" alt="" />
                                </v-content>
                                <v-card-title class="justify-center">
                                  {{ topic.tName }}
                                </v-card-title>
                                <v-card-subtitle>
                                  {{ topic.tDes }}
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
        </v-row>

        <v-divider></v-divider>
      </v-container>
    </div>
  </v-app>
</template>


<script>
import userService from "../../Services/user.service";
import Popup from "../PopupComponents/AddTopicPopup.vue";
import DeleteTopicPopup from "../PopupComponents/DeleteTopicPopup.vue";
import comfirmationSnackBar from "../Widgets/comfirmationSnackBar.vue";

import EditTopicPopups from "../PopupComponents/EditTopicPopups.vue";

export default {
  data: () => ({
    editDialogVisibility: false,
    deleteDialogVisibility: false,
    
    snackColour: "",
    snackIcon: "",
    snackText: "",
    search: "",
    tab: null,
    snackbar: false,
    deleteLoading: false,
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    headers: [
      { text: "Topic ID", align: "start", sortable: "false", value: "tId" },
      { text: "Topic Name", value: "tName" },
      { text: "Topic Description", value: "tDes" },
      { text: "Module ID", value: "moduleId" },
      { text: "Module Name", value: "moduleName" },
      { text: "Actions", value: "Actions" },
    ],
    itemObject: {
      tId: "",
      tName: "",
      tDes: "",
      moduleId: "",
      moduleName: "",
    },
    topics: [],

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

  components: {
    Popup,

    EditTopicPopups,
    DeleteTopicPopup,
    comfirmationSnackBar,
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
    getCurrentUser() {
      if (!this.currentUser) {
        this.$router.push("/authenticate");
      }
    },
    showEditDialog(item) {
      console.log(item.tId);

      this.editDialogVisibility = true;
      console.log(this.editDialogVisibility);
      this.itemObject = item;
    },
    showDeleteDialog(item) {
      this.deleteLoading = false;
      this.deleteDialogVisibility = true;
      this.deleteItemId = item.tId;
    },
    closeEditDialog(value) {
      this.editDialogVisibility = value;
    },

    closeDelDialog(value) {
      this.deleteDialogVisibility = value;
    },

    getAllTopics() {
      userService.getAllTopics().then(
        (reponse) => {
          this.topics = reponse.data.data;
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
    this.getAllTopics(), this.getCurrentUser();
  },
};
</script>

<style>
</style>