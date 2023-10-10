import React, { useState } from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionContainer,
  AccordionInner,
  AccordionItem,
  AccordionTitle,
} from "./style/accordion";
import faqsData from "../../fixtures/faqs.json";
import OptForm from "../opt-form";

const Accordion = () => {
  const [toggleShow, setToggleShow] = useState(false);
  const [accordionID, setAccordionID] = useState(null);

  return (
    <AccordionContainer>
      <AccordionInner>
        <AccordionTitle>Frequently Asked Questions</AccordionTitle>
        {faqsData.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionHeader
              onClick={() => {
                setAccordionID(item.id);
                accordionID === item.id && setToggleShow(!toggleShow);
              }}
            >
              {item.header}
              {accordionID === item.id && toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
              ) : (
                <img src="/images/icons/add.png" alt="Open" />
              )}
            </AccordionHeader>
            <AccordionBody
              className={
                accordionID === item.id && toggleShow ? "open" : "closed"
              }
            >
              <span>{item.body}</span>
            </AccordionBody>
          </AccordionItem>
        ))}
        <AccordionItem />
        <OptForm />
      </AccordionInner>
    </AccordionContainer>
  );
};

export default Accordion;
