import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addEmail,
  addError,
  addFirstName,
  addPassword,
} from "../utils/redux/signUpSlice";

const useSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUp = (firstName, email, password) => {
    const photo = Math.floor(Math.random() * 5) + 1;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: firstName,
          photoURL: `./images/users/${photo}.png`,
        })
          .then(() => {
            window.location.reload();
            navigate("/browse");
          })
          .catch((error) => {
            dispatch(addError(error.message));
          });
      })
      .catch(() => {
        dispatch(addFirstName(""));
        dispatch(addEmail(""));
        dispatch(addPassword(""));
      });
  };

  return signUp;
};

export default useSignUp;
