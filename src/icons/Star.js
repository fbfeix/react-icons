import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Star extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="480,200 308.519,200 256.029,32 203.519,200 32,200 170.946,304.209 116,480 256,368 396,480 341.073,304.195 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="480,200 308.519,200 256.029,32 203.519,200 32,200 170.946,304.209 116,480 256,368 396,480 341.073,304.195 "></polygon>
</IconBase>;
	}
};Star.defaultProps = {bare: false}