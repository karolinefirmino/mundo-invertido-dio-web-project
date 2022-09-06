import app from './app.js'
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app)
    const hellfireClubeCollection = collection(db, 'hellfire-club')
    const docRef = await (addDoc(hellfireClubeCollection, subscription))
    return docRef.id
}

export async function getHellfireClubSubscriptions() {
    const db = getFirestore(app)
    const hellfireClubeCollection = collection(db, 'hellfire-club')
    const hellfireClubeCollectionSnapshot = await getDocs(hellfireClubeCollection);
    const subscriptions = hellfireClubeCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}