'use strict';

var React = require('react');
var IconBase = require(__dirname + 'components/IconBase/IconBase');

var SocialSnapchatOutline = React.createClass({
	displayName: 'SocialSnapchatOutline',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M256.283,47.553c70.693,0,128,54.682,118,128.931c-2.072,15.388-3.422,31.483-4.26,44.759c0,0,2.402,4.253,12.664,4.253 c6.071,0,14.895-1.543,27.596-6.354c2.236-0.847,4.377-1.241,6.377-1.241c7.918,0,13.615,5.931,14.123,12.271 c0.426,5.31-4.564,11.199-8.371,13.009c-13.766,6.542-46.991,10.063-46.991,32.638c0,22.576,22.362,46.656,40.862,63.713 S480,360.602,480,360.602s0.283,21.57-31.717,29.097c-32,7.524-32.1,5.712-33.25,13.796c-2.133,14.979-1.535,21.378-11.248,21.378 c-1.672,0-3.651-0.19-6.002-0.558c-8.23-1.291-19.239-3.644-31.121-3.644c-11.216,0-23.21,2.097-34.379,9.161 c-23,14.549-41.283,34.114-76.283,34.114s-53-19.565-76-34.114c-11.17-7.065-23.162-9.161-34.379-9.161 c-11.88,0-22.892,2.353-31.121,3.644c-2.352,0.367-4.33,0.558-6.002,0.558c-9.71,0-9.115-6.399-11.248-21.378 c-1.151-8.084-1.25-6.27-33.25-13.795s-32-29.097-32-29.097s45.5-4.012,64-21.068c18.5-17.058,40.862-41.134,40.862-63.71 c0-22.575-33.226-26.09-46.991-32.632c-3.807-1.81-8.796-7.687-8.371-12.997c0.507-6.336,6.196-12.251,14.107-12.25 c2.004,0,4.152,0.38,6.393,1.229c12.749,4.829,21.588,6.342,27.662,6.342c10.204,0,12.598-4.273,12.598-4.273 c-0.837-13.275-2.187-29.371-4.259-44.759c-10-74.249,47.307-128.931,118-128.931l0,0 M256.283,32H256 c-41.093,0-79.215,16.208-104.591,45.341c-23.982,27.534-34.375,63.345-29.265,101.292c1.416,10.51,2.46,21.231,3.21,30.618 c-3.97-0.559-9.686-1.998-17.703-5.034c-3.965-1.502-8.017-2.295-12.043-2.295c-15.641-0.001-28.844,11.852-30.057,27.003 c-1.027,12.818,8.235,24.393,17.47,28.783c4.251,2.02,9.181,3.578,14.4,5.232c6.707,2.125,14.309,4.532,19.293,7.703 c4.147,2.639,4.147,4.168,4.147,5.182c0,8.66-6.191,24.691-35.688,51.888c-10.499,9.681-39.055,15.501-54.588,16.897l-14.572,1.311 L16,360.603c0,1.679,0.312,10.546,6.485,20.319c5.246,8.306,16.073,19.283,37.863,24.407c6.179,1.453,11.186,2.563,15.208,3.454 c2.306,0.512,4.555,1.01,6.454,1.453c0.027,0.209,0.054,0.417,0.081,0.623c0.9,7.004,1.611,12.535,4.392,17.75 c2.453,4.6,8.574,12.316,22.015,12.316c2.478,0,5.249-0.246,8.472-0.751c1.672-0.263,3.386-0.554,5.2-0.863 c7.116-1.212,15.182-2.587,23.451-2.587c10.277,0,18.732,2.188,25.846,6.688c4.531,2.867,8.892,5.972,13.509,9.26 C202.967,465.481,223.358,480,256,480c32.726,0,53.293-14.582,71.439-27.446c4.576-3.244,8.898-6.309,13.377-9.142 c7.113-4.5,15.568-6.688,25.846-6.688c8.27,0,16.334,1.375,23.449,2.586c1.814,0.311,3.529,0.602,5.202,0.864 c3.223,0.505,5.993,0.751,8.472,0.751c13.44,0,19.562-7.715,22.015-12.313c2.781-5.214,3.492-10.746,4.392-17.749 c0.027-0.208,0.055-0.418,0.082-0.629c1.898-0.441,4.148-0.941,6.455-1.452c4.023-0.892,9.029-2.001,15.206-3.454 c21.851-5.139,32.611-16.17,37.79-24.518c6.098-9.828,6.296-18.736,6.273-20.422l-0.189-14.501l-14.398-1.278 c-15.413-1.396-43.8-7.219-54.301-16.9c-16.281-15.011-35.688-36.199-35.688-51.893c0-1.014,0-2.546,4.15-5.186 c4.985-3.174,12.589-5.584,19.297-7.71c5.217-1.654,10.144-3.217,14.394-5.236c9.236-4.39,18.498-15.978,17.471-28.807 c-1.215-15.166-14.424-27.046-30.072-27.046c-4.021,0-8.068,0.76-12.027,2.259c-8.027,3.041-13.743,4.41-17.705,4.962 c0.747-9.319,1.791-20.12,3.211-30.67c5.111-37.948-5.281-73.509-29.264-101.042C335.498,48.208,297.376,32,256.283,32L256.283,32z ' }),
				React.createElement('path', { d: 'M256,229c-20.838,0-40.604-8.29-55.657-23.343c-3.125-3.124-3.124-8.189,0-11.313c3.125-3.124,8.19-3.124,11.313,0 C223.688,206.374,239.436,213,256,213c16.387,0,32.15-6.64,44.385-18.698c3.148-3.102,8.213-3.063,11.312,0.082 c3.102,3.147,3.064,8.212-0.082,11.313C296.368,220.725,276.617,229,256,229z' }),
				React.createElement('ellipse', { cx: '208', cy: '152', rx: '16', ry: '24' }),
				React.createElement('ellipse', { cx: '304', cy: '152', rx: '16', ry: '24' })
			)
		);
	}
});