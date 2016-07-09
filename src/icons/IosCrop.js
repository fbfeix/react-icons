import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosCrop extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<rect x="128" y="64" width="16" height="48"></rect>
	<polygon points="144,368 144,160 128,160 128,384 352,384 352,368 	"></polygon>
	<rect x="400" y="368" width="48" height="16"></rect>
	<polygon points="64,128 64,144 368,144 368,448 384,448 384,128 	"></polygon>
</g>

			</g>;
		}		return <IconBase>
<g>
	<rect x="128" y="64" width="16" height="48"></rect>
	<polygon points="144,368 144,160 128,160 128,384 352,384 352,368 	"></polygon>
	<rect x="400" y="368" width="48" height="16"></rect>
	<polygon points="64,128 64,144 368,144 368,448 384,448 384,128 	"></polygon>
</g>
</IconBase>;
	}
};IosCrop.defaultProps = {bare: false}