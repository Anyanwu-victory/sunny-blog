import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import client from '../client';
import { jwtDecode } from "jwt-decode";



const Login = () => {
    
    const navigate = useNavigate();
  const responseGoogle = (response) => {
    const responseDecoded = jwtDecode(response.credential)
    localStorage.setItem("user", JSON.stringify(responseDecoded));

    const { name, sub, picture } = responseDecoded;

    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture
    }

    client.createIfNotExists(doc)
      .then(() => {
        navigate('/', { replace: true })
    })
  };
 

  return (
    <GoogleOAuthProvider 
    clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <div className="login-container">
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => {
            console.log("Login Failed")
          }}
          cookiePolicy="single_host_origin"
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
