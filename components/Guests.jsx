import React from "react";
import styled from "styled-components";
import flexbox from "../styledComp/section";

const Guests = props => {
  return (
    <Section>
      <label for="guests">
        <Header>GUESTS</Header>
        <Inputbar onClick={() => props.hidde()}>
          <div>
            <span>
              {props.guests > 0 ? props.guests + " Guests" : "Guests"}
            </span>
            <span>{props.baby > 0 ? " , " + props.baby + " Infants" : ""}</span>
          </div>
          <BarButton>{props.showing ? "▲" : "▼"}</BarButton>
        </Inputbar>
      </label>
    </Section>
  );
};

export default Guests;

// ------------------CSS------------------//

const Section = styled.div`
  ${flexbox()}
  display: flex;
  margin: 10px;
`;

const Inputbar = styled.div`
  ${flexbox({ jc: "space-between" })}
  width: 340px;
  height: 40px;
  border-radius: 4%;
  border: 0.5px grey solid;
  /* margin: 0 10px; */
  padding: 0 10px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 15px;
  }

  div {
    border: none;
    display: flex;

    justify-content: flex-start;
  }
`;
const Header = styled.h3`
  margin: 0;
  padding-bottom: 10px;
  width: 100%;
  font-size: 12px;
`;

const BarButton = styled.span`
  font-size: 20px;
  color: grey;
`;
