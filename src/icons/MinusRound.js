import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class MinusRound extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32
	C448,238.3,434.3,224,417.4,224z"></path>

			</g>;
		}		return <IconBase>
<path d="M417.4,224H94.6C77.7,224,64,238.3,64,256c0,17.7,13.7,32,30.6,32h322.8c16.9,0,30.6-14.3,30.6-32
	C448,238.3,434.3,224,417.4,224z"></path>
</IconBase>;
	}
};MinusRound.defaultProps = {bare: false}