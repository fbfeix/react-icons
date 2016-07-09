import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Tshirt extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M480,96L320,48c-13.988,27.227-30.771,40.223-63.769,40.223C223.723,87.676,205.722,75,192,48L32,96l32,88l64-8l-16,288h288
	l-16-288l64,8L480,96z"></path>

			</g>;
		}		return <IconBase>
<path d="M480,96L320,48c-13.988,27.227-30.771,40.223-63.769,40.223C223.723,87.676,205.722,75,192,48L32,96l32,88l64-8l-16,288h288
	l-16-288l64,8L480,96z"></path>
</IconBase>;
	}
};Tshirt.defaultProps = {bare: false}