import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosBrowsersOutline extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M64,144v304h303.9V144H64z M351.9,432H80V160h271.9V432z"></path>
	<g>
		<polygon points="448,64 144,64 144,128 160,128 160,80 432,80 432,352 384,352 384,368 448,368 		"></polygon>
	</g>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M64,144v304h303.9V144H64z M351.9,432H80V160h271.9V432z"></path>
	<g>
		<polygon points="448,64 144,64 144,128 160,128 160,80 432,80 432,352 384,352 384,368 448,368 		"></polygon>
	</g>
</g>
</IconBase>;
	}
};IosBrowsersOutline.defaultProps = {bare: false}