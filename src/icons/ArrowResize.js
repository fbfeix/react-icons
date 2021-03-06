import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class ArrowResize extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<polygon points="288,96 337.9,145.9 274,209.7 274,209.7 145.9,337.9 96,288 96,416 224,416 174.1,366.1 357.4,182.9 366.1,174.1 
	416,224 416,96 "></polygon>

			</g>;
		}		return <IconBase>
<polygon points="288,96 337.9,145.9 274,209.7 274,209.7 145.9,337.9 96,288 96,416 224,416 174.1,366.1 357.4,182.9 366.1,174.1 
	416,224 416,96 "></polygon>
</IconBase>;
	}
};ArrowResize.defaultProps = {bare: false}