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

var IosHeart = function (_React$Component) {
	_inherits(IosHeart, _React$Component);

	function IosHeart() {
		_classCallCheck(this, IosHeart);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosHeart).apply(this, arguments));
	}

	_createClass(IosHeart, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M359.385,80C319.966,80,277.171,97.599,256,132.8C234.83,97.599,192.034,80,152.615,80C83.647,80,32,123.238,32,195.779 c0,31.288,12.562,71.924,40.923,105.657c28.359,33.735,45.229,51.7,100.153,88C228,425.738,256,432,256,432s28-6.262,82.924-42.564 c54.923-36.3,71.794-54.265,100.153-88C467.438,267.703,480,227.067,480,195.779C480,123.238,428.353,80,359.385,80z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M359.385,80C319.966,80,277.171,97.599,256,132.8C234.83,97.599,192.034,80,152.615,80C83.647,80,32,123.238,32,195.779 c0,31.288,12.562,71.924,40.923,105.657c28.359,33.735,45.229,51.7,100.153,88C228,425.738,256,432,256,432s28-6.262,82.924-42.564 c54.923-36.3,71.794-54.265,100.153-88C467.438,267.703,480,227.067,480,195.779C480,123.238,428.353,80,359.385,80z' })
			);
		}
	}]);

	return IosHeart;
}(_react2.default.Component);

exports.default = IosHeart;
;IosHeart.defaultProps = { bare: false };