import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import client from '../client';
import {jwtDecode} from 'jwt-decode'; // Ensure jwtDecode is imported correctly
import { fetchUser } from '../utils/fetchUser';

const Login = () => {
    const user = fetchUser();
    const navigate = useNavigate();
  
    const responseGoogle = (response) => {
        try {
            const responseDecoded = jwtDecode(response.credential);
            console.log('Decoded response:', responseDecoded); // Add logging for debugging

            localStorage.setItem("user", JSON.stringify(responseDecoded));
    
            const { name, sub, picture } = responseDecoded;
    
            const doc = {
                _id: sub,
                _type: 'user',
                userName: name,
                image: picture
            };
    
            client.createIfNotExists(doc)
                .then(() => {
                    navigate('/', { replace: true });
                })
                .catch((error) => {
                    console.error('Error creating document:', error); // Add error logging
                });
        } catch (error) {
            console.error('Error decoding JWT:', error); // Add error logging
        }
    };
  
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
            <div className="login-container">
                <GoogleLogin
                    onSuccess={responseGoogle}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                    cookiePolicy="single_host_origin"
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
