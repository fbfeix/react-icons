import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosArrowRight extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "></polygon>
</IconBase>;
	}
};IosArrowRight.defaultProps = {bare: false}