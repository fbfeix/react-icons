'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidCheckmarkCircle = React.createClass({
	displayName: 'AndroidCheckmarkCircle',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M170.718,216.482L141.6,245.6L235.2,339.2l208-208l-29.118-29.118L235.2,279.918L170.718,216.482z M422.4,256 c0,91.518-74.883,166.4-166.4,166.4S89.6,347.518,89.6,256S164.482,89.6,256,89.6c15.6,0,31.2,2.082,45.764,6.241L334,63.6 C310.082,53.2,284.082,48,256,48C141.6,48,48,141.6,48,256s93.6,208,208,208s208-93.6,208-208H422.4z' })
		);
	}
});