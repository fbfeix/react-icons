import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowSwap extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M64,328v48c0,4.4,3.6,8,8,8h248v64l128-96l-128-96v64H72C67.6,320,64,323.6,64,328z"></path>
	<path d="M448,184v-48c0-4.4-3.6-8-8-8H192V64L64,160l128,96v-64h248C444.4,192,448,188.4,448,184z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M64,328v48c0,4.4,3.6,8,8,8h248v64l128-96l-128-96v64H72C67.6,320,64,323.6,64,328z"></path>
	<path d="M448,184v-48c0-4.4-3.6-8-8-8H192V64L64,160l128,96v-64h248C444.4,192,448,188.4,448,184z"></path>
</g>
</IconBase>;
	}
};ArrowSwap.defaultProps = {bare: false}