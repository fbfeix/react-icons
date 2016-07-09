import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class CheckmarkRound extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M448,71.9c-17.3-13.4-41.5-9.3-54.1,9.1L214,344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8
	c-15.6,15.5-16.4,41.6-1.7,58.1c0,0,120.4,133.6,137.7,147c17.3,13.4,41.5,9.3,54.1-9.1l206.3-301.7
	C469.2,110.9,465.3,85.2,448,71.9z"></path>

			</g>;
		}		return <IconBase>
<path d="M448,71.9c-17.3-13.4-41.5-9.3-54.1,9.1L214,344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8
	c-15.6,15.5-16.4,41.6-1.7,58.1c0,0,120.4,133.6,137.7,147c17.3,13.4,41.5,9.3,54.1-9.1l206.3-301.7
	C469.2,110.9,465.3,85.2,448,71.9z"></path>
</IconBase>;
	}
};CheckmarkRound.defaultProps = {bare: false}