import axios from "axios";
import { Product } from "./types";

export default {
    list: async (): Promise<Product> => {
        return axios.get("https://api.storerestapi.com/products", 
            {
                responseType: 'blob'
            }
        ).then((response) => {
            return response.data

        });
    }
}