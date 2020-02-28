import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import flexbox from "../styledComp/section";

const Where = () => {
  return (
    <Section onFocus={() => {}}>
      <label for="where">
        <h3>WHERE</h3>
        <input type="text" name="where" placeholder=" Anywhere" />
      </label>
    </Section>
  );
};

export default Where;

// ------------------CSS------------------//

const Section = styled.div`
  ${flexbox({ jc: "space-around" })}
  display: flex;
  margin: 20px;
  /* border: 1px black solid; */

  input {
    width: 340px;
    height: 40px;
    border-radius: 4%;
    border: 0.5px grey solid;
    /* margin: 0 10px; */
    padding: 0 10px;
  }
  h3 {
    margin: 0;
    padding-bottom: 10px;
    width: 100%;
    font-size: 12px;
  }
`;
