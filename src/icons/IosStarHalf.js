import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosStarHalf extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M172.248,304.931l-54.677,159.073L256,365.37l138.445,98.634L339.76,304.937L480,207H308.613L256,48.005L203.402,207H32
	L172.248,304.931z M256,100.75L297,224h131l-108,74.711l42.623,122.481L256,345.257V100.75z"></path>

			</g>;
		}		return <IconBase>
<path d="M172.248,304.931l-54.677,159.073L256,365.37l138.445,98.634L339.76,304.937L480,207H308.613L256,48.005L203.402,207H32
	L172.248,304.931z M256,100.75L297,224h131l-108,74.711l42.623,122.481L256,345.257V100.75z"></path>
</IconBase>;
	}
};IosStarHalf.defaultProps = {bare: false}