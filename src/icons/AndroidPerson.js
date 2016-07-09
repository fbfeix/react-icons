import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class AndroidPerson extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M256,256c52.805,0,96-43.201,96-96s-43.195-96-96-96s-96,43.201-96,96S203.195,256,256,256z M256,304
		c-63.598,0-192,32.402-192,96v48h384v-48C448,336.402,319.598,304,256,304z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M256,256c52.805,0,96-43.201,96-96s-43.195-96-96-96s-96,43.201-96,96S203.195,256,256,256z M256,304
		c-63.598,0-192,32.402-192,96v48h384v-48C448,336.402,319.598,304,256,304z"></path>
</g>
</IconBase>;
	}
};AndroidPerson.defaultProps = {bare: false}