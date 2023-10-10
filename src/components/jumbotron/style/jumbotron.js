import styled from "styled-components/macro";

export const JumbotronItem = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;
export const JumbotronContainer = styled.div`
  @media (max-width: 1000px) {
    ${JumbotronItem}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const JumbotronInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const JumbotronPane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const JumbotronImage = styled.img`
  width: 100%;
  height: auto;
`;

export const JumbotronTitle = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
  padding: 0 30px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const JumbotronSubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  padding: 0 30px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
