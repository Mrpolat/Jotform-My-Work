import axios from "axios";

const USER_URL = 'https://api.jotform.com/user?apiKey=8cc17c20fe79be24f60cb418bd2283fd';
const FORM_SUBMİSSİONS_URL =`https://api.jotform.com/form/220652760779060/submissions?apiKey=8cc17c20fe79be24f60cb418bd2283fd`;

class Services {

    constructor() {
        this.state = {
            veri:[],
            dogrulama:""
        };
      }

    User(){
        axios.get(USER_URL).then((response)=> {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
 };
    FormSubmissions(){
        axios.get(FORM_SUBMİSSİONS_URL).then((response)=> {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }


}
export default new Services();