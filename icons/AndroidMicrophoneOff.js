'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidMicrophoneOff = React.createClass({
	displayName: 'AndroidMicrophoneOff',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M367.951,354.654l-26.616-26.562l-9.568-9.548l-4.698-4.706L187,174.041v0.346L76.112,63.531L51.921,87.572L187,222.47 v28.816c0,37.79,31.121,68.714,68.91,68.714c8.61,0,16.952-1.62,24.565-4.545l32.389,32.274 c-17.333,8.793-36.812,13.86-56.782,13.86c-62.986,0-121.365-48.59-121.365-116.59H95.773C95.773,322,158,387.701,233,398.013V480 h46v-81.987c22-3.352,43.066-11.222,61.627-22.622l95.278,95.078l24.033-24l-33.847-33.785l-58.216-57.959l58.224,57.959 L367.951,354.654z' }),
				React.createElement('path', { d: 'M325,251.286V100.714C325,62.924,293.791,32,256,32s-69,30.924-69,68.714v25.244l137.109,136.968 C324.779,259.135,325,255.247,325,251.286z' }),
				React.createElement('path', { d: 'M416.439,245h-38.941c0,20.496-5.498,39.676-14.931,56.197l27.572,27.516C406.662,304.603,416.439,275.926,416.439,245z' }),
				React.createElement('polygon', { points: '459.999,446.427 426.102,412.684 459.957,446.469 \t' })
			)
		);
	}
});