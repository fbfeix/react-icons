var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var IosListOutline = React.createClass({
	render: function() {
		return <IconBase>
<g>
	<g>
		<path d="M432,80v352H80V80H432 M448,64H64v384h384V64L448,64z"></path>
		<g>
			<rect x="192" y="152" width="192" height="16"></rect>
		</g>
		<g>
			<rect x="192" y="248" width="192" height="16"></rect>
		</g>
		<g>
			<rect x="192" y="344" width="192" height="16"></rect>
		</g>
	</g>
	<circle cx="144" cy="160" r="16"></circle>
	<circle cx="144" cy="256" r="16"></circle>
	<circle cx="144" cy="352" r="16"></circle>
</g>
</IconBase>;
	}
});