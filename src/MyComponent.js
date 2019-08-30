import {withTheme} from 'styled-components';
import React,{Component} from 'react';
import {ThemeProvider} from 'styled-components';
class MyComponent extends Component{
  render(){
    console.log('current theme:',this.props.theme.bg);
    return(
    <div style={{"backgroundColor":this.props.theme.fg}}> I'm that component!!
    <button style={{"width":"100px","color":"pink","backgroundColor":this.props.theme.fg}}>Press me!! </button></div>);
    }
}
export default withTheme(MyComponent);
