'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidContact = React.createClass({
	displayName: 'AndroidContact',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M331.08,338.205c-22.156,12.594-47.777,19.783-75.084,19.783c-27.302,0-52.919-7.182-75.073-19.771 C122.153,356.152,77.262,396,64,448h384C434.745,396,389.854,356.131,331.08,338.205z' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M255.996,64c-72.871,0-131.945,59.127-131.945,132.013c0,72.887,59.074,131.972,131.945,131.972 s131.945-59.085,131.945-131.972C387.941,123.127,328.867,64,255.996,64z M255.996,294.986c-41.958,0-77.813-25.986-92.209-62.986 h184.418C333.809,269,297.953,294.986,255.996,294.986z' })
				)
			)
		);
	}
});