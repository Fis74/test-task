import { API_DATA_URL } from 'configs/AppConfig';
import axios from "axios"

const ApiService = {}

ApiService.getClients = async () => {
    try {
      const { data } = await axios.get( `${API_DATA_URL}/users` )
      return data
    } catch (err) {
      throw new Error(err.message);
    }
};


ApiService.updateClient = async (values) => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(values);
        }, 1000);
      }).then((values) => {
        return "success"
      }).catch((err) => {
        throw new Error("error");
      })
};

export default ApiService