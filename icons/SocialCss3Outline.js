'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialCss3Outline = React.createClass({
	displayName: 'SocialCss3Outline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M354.676,366.898l-98.608,28.125l-98.458-28.248L150.864,289h48.253l3.433,39.563l53.586,15.163l0.132,0.273h0.034 l53.467-14.852L315.381,265H203l-4-50h120.646l4.396-51H140l-4-49h240.58L354.676,366.898z' }),
				React.createElement('path', { d: 'M64,32l34.936,403.301L255.769,480l157.245-44.705L448,32H64z M383.041,410.51l-127.262,36.187l-126.867-36.169L98.896,64 H413.1L383.041,410.51z' })
			)
		);
	}
});