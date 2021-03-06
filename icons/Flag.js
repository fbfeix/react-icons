'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Flag = React.createClass({
	displayName: 'Flag',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M426.4,182.5c-35.8,5.9-94.2,7.5-133-66.1c-41.6-79.1-108.8-81.5-148.1-74.3c-19.1,3.5-33.4,19.5-33.4,35v196.6 c11.3,4.3,23.4-0.2,26.5-0.8c0.8-0.2,1.5-0.3,2.4-0.5c25-5.5,51.4-8.1,116.8,23.3c82,39.3,153.8-33.1,181.6-83.5 c2-3.5,8.7-20.2,8.7-36.2C438.2,180,426.4,182.5,426.4,182.5z' }),
				React.createElement('path', { d: 'M88,32H72c-4.4,0-8,3.6-8,8v432c0,4.4,3.6,8,8,8h16c4.4,0,8-3.6,8-8V40C96,35.6,92.4,32,88,32z' })
			)
		);
	}
});