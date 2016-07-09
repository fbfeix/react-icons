import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowGraphDownRight extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="320,384 381.8,322.2 288.3,224 181.3,330.7 32,128 181.3,256 288.3,144 419.2,284.8 480,224 480,384 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="320,384 381.8,322.2 288.3,224 181.3,330.7 32,128 181.3,256 288.3,144 419.2,284.8 480,224 480,384 "></polygon>
</IconBase>;
	}
};ArrowGraphDownRight.defaultProps = {bare: false}