import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosNavigate extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<g>
	<path d="M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,384
		V256H128.3L352,160L256,384z"></path>
</g>

			</g>;
		}		return <IconBase>
<g>
	<path d="M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,384
		V256H128.3L352,160L256,384z"></path>
</g>
</IconBase>;
	}
};IosNavigate.defaultProps = {bare: false}