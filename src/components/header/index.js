import React from "react";
import {} from "./style/header";
import OptForm from "../opt-form";
import Feature from "../feature";
import HeaderContainer from "../headerContainer";

const Header = () => {
  const button = "Sign In";
  const route = "/signIn";
  return (
    <HeaderContainer button={button} route={route}>
      <Feature>
        <OptForm />
      </Feature>
    </HeaderContainer>
  );
};

export default Header;
