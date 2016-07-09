import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosGridViewOutline extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M448,192v-16H336V64h-16v112H192V64h-16v112H64v16h112v128H64v16h112v112h16V336h128v112h16V336h112v-16H336V192H448z
	 M320,320H192V192h128V320z"></path>

			</g>;
		}		return <IconBase>
<path d="M448,192v-16H336V64h-16v112H192V64h-16v112H64v16h112v128H64v16h112v112h16V336h128v112h16V336h112v-16H336V192H448z
	 M320,320H192V192h128V320z"></path>
</IconBase>;
	}
};IosGridViewOutline.defaultProps = {bare: false}