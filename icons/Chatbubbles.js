'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Chatbubbles = React.createClass({
	displayName: 'Chatbubbles',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M73.3,391C73.3,391,73.3,391,73.3,391c1.8,3,2.8,6.4,2.8,10.2L64,464l56.2-22.1c2.7-1.1,5.6-1.7,8.7-1.7 c2.8,0,5.5,0.5,8,1.4c0,0,0.1,0,0.2,0c0.4,0.2,0.8,0.3,1.2,0.5c17.8,7.3,37.4,11.4,57.9,11.4c46.3,0,87.6-20.5,114.8-52.6 c-14.1,3.6-28.9,5.7-44.1,5.7c-95.9,0-173.7-75-173.7-167.5c0-11.8,1.3-23.2,3.7-34.3C66.9,230.9,48,268.6,48,310.6 c0,28.4,8.6,55.2,23.5,77.5C72.1,388.9,72.7,390,73.3,391z' }),
				React.createElement('path', { d: 'M290.3,48c-83.7,0-153.6,57.2-170,133.2c-2.4,11.1-3.7,22.5-3.7,34.3c0,92.5,77.7,167.5,173.7,167.5 c15.3,0,30-2.1,44.1-5.7c8.1-2.1,16.1-4.5,23.8-7.6c0.5-0.2,0.9-0.4,1.4-0.6c0.1,0,0.2,0,0.2-0.1c2.9-1.1,6.1-1.7,9.3-1.7 c3.6,0,7,0.7,10.1,2l68.6,25.8l-17-73.8c0-4.4,1.2-8.6,3.3-12.2c0,0,0,0,0,0c0.6-1.1,1.4-2.1,2.1-3.1 c17.4-26.1,27.5-57.2,27.5-90.5C464,123,386.3,48,290.3,48z' })
			)
		);
	}
});