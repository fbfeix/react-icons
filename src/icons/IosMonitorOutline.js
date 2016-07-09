import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosMonitorOutline extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M496,384V96H16v288h175v16h-64v16h257v-16h-64v-16H496z M32,112h448v256H32V112z"></path>

			</g>;
		}		return <IconBase>
<path d="M496,384V96H16v288h175v16h-64v16h257v-16h-64v-16H496z M32,112h448v256H32V112z"></path>
</IconBase>;
	}
};IosMonitorOutline.defaultProps = {bare: false}