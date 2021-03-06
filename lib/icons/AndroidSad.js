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

var AndroidSad = function (_React$Component) {
	_inherits(AndroidSad, _React$Component);

	function AndroidSad() {
		_classCallCheck(this, AndroidSad);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidSad).apply(this, arguments));
	}

	_createClass(AndroidSad, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,288c-45.443,0-83.675,26.076-102.205,64h204.41C339.675,314.076,301.443,288,256,288z' }),
						_react2.default.createElement('path', { d: 'M256,48C140.563,48,48,141.6,48,256c0,114.4,92.563,208,208,208s208-93.6,208-208C464,141.6,370.401,48,256,48z M256,422.4 c-91.518,0-166.404-74.883-166.404-166.4c0-91.518,74.887-166.4,166.404-166.4S422.404,164.482,422.404,256 C422.404,347.518,347.518,422.4,256,422.4z' }),
						_react2.default.createElement('path', { d: 'M328.8,235.2c17.683,0,31.201-13.518,31.201-31.2s-13.519-31.2-31.201-31.2c-17.682,0-31.2,13.518-31.2,31.2 S311.118,235.2,328.8,235.2z' }),
						_react2.default.createElement('path', { d: 'M183.2,235.2c17.682,0,31.2-13.518,31.2-31.2s-13.519-31.2-31.2-31.2c-17.683,0-31.201,13.518-31.201,31.2 S165.518,235.2,183.2,235.2z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,288c-45.443,0-83.675,26.076-102.205,64h204.41C339.675,314.076,301.443,288,256,288z' }),
					_react2.default.createElement('path', { d: 'M256,48C140.563,48,48,141.6,48,256c0,114.4,92.563,208,208,208s208-93.6,208-208C464,141.6,370.401,48,256,48z M256,422.4 c-91.518,0-166.404-74.883-166.404-166.4c0-91.518,74.887-166.4,166.404-166.4S422.404,164.482,422.404,256 C422.404,347.518,347.518,422.4,256,422.4z' }),
					_react2.default.createElement('path', { d: 'M328.8,235.2c17.683,0,31.201-13.518,31.201-31.2s-13.519-31.2-31.201-31.2c-17.682,0-31.2,13.518-31.2,31.2 S311.118,235.2,328.8,235.2z' }),
					_react2.default.createElement('path', { d: 'M183.2,235.2c17.682,0,31.2-13.518,31.2-31.2s-13.519-31.2-31.2-31.2c-17.683,0-31.201,13.518-31.201,31.2 S165.518,235.2,183.2,235.2z' })
				)
			);
		}
	}]);

	return AndroidSad;
}(_react2.default.Component);

exports.default = AndroidSad;
;AndroidSad.defaultProps = { bare: false };