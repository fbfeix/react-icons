'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidBus = React.createClass({
	displayName: 'AndroidBus',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_14_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M80,352c0,19.198,13.864,24.531,26.667,36.271v38.396c0,11.729,9.599,21.334,21.333,21.334h21.333 c11.734,0,21.334-9.604,21.334-21.334v-21.333h170.666v21.333c0,11.729,9.604,21.334,21.334,21.334H384 c11.729,0,21.333-9.604,21.333-21.334v-38.396C418.136,376.531,432,370.136,432,352V148.334C432,73.667,349.864,64,256,64 S80,73.667,80,148.334V352z M160,367.989c-18.136,0-32-13.864-32-32c0-18.135,13.864-32,32-32s32,13.865,32,32 C192,354.125,178.136,367.989,160,367.989z M352,367.989c-18.136,0-32-13.864-32-32c0-18.135,13.864-32,32-32s32,13.865,32,32 C384,354.125,370.136,367.989,352,367.989z M384,245.333H128V138.667h256V245.333z' })
					)
				)
			)
		);
	}
});