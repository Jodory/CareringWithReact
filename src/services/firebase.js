import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDu5J32hIPYgMZ5vkX16cpQMNUgMhFkti8",
  authDomain: "carering-webservice-project.firebaseapp.com",
  databaseURL: "https://carering-webservice-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carering-webservice-project",
  storageBucket: "carering-webservice-project.appspot.com",
  messagingSenderId: "685420720785",
  appId: "1:685420720785:web:6aa441cc70c56d31b74530",
  measurementId: "G-9VP01NDSXJ"
};
firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth;
export const firestore = firebase.firestore();
export const database = firebase.database();

//const provider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.
//provider.setCustomParameters({prompt: 'select_account'});
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.
//export const signInWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

// export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
// const app = initializeApp(firebaseConfig);