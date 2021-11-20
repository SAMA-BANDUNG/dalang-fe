// import axios from 'axios';
// import CONFIG from './config';
// import { APIServices } from "./index"

export default class Auth {

//   static login(body) {
//     return new Promise((resolve, reject) => {
//       axios.post(CONFIG.BASE_URL + '/api/akun/postLogin', body).then((res) => {
//         setTimeout(_ => {
//           resolve(res);
//         }, 1000);
//       }).catch(err => {
//         reject(err);
//       });
//     })
//   }
  
  static logout() {

    // sessionStorage.clear();
    localStorage.removeItem('token')
    localStorage.removeItem('role');
    window.location.reload();
  }
  
  static isLogin() {
    return !!localStorage.getItem('role') && !!localStorage.getItem('token') && !!localStorage.getItem('no_telepon')
           && !!localStorage.getItem('no_identitas') && !!localStorage.getItem('login');
  }
}