// Save New Firebase Data - Upload New Data to Firebase and override any values!

import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { dataB } from "../firebase.config"

export const saveData = async (data) => {
    await setDoc(doc(dataB, 'products', `${Date.now()}`), data, { merge: true });
};

// Retrieve information from cloud!
export const getProductInfo = async () => {
    const itemInfo = await getDocs(
        query(collection(dataB, 'products'), orderBy('id', 'desc'))
    );

    return itemInfo.docs.map((n) => n.data());
};