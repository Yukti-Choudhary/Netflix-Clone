import styled from "styled-components/macro";

export const SearchSelect = styled.select`
  background-color: #e50914;
  width: fit-content;
  height: fit-content;
  color: white;
  margin-right: 30px;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }

  option {
    background-color: black;
  }
`;
