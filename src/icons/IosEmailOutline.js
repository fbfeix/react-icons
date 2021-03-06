import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosEmailOutline extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M64,128v256h384V128H64z M256,267.9L93.2,144h325.6L256,267.9z M80,368V154.1l115.1,87.6L127,319l2,2l78.9-69.6L256,288
	l48.1-36.6L383,321l2-2l-68.1-77.4L432,154.1V368H80z"></path>

			</g>;
		}		return <IconBase>
<path d="M64,128v256h384V128H64z M256,267.9L93.2,144h325.6L256,267.9z M80,368V154.1l115.1,87.6L127,319l2,2l78.9-69.6L256,288
	l48.1-36.6L383,321l2-2l-68.1-77.4L432,154.1V368H80z"></path>
</IconBase>;
	}
};IosEmailOutline.defaultProps = {bare: false}