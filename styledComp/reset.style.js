import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Livvic&display=swap');

  html,
  body {
    height: 100%;
  }
  html {
    font-size: 10px;
    font-family: 'Livvic';
  }
  body {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url('https://www.rydoo.com/app/uploads/2019/08/Airbnb.png');
    background-repeat: no-repeat;
    background-size: cover;
    
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /*border:aqua dashed 3px; */
    /* color:papayawhip */
  }
`;
