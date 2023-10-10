import React from "react";
import { Footer, Form, HeaderContainer } from "../components";
import { Link } from "react-router-dom";
import { FormText, FormTextSmall } from "../components/form/style/form";

const SignIn = () => {
  const button = "Sign Up"; 
  const route = "/signUp";
  const title = "Sign In";
  return (
    <>
      <HeaderContainer button={button} route={route}>
        <Form title={title}>
          <FormText>
            New to Netflix? <Link to="/signUp">Sign Up Now</Link>
          </FormText>

          <FormTextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </FormTextSmall>
        </Form>
      </HeaderContainer>
      <Footer />
    </>
  );
};

export default SignIn;
