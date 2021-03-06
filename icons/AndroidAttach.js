'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidAttach = React.createClass({
	displayName: 'AndroidAttach',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_3_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M341.334,128v234.666C341.334,409.604,302.938,448,256,448c-46.937,0-85.333-38.396-85.333-85.334V117.334 C170.667,87.469,194.135,64,224,64c29.864,0,53.333,23.469,53.333,53.334v245.333c0,11.729-9.605,21.333-21.334,21.333 c-11.729,0-21.333-9.604-21.333-21.333V160h-32v202.667C202.667,392.531,226.135,416,256,416 c29.865,0,53.334-23.469,53.334-53.333V117.334C309.334,70.401,270.938,32,224,32c-46.938,0-85.334,38.401-85.334,85.334v245.332 C138.667,427.729,190.938,480,256,480c65.062,0,117.334-52.271,117.334-117.334V128H341.334z' })
				)
			)
		);
	}
});