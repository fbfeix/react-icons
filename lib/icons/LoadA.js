'use strict';

var React = require('react');
var IconBase = require('./IconBase');

var LoadA = React.createClass({
	displayName: 'LoadA',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('circle', { cx: '256', cy: '96', r: '64' }),
				React.createElement('circle', { cx: '96', cy: '256', r: '48' }),
				React.createElement('circle', { cx: '368', cy: '144', r: '8' }),
				React.createElement('path', { d: 'M180.1,107.6c-19.9-20.1-52.2-20.1-72.1,0c-19.9,20.1-19.9,52.7,0,72.8c19.9,20.1,52.2,20.1,72.1,0 C200,160.3,200,127.7,180.1,107.6z' }),
				React.createElement('circle', { cx: '416', cy: '256', r: '16' }),
				React.createElement('circle', { cx: '369', cy: '369', r: '24' }),
				React.createElement('circle', { cx: '256', cy: '416', r: '32' }),
				React.createElement('circle', { cx: '144', cy: '368', r: '40' })
			)
		);
	}
});