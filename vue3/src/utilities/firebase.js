import  firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyAXqaVICP28y2bQ8XMwfFR_DnCkdJJ3hic",
  authDomain: "lost-again.firebaseapp.com",
  databaseURL: "https://lost-again-default-rtdb.firebaseio.com",
  projectId: "lost-again",
  storageBucket: "lost-again.appspot.com",
  messagingSenderId: "186529989670",
  appId: "1:186529989670:web:3911c6a373e05315b3d2e7"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
 export const  chatsRef =  db.ref('chat/')
export default firebase;

                                                                                                                                                                                                                                                     