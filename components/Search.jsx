import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import flexbox from "../styledComp/section";

const Search = () => {
  return (
    <Section>
      <Button>
        <b>Search</b>
      </Button>
    </Section>
  );
};

export default Search;

// ------------------CSS------------------//

const Section = styled.div`
  ${flexbox({ jc: "flex-end" })};
  display: flex;
  margin: 0px;
`;

const Button = styled.button`
  background: #ff6666;
  color: white;
  border: none;
  height: 40px;
  width: 80px;
  border-radius: 5%;
  font-size: 15px;
  margin: 8%;
  user-select: none;
  outline: none;

  &:hover {
    background: orangered;
  }

  &:active {
    background: #ff6666;
  }
`;
