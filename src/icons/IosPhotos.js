import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosPhotos extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M96,128v320h384V128H96z"></path>
	<polygon points="416,64 32,64 32,384 80,384 80,112 416,112 	"></polygon>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M96,128v320h384V128H96z"></path>
	<polygon points="416,64 32,64 32,384 80,384 80,112 416,112 	"></polygon>
</g>
</IconBase>;
	}
};IosPhotos.defaultProps = {bare: false}