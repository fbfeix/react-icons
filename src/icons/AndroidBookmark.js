import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class AndroidBookmark extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M360,64H152c-22.002,0-40,17.998-40,40v344l144-64l144,64V104C400,81.998,382.002,64,360,64z"></path>

			</g>;
		}		return <IconBase>
<path d="M360,64H152c-22.002,0-40,17.998-40,40v344l144-64l144,64V104C400,81.998,382.002,64,360,64z"></path>
</IconBase>;
	}
};AndroidBookmark.defaultProps = {bare: false}