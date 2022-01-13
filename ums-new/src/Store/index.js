import Vue from 'vue';
import Vuex from 'vuex';


import { auth } from './auth-module';

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {
    auth
  },

  state: {
    progress: [
      {
        progressName: "Grade Average",
        progressValue: "78",
      },
      {
        progressName: "Your Last Test",
        progressValue: "65",
      },
      {
        progressName: "Your Last Assignment",
        progressValue: "12",
      },
      {
        progressName: "Your Attendance",
        progressValue: "45",
      },
      {
        progressName: "Graduation Progress ",
        progressValue: "65",
      },
    ],
    moduleRequests: [
      {

        Name: "MYSQL",
        person: "Chathura Janadara",
        date: "16 June 2021",
        requestNumber: 1

      },
      {
        Name: "C++",
        person: "Kasun Jeewantha",
        date: "16 June 2021",
        requestNumber: 2

      },
      {
        Name: "Flutter",
        person: "Saman Kumara",
        date: "16 June 2021",
        requestNumber: 3

      },
      {
        Name: "MYSQL",
        person: "Chathura Janadara",
        date: "16 June 2021",
        requestNumber: 4

      },
      {
        Name: "MYSQL",
        person: "Chathura Janadara",
        date: "16 June 2021",
        requestNumber: 5

      },
      {
        Name: "MYSQL",
        person: "Chathura Janadara",
        date: "16 June 2021",
        requestNumber: 6

      },
      {
        Name: "MYSQL",
        person: "Chathura Janadara",
        date: "16 June 2021",
        requestNumber: 7

      },
      {
        Name: "MYSQL",
        person: "Chathura Janadara",
        date: "16 June 2021",
        requestNumber: 8

      },
      {
        Name: "MYSQL",
        person: "Chathura Janadara",
        date: "16 June 2021",
        requestNumber: 9

      },
      {
        Name: "MYSQL",
        person: "Chathura Janadara",
        date: "16 June 2021",
        requestNumber: 10

      },
    ],
    colors: ["#00BCD4", "#E040FB", "#EEFF41", "#00E676", "#651FFF"],
    bckColors: [
      "#ff5c9326",
      "#e5e9ff",
      "#e2f9f1",
      "#fff6e7",
      "#e5e9ff",
      "#eedcff",
    ],
    noticeBoardData: [
      {
        date: "16 June 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "25 June 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "03 july 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "18 july 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "19 july 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "20 july 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "18 july 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "21 july 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "22 july 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
      {
        date: "23 july 2021",
        message: "Batch trip was postponed by the VC",
        author: "Rep",
      },
    ],
    stats: [
      {
        user: "Students",
        number: "59",
        avatar: require("../assets/student.png"),
        colors: "#EC407A",
      },
      {
        user: "Lecturers",
        number: "59",
        avatar: require("../assets/presentation.png"),
        colors: "#26C6DA",
      },
      {
        user: "Modules",
        number: "22",
        avatar: require("../assets/online-course.png"),
        colors: "#FFA726",
      },
      {
        user: "Topics",
        number: "89",
        avatar: require("../assets/checklist.png"),
        colors: "#E040FB",
      },
    ],
    topics :[
      {
        Id: "1",
        Name: "Fundamentals Of Programming",
        Description:
          "FOP topic is a topic which cannnnnnnnnnnnnnnnnnn ..... ",
        image: require("../assets/focus.svg"),
      },
      {
        Id: "2",
        Name: "Fundamentals Of Programming",
        Description: "FOP topic is a topic which can ..... ",
        image: require("../assets/focus.svg"),
      },
      {
        Id: "3",
        Name: "Fundamentals Of Programming",
        Description: "FOP topic is a topic which can ..... ",
        image: require("../assets/focus.svg"),
      },
      {
        Id: "4",
        Name: "Fundamentals Of Programming",
        Description: "FOP topic is a topic which can ..... ",
        image: require("../assets/focus.svg"),
      },
      {
        Id: "5",
        Name: "Fundamentals Of Programming",
        Description: "FOP topic is a topic which can ..... ",
        image: require("../assets/focus.svg"),
      },
    ]
  }
})

// export default new Vuex.Store({
//   modules: {
//     auth
//   }
// });