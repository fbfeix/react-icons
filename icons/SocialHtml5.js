'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialHtml5 = React.createClass({
	displayName: 'SocialHtml5',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M64,32l34.936,403.213L255.769,480l157.245-44.854L448,32H64z M371.997,164h-184l3.991,51h176.008l-13.505,151.386 l-98.5,28.094l-98.682-27.976L150.545,289h48.254l3.423,39.287l53.769,14.781l53.422-14.915L314.987,264H147.986l-12.571-149.589 l240.789,0.016L371.997,164z' })
		);
	}
});