import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Principal from './Principal.jsx';
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div >
        <MuiThemeProvider>
          <Principal/>
        </MuiThemeProvider>
      </div>
    );
  }
}