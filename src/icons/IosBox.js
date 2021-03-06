import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosBox extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M112,400h288V208H112V400z M224,240h64c8.8,0,16,7.2,16,16s-7.2,16-16,16h-64c-8.8,0-16-7.2-16-16S215.2,240,224,240z"></path>
	<polygon points="96,112 96,192 112,192 400,192 416,192 416,112 	"></polygon>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M112,400h288V208H112V400z M224,240h64c8.8,0,16,7.2,16,16s-7.2,16-16,16h-64c-8.8,0-16-7.2-16-16S215.2,240,224,240z"></path>
	<polygon points="96,112 96,192 112,192 400,192 416,192 416,112 	"></polygon>
</g>
</IconBase>;
	}
};IosBox.defaultProps = {bare: false}