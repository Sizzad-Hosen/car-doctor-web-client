
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider,GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);



    const createUser = (email,password)=>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email,password)=>{
        setLoading(true);

        return signInWithEmailAndPassword(auth,email,password)
    }
  const logOut =()=>{
    setLoading(true);
    return signOut(auth);

  }
  var googleProvider = new GoogleAuthProvider();
  var githubProvider = new GithubAuthProvider();

  const githubLogin = ()=>{
    return signInWithPopup(auth,githubProvider)

  }
  const googleLogin = ()=>{
    return signInWithPopup(auth,googleProvider)

  }


  useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth , currentUser=>{
        setUser(currentUser);
        console.log('current user observe', currentUser);
        setLoading(false);

    });
    return ()=>{
        return unSubscribe();

    }
  },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        githubLogin
      


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;