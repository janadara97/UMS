<template>
  <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          rounded
            color="error"
            v-bind="attrs"
            v-on="on"
          >Del</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="error"
              dark
            >Alert !!!</v-toolbar>
            <v-card-text>
              <div class="text-h4 text-center py-12">Are You Sure ?</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Yes</v-btn>
               <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
</template>

<script>
export default {

}
</script>

<style>

</style>