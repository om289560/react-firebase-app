import firebase from 'firebase';

//Api details
const firebaseConfig = {
    apiKey: "AIzaSyC3nKOZgvlVMFR4wB2UebiiJWFB6jLicPo",
    authDomain: "myfirstprojct-7f641.firebaseapp.com",
    databaseURL: "https://myfirstprojct-7f641.firebaseio.com",
    projectId: "myfirstprojct-7f641",
    storageBucket: "myfirstprojct-7f641.appspot.com",
    messagingSenderId: "568791475870",
    appId: "1:568791475870:web:3d9afe90de74df8faf7d8f",
    measurementId: "G-LWKTXLCE2K"
  };

firebase.initializeApp(firebaseConfig)

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storgage();

