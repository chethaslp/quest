import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';


const adminApp = initializeApp({
    credential: applicationDefault()
});

const adminAuth = getAuth(adminApp)
const adminDb = getFirestore(adminApp)

export {adminAuth, adminDb}

