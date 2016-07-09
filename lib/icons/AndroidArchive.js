'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidArchive = React.createClass({
	displayName: 'AndroidArchive',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement('path', { d: 'M453.594,100.001l-32.353-39.299C415.469,52.627,405.083,48,394.664,48H117.335c-10.416,0-20.801,4.627-26.576,12.702 l-32.351,39.299C51.468,106.923,48,117.335,48,128.886v288.89C48,443.2,68.8,464,94.225,464h323.553 C443.202,464,464,443.2,464,417.775v-288.89C464,117.335,460.537,106.923,453.594,100.001z M256,383.109L128.89,256h80.89v-46.224 h92.443V256h80.89L256,383.109z M96.534,94.221l18.486-23.111h277.331l21.965,23.111H96.534z' })
			)
		);
	}
});