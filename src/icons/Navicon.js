import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Navicon extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<rect x="96" y="241" width="320" height="32"></rect>
	<rect x="96" y="145" width="320" height="32"></rect>
	<rect x="96" y="337" width="320" height="32"></rect>
</g>

			</g>;
		}		return <IconBase>
<g>
	<rect x="96" y="241" width="320" height="32"></rect>
	<rect x="96" y="145" width="320" height="32"></rect>
	<rect x="96" y="337" width="320" height="32"></rect>
</g>
</IconBase>;
	}
};Navicon.defaultProps = {bare: false}