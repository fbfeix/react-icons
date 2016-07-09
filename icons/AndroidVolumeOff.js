'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidVolumeOff = React.createClass({
	displayName: 'AndroidVolumeOff',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M405.5,256c0,22.717-4.883,44.362-13.603,63.855l31.88,31.88C439.283,323.33,448,290.653,448,256 c0-93.256-64-172.254-149-192v44.978C361,127.632,405.5,186.882,405.5,256z' }),
				React.createElement('polygon', { points: '256,80.458 204.979,132.938 256,183.957 \t' }),
				React.createElement('path', { d: 'M420.842,396.885L91.116,67.157l-24,24l90.499,90.413l-8.28,10.43H64v128h85.334L256,431.543V280l94.915,94.686 C335.795,387.443,318,397.213,299,403.022V448c31-7.172,58.996-22.163,82.315-42.809l39.61,39.693l24-24.043l-24.002-24.039 L420.842,396.885z' }),
				React.createElement('path', { d: 'M352.188,256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801,50.801C351.355,270.739,352.188,263.454,352.188,256z' })
			)
		);
	}
});