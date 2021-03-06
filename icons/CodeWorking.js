'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var CodeWorking = React.createClass({
	displayName: 'CodeWorking',

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
					React.createElement('circle', { cx: '184.166', cy: '256.166', r: '24' }),
					React.createElement('circle', { cx: '256.166', cy: '256.166', r: '24' }),
					React.createElement('circle', { cx: '328.166', cy: '256.166', r: '24' })
				),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M168,392c-6.143,0-12.285-2.344-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569,0-33.941l112-112 c9.373-9.372,24.568-9.372,33.941,0c9.371,9.372,9.371,24.568,0,33.941L89.941,256l95.029,95.029 c9.371,9.372,9.371,24.568,0,33.941C180.283,389.656,174.143,392,168,392z' }),
					React.createElement('path', { d: 'M344,392c6.143,0,12.285-2.344,16.971-7.029l112-112c9.373-9.373,9.373-24.569,0-33.941l-112-112 c-9.373-9.372-24.568-9.372-33.941,0c-9.371,9.372-9.371,24.568,0,33.941L422.059,256l-95.029,95.029 c-9.371,9.372-9.371,24.568,0,33.941C331.717,389.656,337.857,392,344,392z' })
				)
			)
		);
	}
});