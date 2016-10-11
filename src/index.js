import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDIiBTuANQxj2t3TCECPcc_7gSPPYVRw2g",
    authDomain: "fodo-79819.firebaseapp.com",
    databaseURL: "https://fodo-79819.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "306403285302"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
