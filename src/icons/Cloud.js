import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Cloud extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M398.1,233.2c0-1.2,0.2-2.4,0.2-3.6c0-65-51.8-117.6-115.7-117.6c-46.1,0-85.7,27.4-104.3,67c-8.1-4.1-17.2-6.5-26.8-6.5
	c-29.5,0-54.1,21.9-58.8,50.5C57.3,235.2,32,269.1,32,309c0,50.2,40.1,90.9,89.5,91h276.7l0,0c45.2-0.2,81.7-37.5,81.7-83.4
	C480,270.6,443.3,233.3,398.1,233.2z"></path>

			</g>;
		}		return <IconBase>
<path d="M398.1,233.2c0-1.2,0.2-2.4,0.2-3.6c0-65-51.8-117.6-115.7-117.6c-46.1,0-85.7,27.4-104.3,67c-8.1-4.1-17.2-6.5-26.8-6.5
	c-29.5,0-54.1,21.9-58.8,50.5C57.3,235.2,32,269.1,32,309c0,50.2,40.1,90.9,89.5,91h276.7l0,0c45.2-0.2,81.7-37.5,81.7-83.4
	C480,270.6,443.3,233.3,398.1,233.2z"></path>
</IconBase>;
	}
};Cloud.defaultProps = {bare: false}