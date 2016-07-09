import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosArrowBack extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "></polygon>
</IconBase>;
	}
};IosArrowBack.defaultProps = {bare: false}