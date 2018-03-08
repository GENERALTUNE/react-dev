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
import MyComponent from './components/MyComponent';
 
const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

const Bpp = () => (
		<MyComponent>
			Hello, Bpp!
		</MyComponent>
	);

function callback() {
	console.log('execute callback');
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root'),
  callback
);

 
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
