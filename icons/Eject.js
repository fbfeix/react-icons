'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Eject = React.createClass({
	displayName: 'Eject',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M399,320L399,320c10,0,16.8-7.1,16.8-15.9c0-3.3-1.1-6.1-2.8-9L275.3,104.7c-4.6-5.3-11.5-8.7-19.3-8.7 c-7.7,0-14.6,3.4-19.2,8.7l-138,190.8c-1.7,2.6-2.6,5.5-2.6,8.7c0,8.7,6.8,15.8,16.8,15.8v0H399z' }),
				React.createElement('path', { d: 'M403.7,352H108.4c-6.8,0-12.4,5.4-12.4,12.2v39.6c0,6.7,5.5,12.2,12.4,12.2h295.3c6.8,0,12.3-5.5,12.3-12.2v-39.6 C416,357.4,410.5,352,403.7,352z' })
			)
		);
	}
});