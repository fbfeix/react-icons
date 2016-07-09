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

var Flame = function (_React$Component) {
	_inherits(Flame, _React$Component);

	function Flame() {
		_classCallCheck(this, Flame);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Flame).apply(this, arguments));
	}

	_createClass(Flame, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M128.922,320c13.05,134,103.764,160,126.932,160c23.168,0,127.457-40.49,128.142-160c0.836-146-121.586-143-95.895-288 C201.427,96,118.289,210.816,128.922,320z M215.667,368c0-44.183,40.187-80,40.187-80s40.701,35.817,40.701,80 c0,44.184-40.701,80-40.701,80S215.667,412.184,215.667,368z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M128.922,320c13.05,134,103.764,160,126.932,160c23.168,0,127.457-40.49,128.142-160c0.836-146-121.586-143-95.895-288 C201.427,96,118.289,210.816,128.922,320z M215.667,368c0-44.183,40.187-80,40.187-80s40.701,35.817,40.701,80 c0,44.184-40.701,80-40.701,80S215.667,412.184,215.667,368z' })
				)
			);
		}
	}]);

	return Flame;
}(_react2.default.Component);

exports.default = Flame;
;Flame.defaultProps = { bare: false };