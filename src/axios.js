import axios from "axios"; 

const instance = axios.create({
    baseURL: 'https://us-central1-clone-17eb9.cloudfunctions.net/api'
});

export default instance;

 

// http://localhost:5001/clone-17eb9/us-central1/api