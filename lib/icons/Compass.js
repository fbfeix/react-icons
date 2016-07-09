'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var Compass = React.createClass({
	displayName: 'Compass',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M256,32c-39,0-75.6,10-107.5,27.4C136.9,42.9,117.7,32,96,32c-35.3,0-64,28.7-64,64c0,21.7,10.9,40.9,27.4,52.5 C42,180.4,32,217,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z M64,96 c0-17.7,14.3-32,32-32c10.5,0,19.8,5,25.6,12.8c-17,12.7-32.1,27.8-44.8,44.8C69,115.8,64,106.5,64,96z M391.8,391.8 C355.5,428,307.3,448,256,448c-51.3,0-99.5-20-135.8-56.2C84,355.5,64,307.3,64,256c0-51.3,20-99.5,56.2-135.8 C156.5,84,204.7,64,256,64c51.3,0,99.5,20,135.8,56.2C428,156.5,448,204.7,448,256C448,307.3,428,355.5,391.8,391.8z' })
				),
				React.createElement('path', { d: 'M352,128c0,0-101.6,83.7-120,104s-72,152-72,152s102.4-82.3,120-104S352,128,352,128z' })
			)
		);
	}
});