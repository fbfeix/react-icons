import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Egg extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M256,32C192,32,96,165.2,96,288.9C96,412.6,160,480,256,480s160-67.4,160-191.1C416,165.2,320,32,256,32z"></path>

			</g>;
		}		return <IconBase>
<path d="M256,32C192,32,96,165.2,96,288.9C96,412.6,160,480,256,480s160-67.4,160-191.1C416,165.2,320,32,256,32z"></path>
</IconBase>;
	}
};Egg.defaultProps = {bare: false}