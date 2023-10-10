import React from "react";
import {
  FeatureContainer,
  FeatureSubTitle,
  FeatureTitle,
} from "./style/feature";

const Feature = ({ children }) => {
  return (
    <FeatureContainer>
      <FeatureTitle>Unlimited films, TV programmes and more.</FeatureTitle>
      <FeatureSubTitle>Watch anywhere. Cancel at any time.</FeatureSubTitle>
      {children}
    </FeatureContainer>
  );
};

export default Feature;
