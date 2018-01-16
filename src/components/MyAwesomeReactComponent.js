import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
 
const MyAwesomeReactComponent = () => (
	<div>
		<AppBar
		    title="Title"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		 />

		<DatePicker hintText="Portrait Dialog" />
	    <DatePicker hintText="Landscape Dialog" mode="landscape" />
	    <DatePicker hintText="Dialog Disabled" disabled={true} />
	    <DatePicker hintText="Open to Year" openToYearSelection={true} />
	  	<RaisedButton label="Default" />
  	</div>
);
 
export default MyAwesomeReactComponent;