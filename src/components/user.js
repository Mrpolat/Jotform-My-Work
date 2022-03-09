import React, { useEffect,useState } from 'react'

function User() {
    const axios = require('axios');

    const [userName, setUserName] = useState("");

    useEffect(() => {
        axios.get('https://api.jotform.com/user?apiKey=8cc17c20fe79be24f60cb418bd2283fd')
            .then(response =>{
             setUserName(response.data.content.username)}
            );
    }, []);

  return (
    <div>{userName}</div>
  )
}

export default User

// const axios = require('axios');

// const [users, setUsers] = useState([{id:0, username:""}]);

// useEffect(() => {
//     axios.get('https://api.jotform.com/user?apiKey={20e592fda9389f5a07671dfe9e93778a}')
//         .then(response =>{console.log(response)
//          setUserName([{response.data.id, response.data.username}]}
//         );
// }, []);
// return (
// <div>{users.map(user => <div key={user.id}>{user.username}</div>)}</div>
// )