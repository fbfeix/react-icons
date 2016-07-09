'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidRestaurant = React.createClass({
	displayName: 'AndroidRestaurant',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				{ id: 'Icon_38_' },
				React.createElement(
					'g',
					null,
					React.createElement(
						'g',
						null,
						React.createElement('path', { d: 'M164.852,279.939l61.834-60.251L73.72,71.706c-33.626,32.764-33.626,86.677,0,119.44L164.852,279.939z' }),
						React.createElement('path', { d: 'M312.389,241.88c33.636,14.802,80.283,4.232,113.91-29.593c41.222-40.165,49.909-98.303,17.363-128.96 c-31.465-31.71-91.131-23.245-132.354,16.921c-34.718,33.825-45.566,79.276-30.374,110.986 C233.195,258.802,69.382,418.407,69.382,418.407L99.759,448l149.71-145.866L399.177,448l30.374-29.593L279.842,272.538 L312.389,241.88z' })
					)
				)
			)
		);
	}
});