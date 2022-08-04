import axios from "axios";

const url = 'https://rebelfoodsapi.herokuapp.com';

export async function register(email) {
    const data = await axios.post(url+'/register', {
        email: email
    });
    return data;
}