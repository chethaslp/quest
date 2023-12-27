"use client";
import React from 'react';
import { onAuthStateChanged, User, getAuth } from 'firebase/auth';
import { app } from '@/components/fb/config';
import Loading from '@/app/loading';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { GenericConverter, User as UserDt } from '@/lib/models';

export const AuthContext = React.createContext<User | null>(null);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: React.ReactNode} ) => {
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData:UserDt = {
                    name:user.displayName || "",
                    email:user.email || "",
                    uid: user.uid,
                    dp: user.photoURL || "",
                    
                    c_quest: "",
                    c_team:""
                }
                setDoc(doc(db,"users",user.uid),userData)
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={ user }>
                {loading ? <Loading msg="Authenticating..."/> : children}
        </AuthContext.Provider>
    );
};

export type {User}