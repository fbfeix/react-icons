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

var IosWineglass = function (_React$Component) {
	_inherits(IosWineglass, _React$Component);

	function IosWineglass() {
		_classCallCheck(this, IosWineglass);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosWineglass).apply(this, arguments));
	}

	_createClass(IosWineglass, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M264,308.988c0-21.975,20.458-38.674,40.247-54.824c7.907-6.453,15.37-12.547,21.519-18.962 C352.313,207.505,352,183.458,352,164.144V160c0-44.25-30.816-124.558-32.02-128H256h-64c-1.203,3.442-32,83.5-32,128v4.144 c0,19.273-0.323,43.361,26.225,71.059c6.148,6.415,13.617,12.509,21.523,18.962c19.789,16.15,40.252,32.85,40.252,54.824V464h-72v16 h80h80v-16h-72V308.988z M202.729,48H256h53.251c5.359,15.99,19.509,62.712,24.836,96H177.894 C183.221,110.712,197.37,63.99,202.729,48z' })
			);
		}
	}]);

	return IosWineglass;
}(_react2.default.Component);

exports.default = IosWineglass;
;