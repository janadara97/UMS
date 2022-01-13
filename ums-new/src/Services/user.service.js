import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/';

class UserService {


  getAllTopics() {
    return axios.get(API_URL + 'getAllTopics', { headers: authHeader() });
  }
  addTopic(topic) {
    return axios.post(API_URL + 'addTopic/' + topic.moduleId, {
      tId: topic.tId,

      tName: topic.tName,
      tDes: topic.tDes,

    },
      { headers: authHeader() })
  }
  deleteTopic(topicId) {
    return axios.delete(API_URL + 'deleteTopic/' + topicId, { headers: authHeader() });
  }
  updateTopic(topic) {
    return axios.put(API_URL + 'updateTopics/' + topic.tId, {
      tName: topic.tName,
      tDes: topic.tDes,

    }, { headers: authHeader() })
  }

  getAllModules() {
    return axios.get(API_URL + 'getModules', { headers: authHeader() });
  }
  getTopicByModule(moduleId) {
    return axios.get(API_URL + 'getTopics' + moduleId)
  }

  addModules(module) {
    return axios.post(API_URL + 'addModules', {
      moduleId: module.moduleId,
      moduleName: module.moduleName,
      moduleDes: module.moduleDes,
      moduleCredits: module.moduleCredits
    },
      { headers: authHeader() })
  }
  updateModule(module) {
    return axios.put(API_URL + 'updateModule/' + module.moduleId, {
      moduleName: module.moduleName,
      moduleDes: module.moduleDes,
      moduleCredits: module.moduleCredits
    }, { headers: authHeader() })
  }
  deleteModule(moduleId) {
    return axios.delete(API_URL + 'deleteModule/' + moduleId, { headers: authHeader() });
  }


  getUsers() {
    return axios.get(API_URL + 'user/getUsers', { headers: authHeader() })
  }
  addUser(user) {
    return axios.post(API_URL + 'user/addUser', {
      id: user.id,
      name: user.name,
      userName: user.userName,
      password: user.password,


    }, { headers: authHeader() })
  }

  addRoleToUser(user) {
    console.log(user);
    return axios.post(API_URL + 'user/addRoleToUser', {
      
      userName: user.userName,
      roleName: user.roleName,
      


    }, { headers: authHeader() })
  }
  addPrivileges(priviledge){
    return axios.post(API_URL+'addPrivileges',{
      id:priviledge.id,
      privilegeName:priviledge.privilegeName
    },{ headers: authHeader() })
  }

  deletePrivilege(priviledge){
    return axios.delete(API_URL+'deletePrivilege'+priviledge.id,{ headers: authHeader() })
  }
  addRoleToPrivilege(roleName,privilegeName){
    return axios.post(API_URL+'addRoleToPrivilege',{
      roleName:roleName,
      privilegeName:privilegeName
    })
  }
  getPrivileges() {
    return axios.get(API_URL + 'user/getPrivileges/', { headers: authHeader() });
  }
  
  deleteUser(id) {
    return axios.delete(API_URL + 'user/deleteUser/' + id, { headers: authHeader() });
  }


}

export default new UserService();
