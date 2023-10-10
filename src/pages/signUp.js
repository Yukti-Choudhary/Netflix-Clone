import React from "react";
import { Footer, Form, HeaderContainer } from "../components";
import { Link } from "react-router-dom";
import { FormText, FormTextSmall } from "../components/form/style/form";

const SignUp = () => {
  const button = "Sign In";
  const route = "/signIn";
  const title = "Sign Up";
  return (
    <>
      <HeaderContainer button={button} route={route}>
        <Form title={title}>
          <FormText>
            Already a user? <Link to="/signIn">Sign In</Link>
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

export default SignUp;
