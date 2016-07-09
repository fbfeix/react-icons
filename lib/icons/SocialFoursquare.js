'use strict';

var React = require('react');
var IconBase = require(__dirname + '/../components/IconBase/IconBase');

var SocialFoursquare = React.createClass({
	displayName: 'SocialFoursquare',

	render: function render() {
		return React.createElement(
			IconBase,
			null,
			React.createElement(
				'g',
				null,
				React.createElement(
					'g',
					null,
					React.createElement('path', { d: 'M376.764,32c0,0-205.353,0-238.223,0C105.666,32,96,56.798,96,72.414c0,15.627,0,379.64,0,379.64 c0,17.591,9.425,24.117,14.718,26.267c5.299,2.155,19.916,3.971,28.673-6.168c0,0,112.469-130.895,114.4-132.834 c2.921-2.93,2.921-2.93,5.844-2.93c5.844,0,49.192,0,72.767,0c30.574,0,35.49-21.869,38.684-34.752 c2.659-10.789,32.489-163.962,42.452-212.559C421.143,51.993,411.745,32,376.764,32z M371.086,301.637 c2.659-10.789,32.489-163.962,42.452-212.559 M362.692,96.67l-9.999,51.734c-1.195,5.65-8.287,11.595-14.863,11.595 c-6.575,0-95.917,0-95.917,0C231.473,160,224,166.138,224,176.602v13.448c0,10.473,7.519,17.894,17.965,17.894 c0,0,74.482,0,81.848,0c7.374,0,14.61,8.109,13.016,16.005c-1.602,7.908-9.086,46.569-9.984,50.89 c-0.902,4.328-5.845,11.725-14.611,11.725c-7.388,0-64.269,0-64.269,0c-11.705,0-15.244,1.533-23.074,11.293 c-7.837,9.77-78.256,94.592-78.256,94.592c-0.713,0.822-1.41,0.584-1.41-0.312V95.896c0-6.684,5.793-14.523,14.479-14.523 c0,0,183.713,0,191.173,0C357.912,81.372,364.488,88.004,362.692,96.67z' })
				)
			)
		);
	}
});