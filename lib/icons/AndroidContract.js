'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var AndroidContract = React.createClass({
	displayName: 'AndroidContract',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_2_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M64,371.2h76.795V448H192V320H64V371.2z M140.795,140.8H64V192h128V64h-51.205V140.8z M320,448h51.2v-76.8H448V320H320 V448z M371.2,140.8V64H320v128h128v-51.2H371.2z' })
				)
			)
		);
	}
});