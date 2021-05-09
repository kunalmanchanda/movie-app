import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCR9J1A4gTWSNVCx9ZPlJ-RdeKEKiIwkvQ",
  authDomain: "movie-app-24c20.firebaseapp.com",
  databaseURL: 'https://movie-app-24c20.firebaseapp.com',
  projectId: "movie-app-24c20",
  storageBucket: "movie-app-24c20.appspot.com",
  messagingSenderId: "746099923007",
  appId: "1:746099923007:web:092ddacbd775ffc368c08a"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };