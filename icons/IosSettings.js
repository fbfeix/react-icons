'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosSettings = React.createClass({
	displayName: 'IosSettings',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M352,104c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S343.163,104,352,104 M352,88c-17.645,0-32,14.355-32,32 s14.355,32,32,32s32-14.355,32-32S369.645,88,352,88L352,88z' }),
				React.createElement('path', { d: 'M352,376c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S343.163,376,352,376 M352,360c-17.645,0-32,14.355-32,32 s14.355,32,32,32s32-14.355,32-32S369.645,360,352,360L352,360z' }),
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M160,240c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S151.163,240,160,240 M160,224 c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32S177.645,224,160,224L160,224z' }),
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M207.32,248H480v16H207.32c0.439-2.604,0.68-5.273,0.68-8S207.76,250.604,207.32,248z' }),
						React.createElement('path', { d: 'M112,256c0,2.727,0.24,5.396,0.68,8H32v-16h80.68C112.24,250.604,112,253.273,112,256z' }),
						React.createElement('path', { d: 'M399.32,384H480v16h-80.68c0.439-2.604,0.68-5.273,0.68-8S399.76,386.604,399.32,384z' }),
						React.createElement('path', { d: 'M304,392c0,2.727,0.24,5.396,0.68,8H32v-16h272.68C304.24,386.604,304,389.273,304,392z' }),
						React.createElement('path', { d: 'M399.32,112H480v16h-80.68c0.439-2.604,0.68-5.273,0.68-8S399.76,114.604,399.32,112z' }),
						React.createElement('path', { d: 'M304.68,112c-0.439,2.604-0.68,5.273-0.68,8s0.24,5.396,0.68,8H32v-16H304.68z' })
					)
				)
			)
		);
	}
});