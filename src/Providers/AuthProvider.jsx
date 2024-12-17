import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
   const [user, setUser]= useState();

   const currentUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(email, password)
   }

   const logOut =()=>{
      setLoading(true);
      return signOut(auth);
   }

   useEffect( ()=>{
   const unSubscribe = onAuthStateChanged(auth , currentUser=>{
        setUser(currentUser);
        console.log('current user',currentUser);
        setLoading(false);
    });
    return ()=>{
        return unSubscribe();
    }
   },[])
   const [loading, setLoading]= useState(true);
    const authInfo={
        user,loading ,currentUser,signIn ,logOut
    }
    
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;