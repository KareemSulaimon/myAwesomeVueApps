import axios from "axios"   
axios.defaults.baseURL = process.env.VUE_APP_API_URL
export default axios;

// `https://crudcrud.com/api/f6d4e024474f4afe8071b9b40f9e6bed`;
// process.env.VUE_APP_API_URL'