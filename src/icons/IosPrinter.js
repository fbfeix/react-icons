import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosPrinter extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<rect x="128" y="224" width="256" height="224"></rect>
</g>
<g>
	<rect x="127.5" y="224.5" width="256" height="224"></rect>
	<g>
		<rect x="111.5" y="64.5" width="288" height="32"></rect>
		<path d="M432.5,112.5h-352c-17.645,0-33,12.842-33,30.309v158.393c0,17.468,15.355,33.299,33,33.299h31v-126h288v126h33
			c17.645,0,31-15.831,31-33.299V142.809C463.5,125.342,450.145,112.5,432.5,112.5z"></path>
	</g>
</g>

			</g>;
		}		return <IconBase>
<g>
	<rect x="128" y="224" width="256" height="224"></rect>
</g>
<g>
	<rect x="127.5" y="224.5" width="256" height="224"></rect>
	<g>
		<rect x="111.5" y="64.5" width="288" height="32"></rect>
		<path d="M432.5,112.5h-352c-17.645,0-33,12.842-33,30.309v158.393c0,17.468,15.355,33.299,33,33.299h31v-126h288v126h33
			c17.645,0,31-15.831,31-33.299V142.809C463.5,125.342,450.145,112.5,432.5,112.5z"></path>
	</g>
</g>
</IconBase>;
	}
};IosPrinter.defaultProps = {bare: false}