import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowReturnLeft extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M192,96v64h248c4.4,0,8,3.6,8,8v240c0,4.4-3.6,8-8,8H136c-4.4,0-8-3.6-8-8v-48c0-4.4,3.6-8,8-8h248V224H192v64L64,192
	L192,96z"></path>

			</g>;
		}		return <IconBase>
<path d="M192,96v64h248c4.4,0,8,3.6,8,8v240c0,4.4-3.6,8-8,8H136c-4.4,0-8-3.6-8-8v-48c0-4.4,3.6-8,8-8h248V224H192v64L64,192
	L192,96z"></path>
</IconBase>;
	}
};ArrowReturnLeft.defaultProps = {bare: false}