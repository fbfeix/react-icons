import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class AndroidBar extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g id="Icon_37_">
	<g>
		<path d="M234.667,277.333V408H128v40h256v-40H277.333V277.333L448,106.667V64H64v42.667L234.667,277.333z M160,149.333
			l-42.667-42.666h277.334L352,149.333H160z"></path>
	</g>
</g>

			</g>;
		}		return <IconBase>
<g id="Icon_37_">
	<g>
		<path d="M234.667,277.333V408H128v40h256v-40H277.333V277.333L448,106.667V64H64v42.667L234.667,277.333z M160,149.333
			l-42.667-42.666h277.334L352,149.333H160z"></path>
	</g>
</g>
</IconBase>;
	}
};AndroidBar.defaultProps = {bare: false}