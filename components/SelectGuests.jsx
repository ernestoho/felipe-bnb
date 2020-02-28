import React, { useState } from "react";
import styled from "styled-components";
import flexbox, { counter } from "../styledComp/section";
import Counter from "../components/SelectGuests.test";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

const SelectGuests = ({ showing, setguests, hidde, baby, changebaby }) => {
  const [adult, setadult] = useState(0);
  const [children, setchildren] = useState(0);

  return (
    <Selecting display={showing}>
      <div>
        {/*---------------Adult------------ */}
        <Choosingtab>
          <GuestType>
            <h3>Adult</h3>
          </GuestType>
          <Howmany>
            <h3
              onClick={() => {
                if ((children > 0 || baby > 0) && adult === 1) {
                  setadult(1);
                } else if (adult === 0) {
                } else {
                  setadult(adult - 1);
                  setguests(adult - 1);
                }
              }}
            >
              <span>－</span>
            </h3>
            <h3>{adult > 0 ? adult : 0}</h3>
            <h3
              onClick={() => {
                setadult(adult + 1);
                setguests(adult + 1);
              }}
            >
              <span>＋</span>
            </h3>
          </Howmany>
        </Choosingtab>
        {/*---------------Children------------ */}
        <Choosingtab>
          <GuestType>
            <h3>Children</h3>
            <h5>Ages 2–12</h5>
          </GuestType>
          <Howmany>
            <h3
              onClick={() => {
                if (children === 0) {
                } else {
                  setchildren(children - 1);
                  setguests(adult + children - 1);
                }
              }}
            >
              <span>－</span>
            </h3>
            <h3>{children > 0 ? children : 0}</h3>
            <h3
              onClick={() => {
                if (adult === 0) {
                  setadult(adult + 1);
                  setchildren(children + 1);
                  setguests(2);
                } else {
                  setchildren(children + 1);
                  setguests(adult + children + 1);
                }
              }}
            >
              <span>＋</span>
            </h3>
          </Howmany>
        </Choosingtab>
        {/*---------------Infent------------ */}
        <Choosingtab>
          <GuestType>
            <h3>Infants</h3>
            <h5>Under 2</h5>
          </GuestType>
          <Howmany>
            <h3
              onClick={() => {
                if (baby === 0) {
                  console.log(baby);
                  console.log(adult);
                } else {
                  changebaby(baby - 1);
                }
              }}
            >
              <span>－</span>
            </h3>
            <h3>{baby > 0 ? baby : 0}</h3>
            <h3
              onClick={() => {
                if (adult === 0) {
                  setadult(adult + 1);
                  changebaby(baby + 1);
                  setguests(adult + 1);
                } else {
                  changebaby(baby + 1);
                }
              }}
            >
              <span>＋</span>
            </h3>
          </Howmany>
        </Choosingtab>
        <ApplyButton onClick={() => hidde()}>Apply</ApplyButton>
      </div>
    </Selecting>
  );
};

export default SelectGuests;

// ------------------CSS------------------//

const Selecting = styled.div`
  border: 0.5px lightgray solid;
  user-select: none;
  border-radius: 1%;
  background: white;
  width: 85%;
  position: relative;
  bottom: 10px;
  left: 30px;

  display: ${props => (props.display ? "none" : "block")};

  h6 {
    display: none;
  }
`;

const ApplyButton = styled.button`
  /* position: relative; */
  /* left: 100px; */
  outline: none;
  margin-left: 290px;
  margin-bottom: 10px;
  border: none;
  background: none;
  color: #00b3b3;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;

const Choosingtab = styled.div`
  display: flex;
  ${flexbox({ jc: "space-between" })};
  margin: 2%;
`;

const GuestType = styled.div`
  margin-left: 5%;
  font-size: 12px;
  ${flexbox()}

  h5 {
    color: gray;
  }
`;

const Howmany = styled.div`
  margin-right: 5%;
  display: flex;
  ${flexbox()}
  font-size: 13px;
  height: 25px;
  width: 30px;
  h3 {
    margin: 5px;
  }
  span {
    cursor: pointer;
    border: 1px grey solid;
    border-radius: 50%;
    font-size: 12px;
    padding: 2px;
    text-align: center;
    font-size: 10px;
    /* height: 20px;
    width: 20px; */
  }
`;

// border: ${props =>
//   props.adult === 0 ? "1px blue solid" : "1px grey solid"};
