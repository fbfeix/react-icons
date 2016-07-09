import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Stop extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M437.4,64H74.6C68.7,64,64,68.7,64,74.6v362.8c0,5.9,4.7,10.6,10.6,10.6h362.8c5.8,0,10.6-4.7,10.6-10.6V74.6
	C448,68.7,443.2,64,437.4,64z"></path>

			</g>;
		}		return <IconBase>
<path d="M437.4,64H74.6C68.7,64,64,68.7,64,74.6v362.8c0,5.9,4.7,10.6,10.6,10.6h362.8c5.8,0,10.6-4.7,10.6-10.6V74.6
	C448,68.7,443.2,64,437.4,64z"></path>
</IconBase>;
	}
};Stop.defaultProps = {bare: false}