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

var AndroidCancel = function (_React$Component) {
	_inherits(AndroidCancel, _React$Component);

	function AndroidCancel() {
		_classCallCheck(this, AndroidCancel);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCancel).apply(this, arguments));
	}

	_createClass(AndroidCancel, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,48C140.559,48,48,140.559,48,256c0,115.436,92.559,208,208,208c115.435,0,208-92.564,208-208 C464,140.559,371.436,48,256,48z M360.002,330.881l-29.12,29.117L256,285.117l-74.881,74.881l-29.121-29.117L226.881,256 l-74.883-74.881l29.121-29.116L256,226.881l74.881-74.878l29.12,29.116L285.119,256L360.002,330.881z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48C140.559,48,48,140.559,48,256c0,115.436,92.559,208,208,208c115.435,0,208-92.564,208-208 C464,140.559,371.436,48,256,48z M360.002,330.881l-29.12,29.117L256,285.117l-74.881,74.881l-29.121-29.117L226.881,256 l-74.883-74.881l29.121-29.116L256,226.881l74.881-74.878l29.12,29.116L285.119,256L360.002,330.881z' })
				)
			);
		}
	}]);

	return AndroidCancel;
}(_react2.default.Component);

exports.default = AndroidCancel;
;AndroidCancel.defaultProps = { bare: false };