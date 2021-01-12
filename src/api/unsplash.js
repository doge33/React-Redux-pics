//put axios call in here! seperate api codes from main app codes
import axios from "axios";

//create a copy of axios call that customize our request eg. to a certain url
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID VVW5Cs-edj4xKtaVTk1O0KNI_g99vRB9FNEEwCnVb-4'
  }
})
