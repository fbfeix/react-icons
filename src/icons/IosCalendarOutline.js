import React from 'react';
import IconBase from './../components/IconBase/IconBase';

export default class IosCalendarOutline extends React.Component {
	render() {
if(this.props.bare) {
			return <g>

<style type="text/css">

	.st0{fill:none;}

</style>
<polyline class="st0" points="80,112 80,176 432,176 432,112 "></polyline>
<path d="M352,96V64h-16v32H176V64h-16v32H64v352h384V96H352z M432,432H80V192h352V432z M432,176H80v-64h80v32h16v-32h160v32h16v-32
	h80V176z"></path>

			</g>;
		}		return <IconBase>
<style type="text/css">

	.st0{fill:none;}

</style>
<polyline class="st0" points="80,112 80,176 432,176 432,112 "></polyline>
<path d="M352,96V64h-16v32H176V64h-16v32H64v352h384V96H352z M432,432H80V192h352V432z M432,176H80v-64h80v32h16v-32h160v32h16v-32
	h80V176z"></path>
</IconBase>;
	}
};IosCalendarOutline.defaultProps = {bare: false}