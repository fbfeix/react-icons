import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosStar extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M480,207H308.6L256,47.9L203.4,207H32l140.2,97.9L117.6,464L256,365.4L394.4,464l-54.7-159.1L480,207z"></path>

			</g>;
		}		return <IconBase>
<path d="M480,207H308.6L256,47.9L203.4,207H32l140.2,97.9L117.6,464L256,365.4L394.4,464l-54.7-159.1L480,207z"></path>
</IconBase>;
	}
};IosStar.defaultProps = {bare: false}