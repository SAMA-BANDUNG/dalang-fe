export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
      config => {
        const {
          auth: { authToken }
        } = store.getState();
  
        if (authToken) {
          config.headers['X-Auth-Token'] = `${authToken}`;
        }
  
        return config;
      },
      err => Promise.reject(err)
    );
  }
  