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

var RibbonA = function (_React$Component) {
	_inherits(RibbonA, _React$Component);

	function RibbonA() {
		_classCallCheck(this, RibbonA);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RibbonA).apply(this, arguments));
	}

	_createClass(RibbonA, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M352,32l-82.9,176.612c39.996,3.608,75.273,23.554,99.096,53.128L432,128L352,32z' }),
					_react2.default.createElement('path', { d: 'M160,32l82.9,176.612c-39.996,3.608-75.273,23.554-99.096,53.128L80,128L160,32z' }),
					_react2.default.createElement('polygon', { points: '269.092,32 256,32 176,32 228.572,144 256,144 283.428,144 336,32 \t' }),
					_react2.default.createElement('path', { d: 'M256,224c-70.692,0-128,57.308-128,128s57.308,128,128,128s128-57.308,128-128S326.692,224,256,224z M256,448 c-53.02,0-96-42.98-96-96s42.98-96,96-96s96,42.98,96,96S309.02,448,256,448z' }),
					_react2.default.createElement('path', { d: 'M256,264c-48.523,0-88,39.477-88,88s39.477,88,88,88s88-39.477,88-88S304.523,264,256,264z' })
				)
			);
		}
	}]);

	return RibbonA;
}(_react2.default.Component);

exports.default = RibbonA;
;