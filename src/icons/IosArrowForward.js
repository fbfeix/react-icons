import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosArrowForward extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "></polygon>
</IconBase>;
	}
};IosArrowForward.defaultProps = {bare: false}