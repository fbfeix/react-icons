import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosPricetag extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<circle cx="368" cy="128" r="16"></circle>
	<path d="M304,32L48,320l160,160l256-288V32H304z M368,160c-17.645,0-32-14.355-32-32s14.355-32,32-32s32,14.355,32,32
		S385.645,160,368,160z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<circle cx="368" cy="128" r="16"></circle>
	<path d="M304,32L48,320l160,160l256-288V32H304z M368,160c-17.645,0-32-14.355-32-32s14.355-32,32-32s32,14.355,32,32
		S385.645,160,368,160z"></path>
</g>
</IconBase>;
	}
};IosPricetag.defaultProps = {bare: false}