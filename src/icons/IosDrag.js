import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosDrag extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<rect x="80" y="304" width="352" height="16"></rect>
	<rect x="80" y="248" width="352" height="16"></rect>
	<rect x="80" y="192" width="352" height="16"></rect>
</g>

			</g>;
		}		return <IconBase>
<g>
	<rect x="80" y="304" width="352" height="16"></rect>
	<rect x="80" y="248" width="352" height="16"></rect>
	<rect x="80" y="192" width="352" height="16"></rect>
</g>
</IconBase>;
	}
};IosDrag.defaultProps = {bare: false}