import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Record extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M256,464c114.9,0,208-93.1,208-208c0-114.9-93.1-208-208-208C141.1,48,48,141.1,48,256C48,370.9,141.1,464,256,464z"></path>

			</g>;
		}		return <IconBase>
<path d="M256,464c114.9,0,208-93.1,208-208c0-114.9-93.1-208-208-208C141.1,48,48,141.1,48,256C48,370.9,141.1,464,256,464z"></path>
</IconBase>;
	}
};Record.defaultProps = {bare: false}