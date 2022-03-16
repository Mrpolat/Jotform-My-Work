import axios from "axios";

const USER_URL = 'https://api.jotform.com/user?apiKey=8cc17c20fe79be24f60cb418bd2283fd';
const FORM_SUBMİSSİONS_URL =`https://api.jotform.com/form/220652760779060/submissions?apiKey=8cc17c20fe79be24f60cb418bd2283fd`;

export const user=()=> {
    return axios.get(USER_URL);
};

export const formSubmissions = () => {
   return axios.get(FORM_SUBMİSSİONS_URL);
}
