import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class Contrast extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<path d="M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z
	 M391.8,391.8C355.5,428,307,448,256,448V64c51,0,99.5,20,135.8,56.2C428,156.5,448,204.7,448,256C448,307.3,428,355.5,391.8,391.8z
	"></path>

			</g>;
		}		return <IconBase>
<path d="M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z
	 M391.8,391.8C355.5,428,307,448,256,448V64c51,0,99.5,20,135.8,56.2C428,156.5,448,204.7,448,256C448,307.3,428,355.5,391.8,391.8z
	"></path>
</IconBase>;
	}
};Contrast.defaultProps = {bare: false}