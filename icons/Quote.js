'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Quote = React.createClass({
	displayName: 'Quote',

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
					React.createElement('path', { d: 'M192,64c-40.646,0-72.483,11.229-94.627,33.373C75.229,119.517,64,151.354,64,192v256h160V192h-96 c0-23.056,4.922-39.666,14.627-49.373C152.334,132.922,168.944,128,192,128' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M416,64c-40.646,0-72.483,11.229-94.627,33.373C299.229,119.517,288,151.354,288,192v256h160V192h-96 c0-23.056,4.922-39.666,14.627-49.373C376.334,132.922,392.944,128,416,128' })
				)
			)
		);
	}
});