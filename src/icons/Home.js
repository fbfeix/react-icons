import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Home extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<polygon points="448,288 256,64 64,288 112,288 112,448 208,448 208,320 304,320 304,448 400,448 400,288 	"></polygon>
</g>

			</g>;
		}		return <IconBase>
<g>
	<polygon points="448,288 256,64 64,288 112,288 112,448 208,448 208,320 304,320 304,448 400,448 400,288 	"></polygon>
</g>
</IconBase>;
	}
};Home.defaultProps = {bare: false}