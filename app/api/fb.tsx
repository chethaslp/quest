import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
const { getFirestore } = require('firebase-admin/firestore');


export const adminApp = initializeApp({
    credential: applicationDefault()
});

export const adminAuth = getAuth(adminApp)
export const adminDb = getFirestore(adminApp)

export function checkToken(){

}

