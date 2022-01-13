<template>
  <div class="NotFound">
    <v-container>
      <v-row wrap>
        <v-col xl="12">
          <v-card height="400" color="transparent" class="mx-auto" flat >
              <div class="text-center"><v-img class="notfound mx-auto" src="@/assets/notfound.png"></v-img></div>
            <div class="display-3 mt-5 text-center">Page not found.</div>
            <div class="grey--text lighten-5 text-center">
              The page you are trying to get to never existed in this reality,
              or has migrated to a parallel universe.
            </div>
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
  .paragraph-text {
    font-size: 18px;
  }
  .notfound{
      height: 100px;
      width: 100px;
      align-items: center;
  }
</style>