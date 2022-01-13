
import Dashboard from './components/Views/Dashboard.vue'


import Admin from './components/Views/Admin.vue'
import Modules from './components/Views/Modules.vue'
import Topics from './components/Views/Topics.vue'
import Login from './components/Views/Login.vue'
//import MainDashBoard from './components/Views/MainDashBoard.vue'
import NavigationDrawer from './components/NavigationDrawer.vue'
import NotFound from './components/Views/NotFound.vue'



export default[
  
    {path:'/admin',component:Admin,name:'admin'},
    {path:'/dashboard',component:Dashboard,name:'dashboard'},
    
   

    {path:'/getAllTopics',component:Topics,name:'topics'},
    {path:'/modules',component:Modules,name:'modules'},
    {path:'/authenticate',component:Login,name:'login'},
    {path:'/mainDashBoard',component:NavigationDrawer,name:'mainDashBoard'},

    {path:'*',component:NotFound,name:'notFound'},
    

]