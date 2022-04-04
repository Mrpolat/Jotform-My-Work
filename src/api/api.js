import axios from "axios";

const USER_URL = 'https://api.jotform.com/user?apiKey=d5512da65818b753ca0b927d92805db3';
const FORM_SUBMİSSİONS_URL =`https://api.jotform.com/form/220652760779060/submissions?apiKey=d5512da65818b753ca0b927d92805db3`;

export const user=()=> {
    return axios.get(USER_URL);
};

export const formSubmissions = () => {
   return axios.get(FORM_SUBMİSSİONS_URL);
}


export const Login = ({username,password}) =>{
        let fd = new FormData()
        fd.append('username',username)
        fd.append('password',password)
     return axios({
        method: 'post',
        url: 'https://api.jotform.com/user/login',
        data:fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
}
