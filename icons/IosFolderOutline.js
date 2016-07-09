'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosFolderOutline = React.createClass({
	displayName: 'IosFolderOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M457,96H215c-2.791,0-4.271-0.585-6.094-2.408l-22.501-22.501l-0.168-0.162C181.365,66.333,177.361,64,169,64H57 c-13.785,0-25,10.317-25,23v336c0,13.317,11.683,25,25,25h400c12.683,0,23-11.215,23-25V119C480,105.673,470.327,96,457,96z M57,80 h112c3.497,0,3.737,0.189,6.175,2.488l22.417,22.418c4.84,4.84,10.372,7.094,17.408,7.094h242c4.448,0,7,2.552,7,7v42.376 c-2.504-0.888-5.195-1.376-8-1.376H56c-2.805,0-5.496,0.488-8,1.376V87C48,82.677,52.672,80,57,80z M464,423c0,4.328-2.677,9-7,9H57 c-4.458,0-9-4.542-9-9V184c0-4.411,3.589-8,8-8h400c4.411,0,8,3.589,8,8V423z' })
		);
	}
});