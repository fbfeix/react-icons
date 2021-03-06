import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowMove extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="480,256 384,160 384,236 276,236 276,128 352,128 256,32 160,128 236,128 236,236 128,236 128,160 32,256 128,352 
	128,276 236,276 236,384 160,384 256,480 352,384 275.8,384 275.4,275.5 384,275.8 384,352 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="480,256 384,160 384,236 276,236 276,128 352,128 256,32 160,128 236,128 236,236 128,236 128,160 32,256 128,352 
	128,276 236,276 236,384 160,384 256,480 352,384 275.8,384 275.4,275.5 384,275.8 384,352 "></polygon>
</IconBase>;
	}
};ArrowMove.defaultProps = {bare: false}