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

var RibbonB = function (_React$Component) {
	_inherits(RibbonB, _React$Component);

	function RibbonB() {
		_classCallCheck(this, RibbonB);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RibbonB).apply(this, arguments));
	}

	_createClass(RibbonB, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,72c-48.523,0-88,39.477-88,88s39.477,88,88,88s88-39.477,88-88S304.523,72,256,72z' }),
						_react2.default.createElement('path', { d: 'M256,32c-70.692,0-128,57.308-128,128s57.308,128,128,128s128-57.308,128-128S326.692,32,256,32z M256,256 c-53.02,0-96-42.98-96-96s42.98-96,96-96s96,42.98,96,96S309.02,256,256,256z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M147.092,254.21L64,400h96l48,80l48-105.807l33.641-74.154C278.848,302.623,267.585,304,256,304 C212.495,304,173.497,284.707,147.092,254.21z' }),
						_react2.default.createElement('path', { d: 'M364.908,254.211c-15.077,17.412-34.26,31.172-56.043,39.774l-44.752,98.092L304,480l48-80h96L364.908,254.211z' })
					)
				)
			);
		}
	}]);

	return RibbonB;
}(_react2.default.Component);

exports.default = RibbonB;
;