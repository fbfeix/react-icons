import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowReturnRight extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M448,192l-128,96v-64H128v128h248c4.4,0,8,3.6,8,8v48c0,4.4-3.6,8-8,8H72c-4.4,0-8-3.6-8-8V168c0-4.4,3.6-8,8-8h248V96
	L448,192z"></path>

			</g>;
		}		return <IconBase>
<path d="M448,192l-128,96v-64H128v128h248c4.4,0,8,3.6,8,8v48c0,4.4-3.6,8-8,8H72c-4.4,0-8-3.6-8-8V168c0-4.4,3.6-8,8-8h248V96
	L448,192z"></path>
</IconBase>;
	}
};ArrowReturnRight.defaultProps = {bare: false}