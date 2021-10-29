import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initApp = () => {
    const app = initializeApp(firebaseConfig);
};

export default initApp;