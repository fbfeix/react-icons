import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosCalendar extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<rect x="64" y="192" width="384" height="256"></rect>
	<polygon points="448,96 352,96 352,144 336,144 336,96 176,96 176,144 160,144 160,96 64,96 64,176 448,176 	"></polygon>
	<rect x="160" y="64" width="16" height="32"></rect>
	<rect x="336" y="64" width="16" height="32"></rect>
</g>

			</g>;
		}		return <IconBase>
<g>
	<rect x="64" y="192" width="384" height="256"></rect>
	<polygon points="448,96 352,96 352,144 336,144 336,96 176,96 176,144 160,144 160,96 64,96 64,176 448,176 	"></polygon>
	<rect x="160" y="64" width="16" height="32"></rect>
	<rect x="336" y="64" width="16" height="32"></rect>
</g>
</IconBase>;
	}
};IosCalendar.defaultProps = {bare: false}