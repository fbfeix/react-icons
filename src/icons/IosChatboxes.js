import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosChatboxes extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<polygon points="336,48 48,48 48,272 160,272 160,160 336,160 	"></polygon>
	<path d="M176,176v224h162.6l64,64H416v-64h48V176H176z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<polygon points="336,48 48,48 48,272 160,272 160,160 336,160 	"></polygon>
	<path d="M176,176v224h162.6l64,64H416v-64h48V176H176z"></path>
</g>
</IconBase>;
	}
};IosChatboxes.defaultProps = {bare: false}