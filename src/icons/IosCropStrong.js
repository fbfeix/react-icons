import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosCropStrong extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<rect x="128" y="64" width="32" height="48"></rect>
	<polygon points="160,352 160,176 128,176 128,384 336,384 336,352 	"></polygon>
	<rect x="400" y="352" width="48" height="32"></rect>
	<polygon points="64,128 64,160 352,160 352,448 384,448 384,128 	"></polygon>
</g>

			</g>;
		}		return <IconBase>
<g>
	<rect x="128" y="64" width="32" height="48"></rect>
	<polygon points="160,352 160,176 128,176 128,384 336,384 336,352 	"></polygon>
	<rect x="400" y="352" width="48" height="32"></rect>
	<polygon points="64,128 64,160 352,160 352,448 384,448 384,128 	"></polygon>
</g>
</IconBase>;
	}
};IosCropStrong.defaultProps = {bare: false}