import React from "react";
import {
  JumbotronContainer,
  JumbotronImage,
  JumbotronPane,
  JumbotronSubTitle,
  JumbotronTitle,
  JumbotronInner,
  JumbotronItem,
} from "./style/jumbotron";
import jumboData from "../../fixtures/jumbo.json";

const Jumbotron = () => {
  return (
    <JumbotronContainer>
      {jumboData.map((item) => {
        return (
          <JumbotronItem key={item.id}>
            <JumbotronInner direction={item.direction}>
              <JumbotronPane>
                <JumbotronTitle>{item.title}</JumbotronTitle>
                <JumbotronSubTitle>{item.subTitle}</JumbotronSubTitle>
              </JumbotronPane>
              <JumbotronPane>
                <JumbotronImage src={item.image} alt={item.alt} />
              </JumbotronPane>
            </JumbotronInner>
          </JumbotronItem>
        );
      })}
    </JumbotronContainer>
  );
};

export default Jumbotron;
