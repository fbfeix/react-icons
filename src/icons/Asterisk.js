import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Asterisk extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="480,224 293.172,231.487 401.688,64 342.441,32 256,208 169.824,32 110.328,64 218.828,231.487 32,224 32,288 
	217.537,277.934 113.65,448 169.619,480 256,304 342.381,480 398.33,448 294.463,277.934 480,288 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="480,224 293.172,231.487 401.688,64 342.441,32 256,208 169.824,32 110.328,64 218.828,231.487 32,224 32,288 
	217.537,277.934 113.65,448 169.619,480 256,304 342.381,480 398.33,448 294.463,277.934 480,288 "></polygon>
</IconBase>;
	}
};Asterisk.defaultProps = {bare: false}