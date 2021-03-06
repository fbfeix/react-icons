'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var PieGraph = React.createClass({
	displayName: 'PieGraph',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M32.6,256h32H256V64.6v-32c-5-0.4-10.6-0.6-16-0.6C125.1,32,32,125.1,32,240C32,245.4,32.2,251,32.6,256z' }),
				React.createElement('path', { d: 'M109.8,402.2C147.9,449.6,206.4,480,272,480c114.9,0,208-93.1,208-208c0-65.6-30.4-124.1-77.8-162.2 C370.5,84.3,331,67.9,288,64.6V288H64.6C67.9,331,84.3,370.5,109.8,402.2z' })
			)
		);
	}
});