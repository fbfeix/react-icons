import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowUpA extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="256.5,64.5 64.5,256.5 176.5,256.5 176.5,448.5 336.5,448.5 336.5,256.5 448.5,256.5 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="256.5,64.5 64.5,256.5 176.5,256.5 176.5,448.5 336.5,448.5 336.5,256.5 448.5,256.5 "></polygon>
</IconBase>;
	}
};ArrowUpA.defaultProps = {bare: false}