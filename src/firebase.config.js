import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCkUc7DmoSlOArz0E1xi9OVrYEf0-zjoNA",
    authDomain: "area-814.firebaseapp.com",
    databaseURL: "https://area-814-default-rtdb.firebaseio.com",
    projectId: "area-814",
    storageBucket: "area-814.appspot.com",
    messagingSenderId: "36427140301",
    appId: "1:36427140301:web:e315531a6f34c948c86d84"
};

const myApp = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const dataB = getFirestore(myApp)
const storage = getStorage(myApp)

export { myApp, dataB, storage };