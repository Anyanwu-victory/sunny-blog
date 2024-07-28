// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import client from '../client';
// import {jwtDecode} from 'jwt-decode'; // Ensure jwtDecode is imported correctly
// import { fetchUser } from '../utils/fetchUser';

// const Login = () => {
//     const user = fetchUser();
//     const navigate = useNavigate();
  
//     const responseGoogle = (response) => {
//         try {
//             const responseDecoded = jwtDecode(response.credential);
//             console.log('Decoded response:', responseDecoded); 

//             localStorage.setItem("user", JSON.stringify(responseDecoded));
    
//             const { name, sub, email, picture } = responseDecoded;

//             // Log the user details to verify the values
//             console.log('User details:', { name, sub, email, picture });
    
//             const doc = {
//                 _id: sub,
//                 _type: 'user',
//                 username: name,
//                 email: email,
//                 image: picture
//             };

//             // Log the document before sending it to Sanity
//             console.log('Sanity document:', doc);
    
//             client.createIfNotExists(doc)
//                 .then(() => {
//                     console.log('Document created successfully');
//                     navigate('/', { replace: true });
//                 })
//                 .catch((error) => {
//                     console.error('Error creating document:', error);
//                 });
//         } catch (error) {
//             console.error('Error decoding JWT:', error);
//         }
//     };
  
//     return (
//         <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
//             <div className="login-container">
//                 <GoogleLogin
//                     onSuccess={responseGoogle}
//                     onError={() => {
//                         console.log("Login Failed");
//                     }}
//                     cookiePolicy="single_host_origin"
//                 />
//             </div>
//         </GoogleOAuthProvider>
//     );
// };

// export default Login;




import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import client from '../client';
import {jwtDecode} from 'jwt-decode'; // Ensure jwtDecode is imported correctly

const Login = () => {
    const navigate = useNavigate();
  
    const responseGoogle = (response) => {
        try {
            const responseDecoded = jwtDecode(response.credential);
            console.log('Decoded response:', responseDecoded); 

            localStorage.setItem("user", JSON.stringify(responseDecoded));
    
            const { name, sub, email, picture } = responseDecoded;

            const doc = {
                _id: sub,
                _type: 'user',
                username: name,
                email: email,
                image: picture
            };

            client.createIfNotExists(doc)
                .then(() => {
                    navigate('/', { replace: true });
                })
                .catch((error) => {
                    console.error('Error creating document:', error);
                });
        } catch (error) {
            console.error('Error decoding JWT:', error);
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
