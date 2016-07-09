import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowShrink extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<polygon points="448,92.3 366.1,174.1 416,224 288,224 288,96 337.9,145.9 419.7,64 	"></polygon>
	<polygon points="448,419.7 366.1,337.9 416,288 288,288 288,416 337.9,366.1 419.7,448 	"></polygon>
	<polygon points="64,419.7 145.9,337.9 96,288 224,288 224,416 174.1,366.1 92.3,448 	"></polygon>
	<polygon points="64,92.3 145.9,174.1 96,224 224,224 224,96 174.1,145.9 92.3,64 	"></polygon>
</g>

			</g>;
		}		return <IconBase>
<g>
	<polygon points="448,92.3 366.1,174.1 416,224 288,224 288,96 337.9,145.9 419.7,64 	"></polygon>
	<polygon points="448,419.7 366.1,337.9 416,288 288,288 288,416 337.9,366.1 419.7,448 	"></polygon>
	<polygon points="64,419.7 145.9,337.9 96,288 224,288 224,416 174.1,366.1 92.3,448 	"></polygon>
	<polygon points="64,92.3 145.9,174.1 96,224 224,224 224,96 174.1,145.9 92.3,64 	"></polygon>
</g>
</IconBase>;
	}
};ArrowShrink.defaultProps = {bare: false}