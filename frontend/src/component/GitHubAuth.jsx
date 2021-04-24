import React  from 'react';
import GitHubLogin from 'react-github-login';
import axios from 'axios';

const GitHubAuth = () => {

const getAccessToken = (response) => {
    const code = response.code
    axios.post('https://github-auth-go-api.herokuapp.com/', {
      code: code,
    })
    .then((res) => {
      console.log("token:", res.data)
    })
  }
  return (
        <GitHubLogin 
        className=""
        clientId="224561ede850fd53d6a2"
        redirectUri="http://localhost:3000/"
        onSuccess={getAccessToken}
        onFailure={(response) => console.log(response)}/>
  );
}

export default GitHubAuth