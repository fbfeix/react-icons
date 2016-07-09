import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowGraphDownLeft extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="32,384 32,224 92.8,284.8 223.7,144 330.7,256 480,128 330.7,330.7 223.7,224 130.2,322.2 192,384 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="32,384 32,224 92.8,284.8 223.7,144 330.7,256 480,128 330.7,330.7 223.7,224 130.2,322.2 192,384 "></polygon>
</IconBase>;
	}
};ArrowGraphDownLeft.defaultProps = {bare: false}