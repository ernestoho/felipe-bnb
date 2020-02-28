import React from "react";
import styled from "styled-components";
import flexbox from "../styledComp/section";

const Header = () => {
  return (
    <Section>
      <CardHeader>
        Book unique places to <br /> stay and things to do.
      </CardHeader>
    </Section>
  );
};

export default Header;

// ------------------CSS------------------//

const Section = styled.div`
  ${flexbox}
  text-align:center;
  display: flex;
  margin: 25px;
`;

const CardHeader = styled.h1`
  margin: 0px;
  font-size: 30px;
`;
