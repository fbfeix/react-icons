import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Plus extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 "></polygon>
</IconBase>;
	}
};Plus.defaultProps = {bare: false}