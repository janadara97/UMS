import AuthService from '../Services/auth.service'
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };


export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        (response) => {
          if (response.success == true) {
            console.log("success")
            commit('loginSuccess', user);
            return Promise.resolve(response);
          } else {
            
              commit('loginFailure');
              return Promise.reject(response);
            
          }
        }

      );
    },
    logout({ commit }) {

      AuthService.logout();
      commit('logout');
    },

  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },

  }
};