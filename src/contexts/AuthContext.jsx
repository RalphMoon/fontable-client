import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "@firebase/auth";

import { auth } from "../features/authentication/services/firebase";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const navigate = useNavigate();

  function signIn(provider) {
    return signInWithPopup(auth, provider);
  }

  function signOut() {
    return auth.signOut();
  }

  const value = useMemo(
    () => ({
      currentUser,
      signIn,
      signOut,
    }),
    [currentUser]
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isLoading && !currentUser) {
      navigate("/login");
    }
  }, [ currentUser, isLoading, navigate ]);

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
