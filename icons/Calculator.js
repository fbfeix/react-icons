'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Calculator = React.createClass({
	displayName: 'Calculator',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M400,32H112c-8.8,0-16,7.2-16,16v416c0,8.8,7.2,16,16,16h288c8.8,0,16-7.2,16-16V48C416,39.2,408.8,32,400,32z M144,208h32 v32h-32V208z M144,272h32v32h-32V272z M144,336h32v32h-32V336z M240,432h-96v-32h96V432z M240,368h-32v-32h32V368z M240,304h-32v-32 h32V304z M240,240h-32v-32h32V240z M304,432h-32v-32h32V432z M304,368h-32v-32h32V368z M304,304h-32v-32h32V304z M304,240h-32v-32 h32V240z M368,432h-32v-96h32V432z M368,304h-32v-32h32V304z M368,240h-32v-32h32V240z M368,160H144V80h224V160z' })
		);
	}
});