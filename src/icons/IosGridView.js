import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosGridView extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<rect x="192" y="192" width="128" height="128"></rect>
	<path d="M64,64v384h384V64H64z M416,192h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16
		v80h80V192z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<rect x="192" y="192" width="128" height="128"></rect>
	<path d="M64,64v384h384V64H64z M416,192h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16
		v80h80V192z"></path>
</g>
</IconBase>;
	}
};IosGridView.defaultProps = {bare: false}