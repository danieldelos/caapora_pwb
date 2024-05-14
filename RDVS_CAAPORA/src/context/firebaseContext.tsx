import { createContext } from "react";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { apiFirebase } from "@/firebase/conectFirebase";

const FirebaseContext = createContext({})

const FirebaseProvider = ({ children }: any) => {
    const db = getFirestore(apiFirebase);
    const contactCollection = collection(db, "safra");

    const [safra, setSafra] = useState<any>([])

    const criarSafra = async (payload: any[]) => {
        console.log(payload);
        payload.forEach(async (item) => {
            try {
                const docRef = await addDoc(contactCollection, item);
                console.log("Documento escrito com ID: ", docRef.id);
            } catch (e) {
                console.error("Erro ao adicionar documento: ", e);
            }
        });
    };

    return (
        <FirebaseContext.Provider value={{ safra, criarSafra }}>
            {children}
        </FirebaseContext.Provider>)
}

export { FirebaseProvider, FirebaseContext }