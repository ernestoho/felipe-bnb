import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import flexbox from "../styledComp/section";

const Check = () => {
  return (
    <Section>
      <label for="CHECK-IN">
        <Labelheader>CHECK-IN</Labelheader>
        <Checkinput type="date" name="CHECK-IN" />
      </label>
      <label for="CHECK-OUT">
        <Labelheader>CHECK-OUT</Labelheader>
        <Checkinput type="date" name="CHECK-OUT" />
      </label>
    </Section>
  );
};

export default Check;

// ------------------CSS------------------//

const Section = styled.div`
  ${flexbox({ js: "space-around" })};
  display: flex;
  margin: 10px;
`;

const Labelheader = styled.h3`
  margin: 0;
  width: 100%;
  padding-bottom: 10px;
  font-size: 12px;
`;

const Checkinput = styled.input`
  width: 170px;
  height: 40px;
  border-radius: 4%;
  border: 0.5px grey solid;
  /* margin: 0 10px; */
  padding: 0 10px;
  color: grey;
  font-size: 15px;
  text-align: center;
`;
