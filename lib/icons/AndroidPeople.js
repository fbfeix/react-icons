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

var AndroidPeople = function (_React$Component) {
	_inherits(AndroidPeople, _React$Component);

	function AndroidPeople() {
		_classCallCheck(this, AndroidPeople);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidPeople).apply(this, arguments));
	}

	_createClass(AndroidPeople, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M337.454,232c33.599,0,61.092-27.002,61.092-60c0-32.997-27.493-60-61.092-60s-61.09,27.003-61.09,60 C276.364,204.998,303.855,232,337.454,232z M174.546,232c33.599,0,61.09-27.002,61.09-60c0-32.997-27.491-60-61.09-60 s-61.092,27.003-61.092,60C113.454,204.998,140.947,232,174.546,232z M174.546,276C126.688,276,32,298.998,32,346v54h288v-54 C320,298.998,222.401,276,174.546,276z M337.454,287.003c-6.105,0-10.325,0-17.454,0.997c23.426,17.002,32,28,32,58v54h128v-54 C480,298.998,385.312,287.003,337.454,287.003z' })
			);
		}
	}]);

	return AndroidPeople;
}(_react2.default.Component);

exports.default = AndroidPeople;
;