import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmail, addError, addPassword } from "../utils/redux/signUpSlice";

const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/browse");
      })
      .catch((error) => {
        dispatch(addEmail(""));
        dispatch(addPassword(""));
        dispatch(addError(error.message));
      });
  };
  return signIn;
};

export default useSignIn;
