import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAn9HcBYi8MhjwdvjLhP7kV-MI2AwnD8zA",
    authDomain: "e-library-1e1fc.firebaseapp.com",
    projectId: "e-library-1e1fc",
    storageBucket: "e-library-1e1fc.appspot.com",
    messagingSenderId: "949410764815",
    appId: "1:949410764815:web:e810c311fa139c87172b7a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();