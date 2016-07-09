import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosPhotosOutline extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M96,128v320h384V128H96z M464,432H112V144h352V432z"></path>
	<polygon points="32,64 32,384 80,384 80,368 48,368 48,80 400,80 400,112 416,112 416,64 	"></polygon>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M96,128v320h384V128H96z M464,432H112V144h352V432z"></path>
	<polygon points="32,64 32,384 80,384 80,368 48,368 48,80 400,80 400,112 416,112 416,64 	"></polygon>
</g>
</IconBase>;
	}
};IosPhotosOutline.defaultProps = {bare: false}