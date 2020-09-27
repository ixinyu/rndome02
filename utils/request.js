const BaseUrl ='https://hotel.coboriel.com/'
import AsyncStorage from '@react-native-community/async-storage'
let http = {
  get(url, params, headers) {
    if (params) {
      let paramsArray = [];
      //encodeURIComponent
      Object.keys(params).forEach((key) =>
        paramsArray.push(key + '=' + params[key]),
      );
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }
    return new Promise(function (resolve, reject) {
      fetch(BaseUrl + url, {
        method: 'GET',
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject({status: response.status});
          }
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject({status: -1});
        });
    });
  },
  post(url, params, headers) {
    return new Promise(function (resolve, reject) {
      fetch(BaseUrl + url, {
        method: 'POST',
        headers: headers || {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'token':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYwMTg5Mjc5NywiY3JlYXRlZCI6MTYwMDQyMTU2ODE1MCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN5czptZW51OmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOmdlbmVyYXRvcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6bWVudTphZGQifSx7ImF1dGhvcml0eSI6InN5czp1c2VyOmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOmRlcHQ6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6cm9sZTplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9nOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpsb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGljdDp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjpkZWxldGUifSx7ImF1dGhvcml0eSI6InN5czpkZXB0OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czptZW51OnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpkaWN0OmFkZCJ9LHsiYXV0aG9yaXR5Ijoic3lzOnJvbGU6YWRkIn0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6bG9naW5sb2c6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOmVkaXQifSx7ImF1dGhvcml0eSI6InN5czpsb2dpbmxvZzp2aWV3In0seyJhdXRob3JpdHkiOiJzeXM6dXNlcjplZGl0In0seyJhdXRob3JpdHkiOiJzeXM6Y29uZmlnOnZpZXcifSx7ImF1dGhvcml0eSI6InN5czpjb25maWc6ZGVsZXRlIn0seyJhdXRob3JpdHkiOiJzeXM6ZGVwdDphZGQifSx7ImF1dGhvcml0eSI6InN5czpyb2xlOmRlbGV0ZSJ9LHsiYXV0aG9yaXR5Ijoic3lzOm1lbnU6ZWRpdCJ9XX0.XXvFnW2orHgcZ5KZQsBcuD-MmKTMSwa6q8LAPcT6XkToMoCdQtsZyzMq8QKGqNTscXWlnxpaPiYOP_XQ8LR3fQ'
          // 'token':AsyncStorage.getItem('token')
        },
        body: JSON.stringify(params),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            reject({status: response.status});
          }
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject({status: -1});
        });
    });
  },
};

export default http;
