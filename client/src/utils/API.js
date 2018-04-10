import axios from 'axios';

export default {
    getLocalSearch(search){
        return axios.post("/api/search", search);
    }
}