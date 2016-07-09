'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var IosToggle = React.createClass({
	displayName: 'IosToggle',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M128,320c-26.467,0-48,21.533-48,48s21.533,48,48,48s48-21.533,48-48S154.467,320,128,320z' }),
				React.createElement('path', { d: 'M383.5,272h-255C75.205,272,32,315.205,32,368.5S75.205,464,128.5,464h255c53.295,0,96.5-42.205,96.5-95.5 S436.795,272,383.5,272z M128,432c-35.346,0-64-28.653-64-64c0-35.346,28.654-64,64-64s64,28.654,64,64 C192,403.347,163.346,432,128,432z' }),
				React.createElement('path', { d: 'M384,192c26.467,0,48-21.533,48-48s-21.533-48-48-48s-48,21.533-48,48S357.533,192,384,192z' }),
				React.createElement('path', { d: 'M128.5,240h255c53.295,0,96.5-42.205,96.5-95.5S436.795,48,383.5,48h-255C75.205,48,32,91.205,32,144.5 S75.205,240,128.5,240z M384,80c35.346,0,64,28.654,64,64c0,35.347-28.654,64-64,64s-64-28.653-64-64 C320,108.654,348.654,80,384,80z' })
			)
		);
	}
});