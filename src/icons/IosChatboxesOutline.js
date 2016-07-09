import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosChatboxesOutline extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<polygon points="64,64 320,64 320,160 336,160 336,48 48,48 48,272 160,272 160,256 64,256 	"></polygon>
	<path d="M176,176v224h162.6l64,64H416v-64h48V176H176z M448,384h-48v54.6L345,384H192V192h256V384z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<polygon points="64,64 320,64 320,160 336,160 336,48 48,48 48,272 160,272 160,256 64,256 	"></polygon>
	<path d="M176,176v224h162.6l64,64H416v-64h48V176H176z M448,384h-48v54.6L345,384H192V192h256V384z"></path>
</g>
</IconBase>;
	}
};IosChatboxesOutline.defaultProps = {bare: false}