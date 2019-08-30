// Define our button, but with the use of props.theme this time
import React from 'react'
//import styled from 'styled-components'
import styled, { ThemeProvider } from 'styled-components';
import MyComponent from './MyComponent';
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const theme = {
  fg: "palevioletred",
  bg: "white"
};

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

export default class New extends React.Component{
  // Define our `fg` and `bg` on the theme


  // This theme swaps `fg` and `bg`

  render(){
    return(

  <ThemeProvider theme={theme}>
    <div>
      <Button>Default Theme</Button>
      <MyComponent/>
    <ThemeProvider theme={invertTheme}>
        <Button>Inverted Theme</Button>
      </ThemeProvider>
    </div>
  </ThemeProvider>
);
}
}
