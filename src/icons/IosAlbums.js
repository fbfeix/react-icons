import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosAlbums extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M480,128H32v320h448V128L480,128z"></path>
	<rect x="72" y="96" width="368" height="16"></rect>
	<rect x="104" y="64" width="304" height="16"></rect>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M480,128H32v320h448V128L480,128z"></path>
	<rect x="72" y="96" width="368" height="16"></rect>
	<rect x="104" y="64" width="304" height="16"></rect>
</g>
</IconBase>;
	}
};IosAlbums.defaultProps = {bare: false}