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

var Female = function (_React$Component) {
	_inherits(Female, _React$Component);

	function Female() {
		_classCallCheck(this, Female);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Female).apply(this, arguments));
	}

	_createClass(Female, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M288,284c55.2-14.2,96-64.3,96-124c0-70.7-57.3-128-128-128S128,89.3,128,160c0,59.6,40.8,109.7,96,124v68h-64v64h64v64h64 v-64h64v-64h-64V284z M256,240c-44.1,0-80-35.9-80-80s35.9-80,80-80s80,35.9,80,80S300.1,240,256,240z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M288,284c55.2-14.2,96-64.3,96-124c0-70.7-57.3-128-128-128S128,89.3,128,160c0,59.6,40.8,109.7,96,124v68h-64v64h64v64h64 v-64h64v-64h-64V284z M256,240c-44.1,0-80-35.9-80-80s35.9-80,80-80s80,35.9,80,80S300.1,240,256,240z' })
			);
		}
	}]);

	return Female;
}(_react2.default.Component);

exports.default = Female;
;Female.defaultProps = { bare: false };