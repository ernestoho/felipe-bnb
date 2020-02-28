import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Check from "../components/Check";
import Guests from "../components/Guests";
import Where from "../components/Where";
import Search from "../components/Search";
import { GlobalStyles } from "../styledComp/reset.style";
import SelectGuests from "../components/SelectGuests";
import Dates from "../components/Pickdates";

const App = () => {
  const [show, setshow] = useState(true);

  const [howmany, sethowmeny] = useState("Guset");
  const [infents, setinfets] = useState(0);

  const display = () => {
    setshow(!show);
  };

  return (
    <Box>
      <Header />
      <Where />
      {/* <Dates /> */}
      <Check />
      <Guests hidde={display} showing={show} guests={howmany} baby={infents} />
      <SelectGuests
        showing={show}
        setguests={sethowmeny}
        hidde={display}
        baby={infents}
        changebaby={setinfets}
      />
      <Search />
      <GlobalStyles />
    </Box>
  );
};

export default App;

// ------------------CSS------------------//

const Box = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  border-radius: 5%;
  background-color: white;
  flex-direction: column;
  margin: -20% -40%;
  position: fixed;
`;
