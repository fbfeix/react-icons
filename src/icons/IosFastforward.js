import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosFastforward extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M256,128v123.2L32,128v256l224-123.2V384l224-128L256,128L256,128z"></path>

			</g>;
		}		return <IconBase>
<path d="M256,128v123.2L32,128v256l224-123.2V384l224-128L256,128L256,128z"></path>
</IconBase>;
	}
};IosFastforward.defaultProps = {bare: false}