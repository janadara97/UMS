import axios from 'axios'


const API_URL='http://localhost:8081/';

class AuthService{
    login(user){
        return axios
        .post(API_URL+'authenticate',{
            userName:user.userName,
            password:user.password
        })
        .then(response=> {
            if (response.data.jwt){
                localStorage.setItem('user',JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout(){
        localStorage.removeItem('user');
    }
}

export default new AuthService();