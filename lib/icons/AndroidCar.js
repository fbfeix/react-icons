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

var AndroidCar = function (_React$Component) {
	_inherits(AndroidCar, _React$Component);

	function AndroidCar() {
		_classCallCheck(this, AndroidCar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCar).apply(this, arguments));
	}

	_createClass(AndroidCar, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_15_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M403.208,117.333c-4.271-12.802-16-21.333-29.875-21.333H138.667c-13.875,0-25.604,8.531-29.875,21.333L64,234.667v160 C64,406.396,73.604,416,85.333,416h21.334c11.729,0,21.333-9.604,21.333-21.333V384h256v10.667 c0,11.729,9.604,21.333,21.333,21.333h21.334c11.729,0,21.333-9.604,21.333-21.333v-160L403.208,117.333z M138.667,320 c-18.125,0-32-13.865-32-32s13.875-32,32-32s32,13.866,32,32S156.792,320,138.667,320z M373.333,320c-18.125,0-32-13.865-32-32 s13.875-32,32-32s32,13.866,32,32S391.458,320,373.333,320z M106.667,213.333l32-85.333h234.666l32,85.333H106.667z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_15_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M403.208,117.333c-4.271-12.802-16-21.333-29.875-21.333H138.667c-13.875,0-25.604,8.531-29.875,21.333L64,234.667v160 C64,406.396,73.604,416,85.333,416h21.334c11.729,0,21.333-9.604,21.333-21.333V384h256v10.667 c0,11.729,9.604,21.333,21.333,21.333h21.334c11.729,0,21.333-9.604,21.333-21.333v-160L403.208,117.333z M138.667,320 c-18.125,0-32-13.865-32-32s13.875-32,32-32s32,13.866,32,32S156.792,320,138.667,320z M373.333,320c-18.125,0-32-13.865-32-32 s13.875-32,32-32s32,13.866,32,32S391.458,320,373.333,320z M106.667,213.333l32-85.333h234.666l32,85.333H106.667z' })
					)
				)
			);
		}
	}]);

	return AndroidCar;
}(_react2.default.Component);

exports.default = AndroidCar;
;AndroidCar.defaultProps = { bare: false };