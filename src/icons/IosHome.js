import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosHome extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M256,112L96,240v208h112V320h96v128h112V240L256,112z"></path>
	<path d="M256,64l-96,76.8V96H96v95.999l-32,25.499l11.51,11.384L256,84.49l180.49,144.393L448,217.498L256,64z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M256,112L96,240v208h112V320h96v128h112V240L256,112z"></path>
	<path d="M256,64l-96,76.8V96H96v95.999l-32,25.499l11.51,11.384L256,84.49l180.49,144.393L448,217.498L256,64z"></path>
</g>
</IconBase>;
	}
};IosHome.defaultProps = {bare: false}