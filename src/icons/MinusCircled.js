import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class MinusCircled extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M384,272H128v-32h256V272z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M384,272H128v-32h256V272z"></path>
</g>
</IconBase>;
	}
};MinusCircled.defaultProps = {bare: false}