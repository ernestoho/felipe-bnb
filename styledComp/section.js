// import styled from "styled-components";

const flexbox = ({ dir = "row", jc = "center", ai = "center" } = {}) => `
  flex-direction: ${dir};
  justify-content: ${jc};
  align-items: ${ai};
`;

export const counter = (infants, setinfants) => `

<h3 onClick={() => setinfants(adult - 1)}>－</h3>
            <h3>{infants > 0 ? infants : 0}</h3>
            <h3 onClick={() => setinfants(adult + 1)}>＋</h3>
`;

export default flexbox;
