import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowLeftA extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="64.5,256.5 256.5,448.5 256.5,336.5 448.5,336.5 448.5,176.5 256.5,176.5 256.5,64.5 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="64.5,256.5 256.5,448.5 256.5,336.5 448.5,336.5 448.5,176.5 256.5,176.5 256.5,64.5 "></polygon>
</IconBase>;
	}
};ArrowLeftA.defaultProps = {bare: false}