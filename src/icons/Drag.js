import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Drag extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<rect y="144" width="512" height="32"></rect>
	<rect y="240" width="512" height="32"></rect>
	<rect y="336" width="512" height="32"></rect>
</g>

			</g>;
		}		return <IconBase>
<g>
	<rect y="144" width="512" height="32"></rect>
	<rect y="240" width="512" height="32"></rect>
	<rect y="336" width="512" height="32"></rect>
</g>
</IconBase>;
	}
};Drag.defaultProps = {bare: false}