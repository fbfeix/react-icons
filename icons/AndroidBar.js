'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidBar = React.createClass({
	displayName: 'AndroidBar',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_37_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M234.667,277.333V408H128v40h256v-40H277.333V277.333L448,106.667V64H64v42.667L234.667,277.333z M160,149.333 l-42.667-42.666h277.334L352,149.333H160z' })
				)
			)
		);
	}
});