import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Alert extends React.Component {
	render() {
		if(this.props.bare) {
			return <g>
						<g>
							<path d="M320,480H192v-96h128V480z M304,320h-96L192,32h128L304,320z"></path>
						</g>
					</g>;					
		}
				
				
		return <IconBase>
<g>
	<path d="M320,480H192v-96h128V480z M304,320h-96L192,32h128L304,320z"></path>
</g>
</IconBase>;
	}
};Alert.defaultProps = {bare: false}