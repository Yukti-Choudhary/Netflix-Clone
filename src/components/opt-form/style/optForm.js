import styled from "styled-components/macro";

export const OptFormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const OptFormInsideContainer = styled.form`
  display: flex;
  justify-content: center;
  height: fit-content;
  margin-top: 20px;
  flex-wrap: wrap;
  position: absolute;
  z-index: 200;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const OptFormInput = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const OptFormButton = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const OptFormText = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const OptFormInsideText = styled(OptFormText)`
  font-size: 30px;
  margin-bottom: 35px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const OptFormErrorText = styled(OptFormInsideText)`
  margin-top: 7vw;
  color: red;
`;

export const OptFormBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;
