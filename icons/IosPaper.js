'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosPaper = React.createClass({
	displayName: 'IosPaper',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M112,64v16v32v288H96V112H64v305.143C64,434.157,77.843,448,94.857,448h322.285C434.157,448,448,434.157,448,417.143V64H112 z M160,112h128v16H160V112z M160,272h192v16H160V272z M400,368H160v-16h240V368z M400,208H160v-16h240V208z' })
		);
	}
});