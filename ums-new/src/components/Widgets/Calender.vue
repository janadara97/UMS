<template>
  <v-col cols="12" md="12">
    <v-date-picker
      v-model="picker"
      elevation="15"
      color="orange"
      full-width
      no-title="true"
      class="mt-3"
      :landscape="$vuetify.breakpoint.smAndUp"
    >
    </v-date-picker>
  </v-col>
</template>

<script>
export default {};
</script>

<style>
</style>