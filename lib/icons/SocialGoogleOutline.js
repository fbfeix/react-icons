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

var SocialGoogleOutline = function (_React$Component) {
	_inherits(SocialGoogleOutline, _React$Component);

	function SocialGoogleOutline() {
		_classCallCheck(this, SocialGoogleOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialGoogleOutline).apply(this, arguments));
	}

	_createClass(SocialGoogleOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M319.408,82.141c11.779,9.576,36.43,29.718,36.43,68.043c0,37.295-21.547,54.934-43.094,71.545 c-6.695,6.561-14.385,13.608-14.385,24.701c0,11.092,7.689,17.153,13.336,21.671l18.473,14.108 c22.598,18.641,43.125,35.795,43.125,70.559c0,47.373-46.721,95.232-135.003,95.232c-74.428,0-110.343-34.766-110.343-72.061 c0-18.139,9.245-43.827,39.525-61.48c31.798-19.142,74.952-21.657,98.023-23.172c-7.178-9.078-15.382-18.67-15.382-34.265 c0-8.577,2.557-13.609,5.12-19.655c-5.648,0.5-11.283,1-16.42,1c-54.408,0-85.214-39.811-85.214-79.107 c0-23.186,10.802-48.902,32.856-67.543C215.724,68.031,250.637,64,278.328,64h105.725l-32.846,18.141H319.408z M282.955,305.896 c-4.137-0.501-6.684-0.501-11.793-0.501c-4.629,0-32.348,1.002-53.895,8.049c-11.3,4.046-44.146,16.125-44.146,51.918 c0,35.78,35.393,61.467,90.339,61.467c49.283,0,75.432-23.156,75.432-54.404C338.893,346.707,321.971,333.113,282.955,305.896 M297.834,210.148c11.824-11.592,12.844-27.73,12.844-36.793c0-36.281-22.086-92.73-64.671-92.73 c-13.339,0-27.724,6.547-35.948,16.639c-8.722,10.593-11.284,24.188-11.284,37.281c0,33.764,20.005,89.727,64.163,89.727 C275.764,224.271,289.594,218.212,297.834,210.148' })
				)
			);
		}
	}]);

	return SocialGoogleOutline;
}(_react2.default.Component);

exports.default = SocialGoogleOutline;
;