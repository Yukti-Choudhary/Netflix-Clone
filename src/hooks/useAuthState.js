import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";

const useAuthState = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setUser(user); 
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuthState;
