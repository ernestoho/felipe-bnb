import React from "react";

const Counter = ({ adult, guest, setguest }) =>
  `
  <h3
    onClick={() => {
      if (children === 0) {

      } else {
        setchildren(guest - 1);
        setguests(adult + guest - 1);
        console.log(guest);
        console.log(adult);
      }
    }}
  >
    <span>－</span>
  </h3>
  <h3>{guest > 0 ? guest : 0}</h3>
  <h3
    onClick={() => {
      if (adult === 0) {
        setadult(adult + 1);
        setchildren(guest + 1);
        setguests(2);
      } else {
        setchildren(guest + 1);
        setguests(adult + guest + 1);
      }
    }}
  >
    <span>＋</span>
  </h3>
  `;

export default Counter;
