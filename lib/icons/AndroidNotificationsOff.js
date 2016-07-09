'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidNotificationsOff = React.createClass({
	displayName: 'AndroidNotificationsOff',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,463.656c22.814,0,41.475-18.656,41.475-41.656h-82.95C214.525,445,233.186,463.656,256,463.656z' }),
				React.createElement('path', { d: 'M131.083,107.172l0.053,0.074L98.09,74.277L74.004,98.383l63.042,63.153C126.888,180.521,121,202.196,121,225.07v114.555 l-41,41.656V402h297.743l36.182,36.33l24.079-24.301L425.9,402h0.316L131.083,107.172z' }),
				React.createElement('path', { d: 'M391,225.07c0-63.526-45-117.677-104-131.218V79.274c0-17.706-13.371-31.243-31-31.243c-17.628,0-31,13.537-31,31.243 v14.578c-15,3.438-29.048,9.501-41.75,17.663L391,319.355V225.07z' })
			)
		);
	}
});