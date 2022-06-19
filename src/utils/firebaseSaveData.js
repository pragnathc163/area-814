// Save New Firebase Data - Upload New Data to Firebase and override any values!

import { doc, setDoc } from "firebase/firestore"
import { dataB } from "../firebase.config"

export const saveData = async (data) => {
    await setDoc(doc(dataB, 'products', `${Date.now()}`), data, {merge: true});
};