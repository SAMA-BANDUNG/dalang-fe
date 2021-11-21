 import axios from 'axios';
 import CONFIG from './config';
// import { APIServices } from "./index"

export default class Auth {

  static login(body) {
    return new Promise((resolve, reject) => {
      axios.post(CONFIG.BASE_URL + '/api/v1/login', body).then((res) => {
        setTimeout(_ => {
          resolve(res);
        }, 1000);
      }).catch(err => {
        reject(err);
      });
    })
  }
  
  static logout() {

    // sessionStorage.clear();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user_type');
    window.location.reload();
  }
  
  static isLogin() {
    return !!localStorage.getItem('id') && !!localStorage.getItem('token') && !!localStorage.getItem('user_type')
  }
}