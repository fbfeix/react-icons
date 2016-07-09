'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var ToggleFilled = React.createClass({
	displayName: 'ToggleFilled',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M352,208c-26.467,0-48,21.533-48,48c0,26.467,21.533,48,48,48s48-21.533,48-48C400,229.533,378.467,208,352,208z' }),
				React.createElement('path', { d: 'M352,128H160c-70.692,0-128,57.308-128,128s57.308,128,128,128h192c70.692,0,128-57.308,128-128S422.692,128,352,128z M352,336c-44.183,0-80-35.817-80-80s35.817-80,80-80s80,35.817,80,80S396.183,336,352,336z' })
			)
		);
	}
});