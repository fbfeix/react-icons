import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Location extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M256,64c-65.9,0-119.3,53.7-119.3,120c0,114.6,119.3,264,119.3,264s119.3-149.4,119.3-264C375.3,117.7,321.9,64,256,64z
		 M256,242.2c-31.2,0-56.4-25.4-56.4-56.7c0-31.3,25.3-56.8,56.4-56.8c31.2,0,56.4,25.4,56.4,56.8
		C312.4,216.8,287.2,242.2,256,242.2z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M256,64c-65.9,0-119.3,53.7-119.3,120c0,114.6,119.3,264,119.3,264s119.3-149.4,119.3-264C375.3,117.7,321.9,64,256,64z
		 M256,242.2c-31.2,0-56.4-25.4-56.4-56.7c0-31.3,25.3-56.8,56.4-56.8c31.2,0,56.4,25.4,56.4,56.8
		C312.4,216.8,287.2,242.2,256,242.2z"></path>
</g>
</IconBase>;
	}
};Location.defaultProps = {bare: false}