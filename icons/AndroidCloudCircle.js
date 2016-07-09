'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var AndroidCloudCircle = React.createClass({
	displayName: 'AndroidCloudCircle',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_32_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M256,48C141.6,48,48,141.6,48,256s93.6,208,208,208c114.4,0,208-93.6,208-208S370.4,48,256,48z M349.6,339.2 c0,0-175.759,0-176.799,0c-34.318,0-62.4-28.082-62.4-62.399c0-34.319,28.082-62.4,62.4-62.4c1.041,0,2.082,0,3.117,0 c9.364-36.4,41.601-62.399,80.083-62.399c45.764,0,83.199,37.435,83.199,83.198h10.4c29.118,0,52,22.882,52,52.001 C401.6,316.318,378.718,339.2,349.6,339.2z' })
					)
				)
			)
		);
	}
});