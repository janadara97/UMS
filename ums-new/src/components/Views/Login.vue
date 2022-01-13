 <template>
  <div
    :style="{
      backgroundImage: 'url(' + require('../../assets/background.jpg') + ')',
    }"
    class="background"
  >
   <comfirmation-snack-bar
        :timeout="2000"
        :snackbar="snackbar"
        :snackColour="snackColour"
        :snackIcon="snackIcon"
        :SnackText="snackText"
      />
  
    <v-card class="v-card" max-width="1300" height="600">
      <v-container class="container">
        <v-row class="pa-2">
          <v-col sm="12" md="7" class="loginIcon"> </v-col>
          <v-col class="loginArea" md="5" sm="12">
            <div class="text-center">
              <v-avatar color="indigo lighten-4">
                <v-icon color="indigo" size="40">account_circle</v-icon>
              </v-avatar>
              <h3 class="indigo--text">UMS LOGIN</h3>
            </div>
            <v-form @submit.prevent="handleLogin">
              <v-card-text>
                <v-text-field
                  label="User Name"
                  placeholder="username"
                  v-model="user.userName"
                  :rules="[
                    required('UserName'),
                    minLength('UserName', 5),
                    maxLength('UserName', 10),
                  ]"
                  prepend-inner-icon="mdi-account"
                >
                </v-text-field>
              </v-card-text>
              <v-card-text>
                <v-text-field
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  placeholder="password"
                  prepend-inner-icon="mdi-key"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="user.password"
                  :rules="[
                    required('password'),
                    
                  ]"
                  @click:append="showPassword = !showPassword"
                >
                </v-text-field>

                <v-switch label="Remember Me" color="indigo"> </v-switch>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="indigo px-5" type="submit">
                  <span class="white--text">LOGIN</span>
                </v-btn>
              </v-card-actions>
              <div v-if="message" class="grey">
                <v-alert>
                  {{ message }}
                </v-alert>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import ComfirmationSnackBar from '../Widgets/comfirmationSnackBar.vue'
export default {

  components:{
    ComfirmationSnackBar
  },
  data() {
    return {
      snackbar:false,
      snackColour:"",
      snackIcon:"",
      snackText:"",


      user: {
        userName: "",
        password: "",
      },
      message: "",
      image: "/assets/background.jpg",
      showPassword: false,
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
  methods: {
    dashboard() {
      this.$router.push("dashboard");
    },
    async successSnackbar(message) {
      
      this.snackbar = true;

      this.snackColour = "#43A047";
      this.snackIcon = "check_circle"; 
      this.snackText = message;

      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.snackbar = false;
    },
    async errorSnackbar(message) {
     
      this.snackbar = true;
      
      this.snackColour = "error";
      this.snackIcon = "error";
      this.snackText = message;

      await new Promise((resolve) => setTimeout(resolve, 2000));
      this.snackbar = false;
    },
  async  handleLogin() {
      if (this.user.userName && this.user.password) {
    
        this.$store.dispatch("auth/login", this.user).then(
          (response) => {
            this.successSnackbar(response.message);
            setTimeout(this.dashboard, 1000)
           // this.$router.push("/dashboard");
          },
          
          
        ).catch((response)=>{
          console.log("error")
          this.errorSnackbar(response.message)
        })
      }
    },
    
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },
};
</script>

<style scoped>
.background {
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
.loginIcon {
  height: 550px;
  background-image: url("../../assets/login.png");
  background-size: 100%;
}
.v-card {
  margin: 150px auto;
}
.loginArea {
  height: 550px;
  margin-top: 50px;
}
.container {
  width: 1400;
}
</style>