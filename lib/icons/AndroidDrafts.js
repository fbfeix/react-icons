'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidDrafts = React.createClass({
	displayName: 'AndroidDrafts',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_18_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M480,201.667c0-14.933-7.469-28.803-20.271-36.266L256,64L52.271,165.401C40.531,172.864,32,186.734,32,201.667v203.666 C32,428.802,51.197,448,74.666,448h362.668C460.803,448,480,428.802,480,405.333V201.667z M256,304L84.631,192L256,106.667 L427.369,192L256,304z' })
					)
				)
			)
		);
	}
});