import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosRewind extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M256,128L32,256l224,128V260.8L480,384V128L256,251.2V128L256,128z"></path>

			</g>;
		}		return <IconBase>
<path d="M256,128L32,256l224,128V260.8L480,384V128L256,251.2V128L256,128z"></path>
</IconBase>;
	}
};IosRewind.defaultProps = {bare: false}