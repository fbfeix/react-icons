'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosEyeOutline = React.createClass({
	displayName: 'IosEyeOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M447.1,256.2C401.8,204,339.2,144,256,144c-33.6,0-64.4,9.5-96.9,29.8C131.7,191,103.6,215.2,65,255l-1,1l6.7,6.9 C125.8,319.3,173.4,368,256,368c36.5,0,71.9-11.9,108.2-36.4c30.9-20.9,57.2-47.4,78.3-68.8l5.5-5.5L447.1,256.2z M256,160 c33.1,0,64.9,9.5,97.2,30.6c23.9,15.6,47.4,36.7,73.7,66.1C388.6,295.4,331.1,352,256,352c-34.2,0-64.2-8.4-94.2-28.2 c-27.5-18.1-52.3-43.3-76.2-67.8C144.7,196.3,194,160,256,160z' }),
					React.createElement('path', { d: 'M256,336c44.1,0,80-35.9,80-80c0-44.1-35.9-80-80-80c-44.1,0-80,35.9-80,80C176,300.1,211.9,336,256,336z M256,192.3 c35.2,0,64,28.6,64,63.7c0,35.1-28.8,63.7-64,63.7c-35.2,0-63.9-28.6-63.9-63.7C192.1,220.9,220.8,192.3,256,192.3z' })
				),
				React.createElement('path', { d: 'M288,256L288,256c0,17.5-14.4,32-31.8,32S224,272.8,224,255.3s15.8-31.3,32-31.3l0-16c-26.5,0-47.9,21.6-47.9,48.2 c0,26.6,21.5,48.1,47.9,48.1s48-21.6,48-48.1V256H288z' })
			)
		);
	}
});