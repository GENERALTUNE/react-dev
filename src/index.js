// import _ from 'lodash';
// import React from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
 
const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);