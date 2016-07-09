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

var AndroidHappy = function (_React$Component) {
	_inherits(AndroidHappy, _React$Component);

	function AndroidHappy() {
		_classCallCheck(this, AndroidHappy);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidHappy).apply(this, arguments));
	}

	_createClass(AndroidHappy, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48C140.563,48,48,141.6,48,256c0,114.4,92.563,208,208,208s208-93.6,208-208C464,141.6,370.401,48,256,48z M256,422.4 c-91.518,0-166.404-74.883-166.404-166.4c0-91.518,74.887-166.4,166.404-166.4S422.404,164.482,422.404,256 C422.404,347.518,347.518,422.4,256,422.4z M328.8,235.2c17.683,0,31.201-13.518,31.201-31.2s-13.519-31.2-31.201-31.2 c-17.682,0-31.2,13.518-31.2,31.2S311.118,235.2,328.8,235.2z M183.2,235.2c17.682,0,31.2-13.518,31.2-31.2s-13.519-31.2-31.2-31.2 c-17.683,0-31.201,13.518-31.201,31.2S165.518,235.2,183.2,235.2z M256,370.4c48.883,0,89.436-30.164,106.081-72.801H149.919 C166.564,340.236,207.117,370.4,256,370.4z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,48C140.563,48,48,141.6,48,256c0,114.4,92.563,208,208,208s208-93.6,208-208C464,141.6,370.401,48,256,48z M256,422.4 c-91.518,0-166.404-74.883-166.404-166.4c0-91.518,74.887-166.4,166.404-166.4S422.404,164.482,422.404,256 C422.404,347.518,347.518,422.4,256,422.4z M328.8,235.2c17.683,0,31.201-13.518,31.201-31.2s-13.519-31.2-31.201-31.2 c-17.682,0-31.2,13.518-31.2,31.2S311.118,235.2,328.8,235.2z M183.2,235.2c17.682,0,31.2-13.518,31.2-31.2s-13.519-31.2-31.2-31.2 c-17.683,0-31.201,13.518-31.201,31.2S165.518,235.2,183.2,235.2z M256,370.4c48.883,0,89.436-30.164,106.081-72.801H149.919 C166.564,340.236,207.117,370.4,256,370.4z' })
			);
		}
	}]);

	return AndroidHappy;
}(_react2.default.Component);

exports.default = AndroidHappy;
;AndroidHappy.defaultProps = { bare: false };