'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialInstagram = React.createClass({
	displayName: 'SocialInstagram',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('circle', { cx: '256', cy: '255.833', r: '80' })
			),
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M177.805,176.887c21.154-21.154,49.279-32.929,79.195-32.929s58.041,11.837,79.195,32.991 c13.422,13.422,23.011,29.551,28.232,47.551H448.5v-113c0-26.51-20.49-47-47-47h-288c-26.51,0-49,20.49-49,47v113h85.072 C154.794,206.5,164.383,190.309,177.805,176.887z M416.5,147.7c0,7.069-5.73,12.8-12.8,12.8h-38.4c-7.069,0-12.8-5.73-12.8-12.8 v-38.4c0-7.069,5.73-12.8,12.8-12.8h38.4c7.069,0,12.8,5.73,12.8,12.8V147.7z' }),
				React.createElement('path', { d: 'M336.195,335.279c-21.154,21.154-49.279,32.679-79.195,32.679s-58.041-11.462-79.195-32.616 c-21.115-21.115-32.759-49.842-32.803-78.842H64.5v143c0,26.51,22.49,49,49,49h288c26.51,0,47-22.49,47-49v-143h-79.502 C368.955,285.5,357.311,314.164,336.195,335.279z' })
			)
		);
	}
});