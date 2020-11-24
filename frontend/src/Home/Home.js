import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';
import { Link, Redirect,useHistory } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import './Home.css';

function Home(){

    const history = useHistory();

    const responseFacebook = (response) => {
      console.log(response);
      history.push('/contact');
    }

    const responseGoogle = (response) => {
      console.log(response);
      history.push('/contact');
    }

    const FailureGoogle = (response) => {
        console.log(response);
    }

    const FailureFacebook = (response) => {
        console.log(response);
    }

    return (
      <div className="home">
        <div className="gallery-header">
        <img className="logo" src="https://4.bp.blogspot.com/_F36VTI8AUzI/SjU1TTyvAbI/AAAAAAAAAsw/Yioe9n8xbQA/w1200-h630-p-k-no-nu/pj_logo.jpg"></img>
        </div>

        <div className="login-container">

          <div className="login-box">

            <h1 className="login-line">LOGIN</h1>

              <FacebookLogin
                appId="455477472112038" //APP ID NOT CREATED YET
                fields="name,email,picture"
                onFailure={FailureFacebook}
                callback={responseFacebook}
              />
              <br />

              <GoogleLogin
                className="google-login-button"
                clientId="247166668893-859lrbapq7gjtuj5bfubcjuk5e7mv8pi.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={FailureGoogle}
                cookiePolicy={'single_host_origin'}
                icon={false}
              />
          </div>         
        </div>
      </div>
    );
  }


export default Home;