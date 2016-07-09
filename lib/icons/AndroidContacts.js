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

var AndroidContacts = function (_React$Component) {
	_inherits(AndroidContacts, _React$Component);

	function AndroidContacts() {
		_classCallCheck(this, AndroidContacts);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidContacts).apply(this, arguments));
	}

	_createClass(AndroidContacts, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M239.208,343.937c-17.78,10.103-38.342,15.876-60.255,15.876c-21.909,0-42.467-5.771-60.246-15.87 C71.544,358.331,42.643,406,32,448h293.912C315.273,406,286.375,358.317,239.208,343.937z' }),
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M178.953,120.035c-58.479,0-105.886,47.394-105.886,105.858c0,58.464,47.407,105.857,105.886,105.857 c58.479,0,105.886-47.394,105.886-105.857C284.839,167.429,237.431,120.035,178.953,120.035z M178.953,306.523 c-33.671,0-62.445-22.513-73.997-50.523H252.95C241.396,284.011,212.624,306.523,178.953,306.523z' })
							)
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M322.602,384H480c-10.638-42-39.537-81.691-86.703-96.072c-17.781,10.104-38.343,15.873-60.256,15.873 c-14.823,0-29.024-2.654-42.168-7.49c-7.445,12.47-16.927,25.592-27.974,34.906C289.245,341.354,309.146,364,322.602,384z' })
							),
							_react2.default.createElement('path', { d: 'M306.545,200h100.493c-11.554,28-40.327,50.293-73.997,50.293c-8.875,0-17.404-1.692-25.375-4.51 c-1.338,8.709-3.543,17.07-6.52,25.118c10.066,3.174,20.779,4.862,31.895,4.862c58.479,0,105.886-47.41,105.886-105.872 c0-58.465-47.407-105.866-105.886-105.866c-37.49,0-70.427,19.703-89.243,49.09C275.607,131.383,298.961,163,306.545,200z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M239.208,343.937c-17.78,10.103-38.342,15.876-60.255,15.876c-21.909,0-42.467-5.771-60.246-15.87 C71.544,358.331,42.643,406,32,448h293.912C315.273,406,286.375,358.317,239.208,343.937z' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M178.953,120.035c-58.479,0-105.886,47.394-105.886,105.858c0,58.464,47.407,105.857,105.886,105.857 c58.479,0,105.886-47.394,105.886-105.857C284.839,167.429,237.431,120.035,178.953,120.035z M178.953,306.523 c-33.671,0-62.445-22.513-73.997-50.523H252.95C241.396,284.011,212.624,306.523,178.953,306.523z' })
						)
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M322.602,384H480c-10.638-42-39.537-81.691-86.703-96.072c-17.781,10.104-38.343,15.873-60.256,15.873 c-14.823,0-29.024-2.654-42.168-7.49c-7.445,12.47-16.927,25.592-27.974,34.906C289.245,341.354,309.146,364,322.602,384z' })
						),
						_react2.default.createElement('path', { d: 'M306.545,200h100.493c-11.554,28-40.327,50.293-73.997,50.293c-8.875,0-17.404-1.692-25.375-4.51 c-1.338,8.709-3.543,17.07-6.52,25.118c10.066,3.174,20.779,4.862,31.895,4.862c58.479,0,105.886-47.41,105.886-105.872 c0-58.465-47.407-105.866-105.886-105.866c-37.49,0-70.427,19.703-89.243,49.09C275.607,131.383,298.961,163,306.545,200z' })
					)
				)
			);
		}
	}]);

	return AndroidContacts;
}(_react2.default.Component);

exports.default = AndroidContacts;
;AndroidContacts.defaultProps = { bare: false };