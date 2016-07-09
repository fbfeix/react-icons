'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var AndroidWifi = React.createClass({
	displayName: 'AndroidWifi',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement('path', { d: 'M256,228.719c-22.879,0-41.597,18.529-41.597,41.18c0,22.652,18.718,41.182,41.597,41.182 c22.878,0,41.597-18.529,41.597-41.182C297.597,247.248,278.878,228.719,256,228.719z M380.8,269.898 c0-67.946-56.163-123.539-124.8-123.539s-124.8,55.593-124.8,123.539c0,45.303,24.961,85.447,62.396,107.072l20.807-36.032 c-24.972-14.417-41.604-40.153-41.604-71.04c0-45.295,37.433-82.358,83.201-82.358c45.771,0,83.201,37.063,83.201,82.358 c0,30.887-16.633,56.623-41.604,71.04l20.807,36.032C355.837,355.346,380.8,315.201,380.8,269.898z M256,64 C141.597,64,48,156.654,48,269.898C48,346.085,89.592,411.968,152,448l20.799-36.032c-49.919-28.824-83.207-81.324-83.207-142.069 c0-90.593,74.891-164.718,166.408-164.718c91.517,0,166.406,74.125,166.406,164.718c0,60.745-33.284,114.271-83.205,142.069L360,448 c62.406-36.032,104-101.915,104-178.102C464,156.654,370.403,64,256,64z' })
		);
	}
});