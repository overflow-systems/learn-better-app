export const api = {
  baseURL: "http://192.168.15.12:3333",
  // baseURL: "https://learnbetter-api.herokuapp.com",

  request_post: {
    method: 'POST',
    validateStatus: (status:number) => { return status >= 0 && status < 900 }
  },

  request_put: {
    method: 'PUT',
    validateStatus: (status:number) => { return status >= 0 && status < 900 }
  },
}