'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosPaperOutline = React.createClass({
	displayName: 'IosPaperOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M112,64v16v320h16V80h304v337.143c0,8.205-6.652,14.857-14.857,14.857H94.857C86.652,432,80,425.348,80,417.143V128h16v-16 H64v305.143C64,434.157,77.843,448,94.857,448h322.285C434.157,448,448,434.157,448,417.143V64H112z' }),
				React.createElement('rect', { x: '160', y: '112', width: '128', height: '16' }),
				React.createElement('rect', { x: '160', y: '192', width: '240', height: '16' }),
				React.createElement('rect', { x: '160', y: '272', width: '192', height: '16' }),
				React.createElement('rect', { x: '160', y: '352', width: '240', height: '16' })
			)
		);
	}
});