'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosCalculatorOutline = React.createClass({
	displayName: 'IosCalculatorOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M144,160h224V96H144V160z M160,112h192v32H160V112z' }),
				React.createElement('path', { d: 'M368,64H144c-17.7,0-32,14.3-32,32v320c0,17.7,14.3,32,32,32h224c17.7,0,32-14.3,32-32V96C400,78.3,385.7,64,368,64z M384,416c0,8.8-7.2,16-16,16H144c-8.8,0-16-7.2-16-16V96c0-8.8,7.2-16,16-16h224c8.8,0,16,7.2,16,16V416z' }),
				React.createElement('polygon', { points: '160,240 160,208 160,192 144,192 144,256 208,256 208,240 192,240 \t' }),
				React.createElement('polygon', { points: '160,320 160,288 160,272 144,272 144,336 208,336 208,320 192,320 \t' }),
				React.createElement('polygon', { points: '160,400 160,368 160,352 144,352 144,416 208,416 208,400 192,400 \t' }),
				React.createElement('polygon', { points: '240,240 240,208 240,192 224,192 224,256 288,256 288,240 272,240 \t' }),
				React.createElement('polygon', { points: '320,240 320,208 320,192 304,192 304,256 368,256 368,240 352,240 \t' }),
				React.createElement('polygon', { points: '240,320 240,288 240,272 224,272 224,336 288,336 288,320 272,320 \t' }),
				React.createElement('polygon', { points: '240,400 240,368 240,352 224,352 224,416 288,416 288,400 272,400 \t' }),
				React.createElement('polygon', { points: '320,400 320,368 320,272 304,272 304,416 368,416 368,400 352,400 \t' })
			)
		);
	}
});