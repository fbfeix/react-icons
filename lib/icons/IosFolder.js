'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosFolder = React.createClass({
	displayName: 'IosFolder',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M472,176H40c-4.411,0-8,3.589-8,8v239c0,13.317,11.683,25,25,25h400c12.683,0,23-11.215,23-25V184 C480,179.589,476.411,176,472,176z' }),
				React.createElement('path', { d: 'M457,96H215c-2.791,0-4.271-0.585-6.094-2.408l-22.501-22.501l-0.168-0.162C181.365,66.333,177.361,64,169,64H57 c-13.785,0-25,10.317-25,23v74.376c2.504-0.888,5.195-1.376,8-1.376h432c2.805,0,5.496,0.488,8,1.376V119 C480,105.673,470.327,96,457,96z' })
			)
		);
	}
});