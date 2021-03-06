'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosUnlocked = React.createClass({
	displayName: 'IosUnlocked',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256,304c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S264.822,304,256,304z' }),
				React.createElement('path', { d: 'M168,224v-72c0-48.523,39.484-88,88.016-88C304.531,64,344,103.477,344,152v8h16v-8c0-57.43-46.562-104-103.984-104 C198.562,48,152,94.57,152,152v72H96v240h320V224H168z M264,350.992V384h-16v-33.008c-13.802-3.553-24-16.082-24-30.992 c0-17.673,14.327-32,32-32s32,14.327,32,32C288,334.91,277.802,347.439,264,350.992z' })
			)
		);
	}
});