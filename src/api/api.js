import axios from "axios";
import {apikey} from './apikey'


const USER_URL = `https://api.jotform.com/user?apiKey=${apikey}`;
const FORM_ANIMAL_SUBMISSIONS_URL =`https://api.jotform.com/form/220652760779060/submissions?apiKey=${apikey}`;
const FORM_ADAPTION_SUBMISSIONS_URL =`https://api.jotform.com/form/220803245626047/submissions?apiKey=${apikey}`;
const USER_LOGIN_URL = 'https://api.jotform.com/user/login';

export const user=()=> {
    return axios.get(USER_URL);
};

export const formAnimalSubmissions = () => {
   return axios.get(FORM_ANIMAL_SUBMISSIONS_URL);
};
export const formAdaptionSubmissions = () => {
   return axios.get(FORM_ADAPTION_SUBMISSIONS_URL);
};

export const Login = ({username,password}) =>{
        let fd = new FormData()
        fd.append('username',username)
        fd.append('password',password)
     return axios({
        method: 'post',
        url: USER_LOGIN_URL,
        data:fd,
        headers: { "Content-Type": "multipart/form-data" },
      });
}


// export const Login = () =>{
//    console.log(packet)
//      return axios.post('https://api.jotform.com/user/login',packet,
//         {
//          headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
// }
export const editAdoptedAnimal = ({usernameFirst,usernameLast,phoneNumber,selectedID}) =>{
   console.log({usernameFirst,usernameLast,phoneNumber,selectedID})
   let sd = new FormData()
   sd.append('submission[8][first]',usernameFirst)
   sd.append('submission[8][last]',usernameLast)
   sd.append('submission[9][full]',phoneNumber)
   sd.append('submission[11]','Owned')
return axios({
   method: 'post',
   url: `https://api.jotform.com/submission/${selectedID}?apiKey=${apikey}`,
   data:sd,
   headers: { "Content-Type": "multipart/form-data" },
 });
}
export const editCandidateStatus = (candidateID) =>{
   console.log(candidateID)
   let sd = new FormData()
   sd.append('submission[15]','accepted')
return axios({
   method: 'post',
   url: `https://api.jotform.com/submission/${candidateID}?apiKey=${apikey}`,
   data:sd,
   headers: { "Content-Type": "multipart/form-data" },   
 });
}
export const editPetReturn = (selectedID) =>{
   let sd = new FormData()
   sd.append('submission[11]','Derelict')
return axios({
   method: 'post',
   url: `https://api.jotform.com/submission/${selectedID}?apiKey=${apikey}`,
   data:sd,
   headers: { "Content-Type": "multipart/form-data" },
 });
}

//User not deleted, just change status to denied
export const deleteCandidate = (candidateID) =>{
   console.log(candidateID)
   let sd = new FormData()
   sd.append('submission[15]','denied')
return axios({
   method: 'post',
   url: `https://api.jotform.com/submission/${candidateID}?apiKey=${apikey}`,
   data:sd,
   headers: { "Content-Type": "multipart/form-data" },   
 });
}


// export const Login = ({username,password}) =>{
//    console.log(username,password)
//      return axios({
//         method: 'post',
//         url: 'https://api.jotform.com/user/login',
//         data:[{
//          'username':username,
//          'password':password
//         }],
//         headers: { "Content-Type": "multipart/form-data" },
//       });
// }

// export const Login = ({username,password}) =>{
//    console.log(username,password)
//      return axios.post('https://api.jotform.com/user/login',{'username':username,'password':password},
//         {
//         headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
// }