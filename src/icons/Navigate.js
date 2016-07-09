import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Navigate extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="480,32 32,224 288,224 288,480 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="480,32 32,224 288,224 288,480 "></polygon>
</IconBase>;
	}
};Navigate.defaultProps = {bare: false}