'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var IosLockedOutline = React.createClass({
	displayName: 'IosLockedOutline',

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
					React.createElement('path', { d: 'M360,224v-72c0-57.43-46.562-104-103.984-104C198.562,48,152,94.57,152,152v72H96v240h320V224H360z M168,152 c0-48.523,39.484-88,88.016-88C304.531,64,344,103.477,344,152v72H168V152z M400,448H112V240h288V448z' })
				),
				React.createElement('path', { d: 'M256,288c-17.673,0-32,14.327-32,32c0,14.91,10.198,27.439,24,30.992V384h16v-33.008c13.802-3.553,24-16.082,24-30.992 C288,302.327,273.673,288,256,288z M256,336c-8.822,0-16-7.178-16-16s7.178-16,16-16s16,7.178,16,16S264.822,336,256,336z' })
			)
		);
	}
});