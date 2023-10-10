import React, { useEffect } from "react";
import {
  FormBase,
  FormContainer,
  FormError,
  FormInput,
  FormSubmit,
  FormTitle,
} from "./style/form";
import { signInValidate, signUpValidate } from "../../utils/formValidation";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmail,
  addFirstName,
  addPassword,
  addError,
} from "../../utils/redux/signUpSlice";
import useSignIn from "../../hooks/useSignIn";
import useSignUp from "../../hooks/useSignUp";

const Form = ({ title, children }) => {
  const { email, password, firstName, error } = useSelector(
    (state) => state.signUp
  );
  const dispatch = useDispatch();

  const isSignInInvalid = signInValidate(email, password);
  const isSignUpInvalid = signUpValidate(firstName, email, password);
  const signIn = useSignIn();
  const signUp = useSignUp();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(email, password);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(addError(isSignUpInvalid));
    if (isSignInInvalid) return;
    signUp(firstName, email, password);
  };

  useEffect(() => {
    return () => {
      dispatch(addFirstName(""));
      dispatch(addEmail(""));
      dispatch(addPassword(""));
    };
  }, [dispatch]);

  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      {error && (
        <FormError>
          {error}
          <img
            onClick={() => dispatch(addError())}
            src="/images/icons/close-slim.png"
            alt="close"
          />
        </FormError>
      )}

      {title === "Sign Up" ? (
        <FormBase onSubmit={handleSignUp}>
          <FormInput
            type="text"
            value={firstName}
            onChange={(e) => dispatch(addFirstName(e.target.value))}
            placeholder="First name"
          />

          <FormInput
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              dispatch(addEmail(e.target.value));
            }}
          />
          <FormInput
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              dispatch(addPassword(e.target.value));
            }}
          />
          <FormSubmit type="submit">{title}</FormSubmit>
        </FormBase>
      ) : (
        <FormBase onSubmit={handleSignIn}>
          <FormInput
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              dispatch(addEmail(e.target.value));
            }}
          />
          <FormInput
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              dispatch(addPassword(e.target.value));
            }}
          />
          <FormSubmit type="submit" disabled={isSignInInvalid}>
            {title}
          </FormSubmit>
        </FormBase>
      )}

      {children}
    </FormContainer>
  );
};

export default Form;
