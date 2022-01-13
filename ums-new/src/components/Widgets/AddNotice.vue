<template>
  <v-card>
    <v-card-title class="white--text primary">Add Notice</v-card-title>
    <v-form 
      class="ma-10"
      ref="form"
     
      lazy-validation
      
    >
      <v-text-field v-model="notice.name" label="Author Name" required></v-text-field>

      <v-textarea v-model="notice.message" label="Message" required></v-textarea>
      <v-layout row wrap>
        <v-menu
          v-model="fromDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              label="From Date"
              prepend-icon="event"
              readonly
              :value="fromDateDisp"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            :min="minDate"
            :max="maxDate"
            v-model="fromDateVal"
            no-title
            @input="fromDateMenu = true"
          ></v-date-picker>
        </v-menu>
      </v-layout>

      <v-btn color="primary" class="my-4" type="submit"> Add </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      message: "",
      notice:{
          neme:"",
          message:""
      },
      fromDateMenu: false,
      fromDateVal: null,

      minDate: "2019-07-04",
      maxDate: "2019-08-30",
    };
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
      // format date, apply validations, etc. Example below.
      // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    },
  },
  methods: {
    
  },
};
</script>

<style>
</style>