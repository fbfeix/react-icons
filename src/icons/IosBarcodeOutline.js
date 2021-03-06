import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosBarcodeOutline extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<polygon points="48,384 128,384 128,368 64,368 64,144 128,144 128,128 48,128 	"></polygon>
	<polygon points="384,128 384,144 448,144 448,368 384,368 384,384 464,384 464,128 	"></polygon>
	<rect x="112" y="192" width="16" height="128"></rect>
	<rect x="384" y="192" width="16" height="128"></rect>
	<rect x="320" y="160" width="16" height="192"></rect>
	<rect x="176" y="160" width="16" height="192"></rect>
	<rect x="247" y="176" width="16" height="160"></rect>
</g>

			</g>;
		}		return <IconBase>
<g>
	<polygon points="48,384 128,384 128,368 64,368 64,144 128,144 128,128 48,128 	"></polygon>
	<polygon points="384,128 384,144 448,144 448,368 384,368 384,384 464,384 464,128 	"></polygon>
	<rect x="112" y="192" width="16" height="128"></rect>
	<rect x="384" y="192" width="16" height="128"></rect>
	<rect x="320" y="160" width="16" height="192"></rect>
	<rect x="176" y="160" width="16" height="192"></rect>
	<rect x="247" y="176" width="16" height="160"></rect>
</g>
</IconBase>;
	}
};IosBarcodeOutline.defaultProps = {bare: false}