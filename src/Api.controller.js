import axios from "axios";

class ApiController {

  getBaseUrl() {
    const prefix = "https://demo.3raza.com/api"

    return prefix;
  }  

  getHeaders(params) {

    let headers = {
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
        "Authorization": ""
      },
      params: params,
      baseURL: this.getBaseUrl()
    };

    return headers;
  }


  async get(url, params){

    try{
      return await axios.get(url, this.getHeaders(params))
    } catch(e){
      console.log(e)
    }
    
  }

  async post(url, body){

    try{
      return await axios.post(url, body, this.getHeaders())
    } catch(e){
      console.log(e)
    }
  }

}

export default ApiController;