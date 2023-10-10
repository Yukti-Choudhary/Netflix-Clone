import React from "react";
import {
  FooterBreak,
  FooterColumn,
  FooterContainer,
  FooterLink,
  FooterRow,
  FooterText,
  FooterTitle,
} from "./style/footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Questions? Contact us.</FooterTitle>
      <FooterBreak />
      <FooterRow>
        <FooterColumn>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Investor Relations</FooterLink>
          <FooterLink href="#">Ways to Watch</FooterLink>
          <FooterLink href="#">Corporate Information</FooterLink>
          <FooterLink href="#">Netflix Originals</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Help Centre</FooterLink>
          <FooterLink href="#">Jobs</FooterLink>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Account</FooterLink>
          <FooterLink href="#">Redeem Gift Cards</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Speed Test</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Media Centre</FooterLink>
          <FooterLink href="#">Buy Gift Cards</FooterLink>
          <FooterLink href="#">Cookie Preferences</FooterLink>
          <FooterLink href="#">Legal Notices</FooterLink>
        </FooterColumn>
      </FooterRow>
      <FooterBreak />
      <FooterText>Netflix United Kingdom</FooterText>
    </FooterContainer>
  );
};

export default Footer;
