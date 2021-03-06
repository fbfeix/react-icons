import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Thermometer extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M303,335.6V78.4c0-25.7-21-46.5-47-46.5c-26,0-47,20.8-47,46.5v256.8c-20,14.5-32.9,38.2-32.9,64.9c0,44.2,36,80,80.2,80
		c44.2,0,79.8-35.8,79.8-80C336,373.6,323,350.1,303,335.6z M241,78.4c0-8,6.7-14.5,15-14.5s15,6.5,15,14.5V128h-30V78.4z M272,288
		h-16v-16h16V288z M272,256h-16v-64h16V256z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M303,335.6V78.4c0-25.7-21-46.5-47-46.5c-26,0-47,20.8-47,46.5v256.8c-20,14.5-32.9,38.2-32.9,64.9c0,44.2,36,80,80.2,80
		c44.2,0,79.8-35.8,79.8-80C336,373.6,323,350.1,303,335.6z M241,78.4c0-8,6.7-14.5,15-14.5s15,6.5,15,14.5V128h-30V78.4z M272,288
		h-16v-16h16V288z M272,256h-16v-64h16V256z"></path>
</g>
</IconBase>;
	}
};Thermometer.defaultProps = {bare: false}