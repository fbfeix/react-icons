'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./../components/IconBase/IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocialFoursquareOutline = function (_React$Component) {
	_inherits(SocialFoursquareOutline, _React$Component);

	function SocialFoursquareOutline() {
		_classCallCheck(this, SocialFoursquareOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialFoursquareOutline).apply(this, arguments));
	}

	_createClass(SocialFoursquareOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M398.484,164.452l-27.399,137.185C372.848,294.486,386.545,224.793,398.484,164.452z' }),
						_react2.default.createElement('path', { d: 'M376.764,32c0,0-205.353,0-238.223,0C105.666,32,96,56.798,96,72.414c0,15.627,0,379.64,0,379.64 c0,17.591,9.425,24.117,14.718,26.267c5.299,2.155,19.916,3.971,28.673-6.168c0,0,112.469-131.09,114.4-133.027 c2.921-2.931,2.921-3.125,5.844-3.125c5.843,0,49.192,0,72.766,0c30.575,0,35.49-21.676,38.684-34.559l27.399-137.087 c6.074-30.702,11.693-58.938,15.053-75.325C421.143,51.944,411.744,32,376.764,32z M376.426,96c0,0-31.575,156.209-36.034,176.834 C335,297.771,332.75,304,307,304c-17.605,0-62.375,0-62.375,0c-2.747,0-3.868-0.147-6.049,2.041 c-1.443,1.447-78.168,89.562-78.168,89.562c-19.034,23.396-26.909,31.795-29.033,31.795s-3.375,0-3.375-38.408V91.708 C128,67.034,128.3,64,157.198,64C181.748,64,352,64,352,64C382,64,382.834,64.833,376.426,96z' }),
						_react2.default.createElement('path', { d: 'M398.484,164.452l15.053-75.374C410.178,105.466,404.559,133.75,398.484,164.452z' }),
						_react2.default.createElement('path', { d: 'M328.573,96c-5.571,0-157.995,0-157.995,0C164.091,96,160,101.594,160,106.586v231.255c0,0.67,0.402,0.975,0.935,0.36 c0,0,48.202-55.725,54.056-63.021c5.848-7.289,8.491-8.182,17.233-8.182c0,0,56.695,0,62.212,0c6.549,0,10.24-5.75,10.913-8.982 c0.671-3.228,10.536-48.213,11.732-54.119c1.191-5.897-4.214-11.898-9.722-11.898c-5.5,0-64.805,0-64.805,0 c-7.803,0-7.554-5.653-7.554-13.476v-5.512c0-7.815-0.282-13.012,7.516-13.012c0,0,70.403,0,75.313,0 c4.911,0,10.208-4.442,11.102-8.662l8.468-44.042C338.739,100.823,333.828,96,328.573,96z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M398.484,164.452l-27.399,137.185C372.848,294.486,386.545,224.793,398.484,164.452z' }),
					_react2.default.createElement('path', { d: 'M376.764,32c0,0-205.353,0-238.223,0C105.666,32,96,56.798,96,72.414c0,15.627,0,379.64,0,379.64 c0,17.591,9.425,24.117,14.718,26.267c5.299,2.155,19.916,3.971,28.673-6.168c0,0,112.469-131.09,114.4-133.027 c2.921-2.931,2.921-3.125,5.844-3.125c5.843,0,49.192,0,72.766,0c30.575,0,35.49-21.676,38.684-34.559l27.399-137.087 c6.074-30.702,11.693-58.938,15.053-75.325C421.143,51.944,411.744,32,376.764,32z M376.426,96c0,0-31.575,156.209-36.034,176.834 C335,297.771,332.75,304,307,304c-17.605,0-62.375,0-62.375,0c-2.747,0-3.868-0.147-6.049,2.041 c-1.443,1.447-78.168,89.562-78.168,89.562c-19.034,23.396-26.909,31.795-29.033,31.795s-3.375,0-3.375-38.408V91.708 C128,67.034,128.3,64,157.198,64C181.748,64,352,64,352,64C382,64,382.834,64.833,376.426,96z' }),
					_react2.default.createElement('path', { d: 'M398.484,164.452l15.053-75.374C410.178,105.466,404.559,133.75,398.484,164.452z' }),
					_react2.default.createElement('path', { d: 'M328.573,96c-5.571,0-157.995,0-157.995,0C164.091,96,160,101.594,160,106.586v231.255c0,0.67,0.402,0.975,0.935,0.36 c0,0,48.202-55.725,54.056-63.021c5.848-7.289,8.491-8.182,17.233-8.182c0,0,56.695,0,62.212,0c6.549,0,10.24-5.75,10.913-8.982 c0.671-3.228,10.536-48.213,11.732-54.119c1.191-5.897-4.214-11.898-9.722-11.898c-5.5,0-64.805,0-64.805,0 c-7.803,0-7.554-5.653-7.554-13.476v-5.512c0-7.815-0.282-13.012,7.516-13.012c0,0,70.403,0,75.313,0 c4.911,0,10.208-4.442,11.102-8.662l8.468-44.042C338.739,100.823,333.828,96,328.573,96z' })
				)
			);
		}
	}]);

	return SocialFoursquareOutline;
}(_react2.default.Component);

exports.default = SocialFoursquareOutline;
;SocialFoursquareOutline.defaultProps = { bare: false };