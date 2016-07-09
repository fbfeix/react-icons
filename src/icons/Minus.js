import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Minus extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<rect x="64" y="224" width="384" height="64"></rect>

			</g>;
		}		return <IconBase>
<rect x="64" y="224" width="384" height="64"></rect>
</IconBase>;
	}
};Minus.defaultProps = {bare: false}