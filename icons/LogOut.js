'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var LogOut = React.createClass({
	displayName: 'LogOut',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('polygon', { points: '366.863,323.883 389.49,346.51 480,256 389.49,165.49 366.862,188.118 418.745,240 192,240 192,272 418.745,272 \t ' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M391.491,391.766C355.229,428.029,307.018,448,255.736,448c-51.287,0-99.506-19.971-135.772-56.235 C83.697,355.501,64,307.285,64,256c0-51.281,19.697-99.495,55.965-135.761C156.232,83.973,204.45,64,255.736,64 c51.279,0,99.491,19.973,135.755,56.238c2.527,2.528,4.966,5.121,7.333,7.762h40.731c-40.474-58.028-107.709-96-183.819-96 C132.021,32,32,132.298,32,256c0,123.715,100.021,224,223.736,224c76.112,0,143.35-37.97,183.822-96h-40.73 C396.46,386.643,394.021,389.236,391.491,391.766z' })
				)
			)
		);
	}
});