import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowGraphUpRight extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="320,128 381.8,189.8 288.3,288 181.3,181.3 32,384 181.3,256 288.3,368 419.2,227.2 480,288 480,128 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="320,128 381.8,189.8 288.3,288 181.3,181.3 32,384 181.3,256 288.3,368 419.2,227.2 480,288 480,128 "></polygon>
</IconBase>;
	}
};ArrowGraphUpRight.defaultProps = {bare: false}