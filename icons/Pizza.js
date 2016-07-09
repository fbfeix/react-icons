'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var Pizza = React.createClass({
	displayName: 'Pizza',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M394.619,130.445c-42.658-18.924-89.266-28.472-138.649-28.425c-49.373-0.047-99.27,10.262-138.641,27.979 c-7.396,3.312-14.004,8.957-9.296,19.479S255.941,480,255.941,480l147.621-329.874C406.452,143.25,404.318,134.748,394.619,130.445 z M191.983,192.015c-17.67,0-31.995-14.323-31.995-31.993c0-17.669,14.325-31.992,31.995-31.992 c17.671,0,31.996,14.323,31.996,31.992C223.979,177.691,209.654,192.015,191.983,192.015z M255.975,338.981 c-17.671,0-31.995-14.323-31.995-31.993s14.324-31.992,31.995-31.992c17.67,0,31.995,14.322,31.995,31.992 S273.645,338.981,255.975,338.981z M319.965,224.007c-17.67,0-31.995-14.322-31.995-31.992s14.325-31.993,31.995-31.993 c17.671,0,31.996,14.323,31.996,31.993S337.636,224.007,319.965,224.007z' }),
				React.createElement('path', { d: 'M421.79,66c-47.808-20.603-106.867-33.977-165.811-34c-58.931,0-116.944,12.136-165.82,33.446 C85.83,67.334,80,71.016,80,79.227c0,2.523,0.907,4.922,0.907,4.922l7.98,19.194c2.531,4.865,7.944,8.18,13.798,8.18 c1.645,0,3.936-0.331,6.65-1.476c44.9-18.929,94.471-29.588,146.644-29.564c52.175-0.023,105.63,11.64,146.634,29.561 c3.296,1.44,5.173,1.472,6.663,1.472c6.009,0,11.158-3.274,13.727-8.053l8.04-19.342c0.577-1.558,0.957-3.287,0.957-4.768 C432,72,427.614,68.51,421.79,66z' })
			)
		);
	}
});