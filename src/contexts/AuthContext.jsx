import { createContext, useEffect, useMemo, useState } from "react";
import { signInWithPopup } from "@firebase/auth";

import { auth } from "../features/authentication/services/firebase";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

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

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
