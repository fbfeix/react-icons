'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialTumblr = React.createClass({
	displayName: 'SocialTumblr',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M321.2,396.3c-11.8,0-22.4-2.8-31.5-8.3c-6.9-4.1-11.5-9.6-14-16.4c-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9 c-2.7,21.5-7.5,44.7-14.5,58.6c-7,13.9-14,25.8-25.6,35.7c-11.6,9.9-25.6,17.9-41.9,23.3V224h48v140.4c0,19,2,33.5,5.9,43.5 c4,10,11.1,19.5,21.4,28.4c10.3,8.9,22.8,15.7,37.3,20.5c14.6,4.8,31.4,7.2,50.4,7.2c16.7,0,30.3-1.7,44.7-5.1 c14.4-3.4,30.5-9.3,48.2-17.6v-65.6C363.2,389.4,342.3,396.3,321.2,396.3z' })
		);
	}
});