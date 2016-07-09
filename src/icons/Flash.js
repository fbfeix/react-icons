import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Flash extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="96,288 243,288 191.9,480 416,224 269,224 320,32 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="96,288 243,288 191.9,480 416,224 269,224 320,32 "></polygon>
</IconBase>;
	}
};Flash.defaultProps = {bare: false}