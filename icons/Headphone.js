'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Headphone = React.createClass({
	displayName: 'Headphone',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M447.4,238.2c-3.2-59.8-21.9-108.6-56-145.2c-0.1-0.1-0.1-0.1-0.2-0.2c-7.7-8.4-16.1-15.9-24.8-22.6 c-9-6.9-18.6-13-28.5-18.1c-25.3-13.1-53-20-82.1-20c-29,0-56.6,6.9-81.9,20c-9.9,5.1-19.4,11.2-28.4,18.1 c-8.7,6.7-17,14.2-24.7,22.6c-0.1,0.1-0.1,0.1-0.2,0.2c-34,36.6-52.7,85.5-55.9,145.2C61.9,288.9,68,368,77.7,400 c20.3,67,40.4,80,72.1,80s58.2-26.4,58.2-58.9V315.1c0-32.5-23.3-59-53.3-59c-18,0-34,9.7-43.8,24.4c0,0-11.1-8.1-13.1-23 c-2.1-14.9-3.1-32.4,5.6-63c8.7-30.5,20.8-20.2,35.6-39c2.5-3.3,5.2-6.4,8-9.5c3.2-3.4,6.4-6.7,9.8-9.7c1.6-1.5,3.2-2.8,4.8-4.2 c11-9.3,21-17,33.7-22.8c18.9-8.6,39.4-13.3,60.5-13.3c21,0,41.7,4.7,60.7,13.3c12.7,5.8,22.9,13.5,33.9,22.8 c1.6,1.4,3.2,2.7,4.8,4.2c3.4,3,6.6,6.3,9.8,9.7c2.8,3.1,5.5,6.2,8,9.5c14.8,18.8,26.9,8.5,35.6,39c8.7,30.5,7.6,48.1,5.6,63 c-2.1,14.9-13.1,23-13.1,23c-9.8-14.7-25.7-24.4-43.8-24.4c-30,0-53.3,26.4-53.3,59v106.1c0,32.4,26.5,58.9,58.2,58.9 c31.7,0,51.8-13,72.1-80C444,368,450.1,288.9,447.4,238.2z' })
		);
	}
});