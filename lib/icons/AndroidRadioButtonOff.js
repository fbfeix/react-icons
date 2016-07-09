'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidRadioButtonOff = React.createClass({
	displayName: 'AndroidRadioButtonOff',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_20_' },
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M256,48C141.601,48,48,141.601,48,256s93.601,208,208,208s208-93.601,208-208S370.399,48,256,48z M256,422.399 c-91.518,0-166.399-74.882-166.399-166.399S164.482,89.6,256,89.6S422.4,164.482,422.4,256S347.518,422.399,256,422.399z' })
				)
			)
		);
	}
});