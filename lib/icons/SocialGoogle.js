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

var SocialGoogle = function (_React$Component) {
	_inherits(SocialGoogle, _React$Component);

	function SocialGoogle() {
		_classCallCheck(this, SocialGoogle);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialGoogle).apply(this, arguments));
	}

	_createClass(SocialGoogle, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M325.862,275.558l-18.187-13.653l-0.063-0.051c-5.827-4.579-9.952-8.313-9.952-14.685c0-6.979,5.049-11.824,10.896-17.436 l0.466-0.449c20.025-15.171,44.726-34.286,44.726-74.556c0-26.934-11.916-44.729-23.28-57.729h12.969l60.322-33H270.308 c-25.324,0-62.68,3.225-94.561,28.576l-0.128,0.25c-21.809,18.111-34.828,44.584-34.828,70.691 c0,21.197,8.706,42.159,23.885,57.447c21.428,21.579,48.302,26.127,67.074,26.127c1.462,0,2.956-0.028,4.47-0.093 c-0.759,2.969-1.25,6.321-1.25,10.321c0,10.926,3.628,19.301,8.083,26.195c-23.963,1.932-58.148,6.477-84.897,22.278 c-39.335,22.562-42.396,55.875-42.396,65.551c0,38.207,35.707,76.762,115.479,76.762c91.611,0,139.543-49.792,139.543-98.979 C370.781,311.966,347.945,293.457,325.862,275.558z M200.485,139.894c0-13.359,3.02-23.457,9.255-30.9 c6.514-7.852,18.18-13.129,29.028-13.129c19.881,0,32.938,15.008,40.388,27.598c9.199,15.539,14.913,36.095,14.913,53.643 c0,4.942,0,19.983-10.188,29.796c-6.951,6.686-18.707,11.353-28.59,11.353c-20.503,0-33.453-14.705-40.707-27.041 C204.189,173.53,200.485,153.109,200.485,139.894z M321.6,367.974c0,27.444-25.212,44.493-65.799,44.493 c-48.058,0-80.347-20.603-80.347-51.265c0-26.14,21.54-36.789,37.8-42.521c18.944-6.064,44.297-7.305,50.062-7.305 c3.907,0,6.087,0,8.683,0.229C308.7,336.816,321.6,347.733,321.6,367.974z' })
				)
			);
		}
	}]);

	return SocialGoogle;
}(_react2.default.Component);

exports.default = SocialGoogle;
;