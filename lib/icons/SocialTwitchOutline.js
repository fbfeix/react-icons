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

var SocialTwitchOutline = function (_React$Component) {
	_inherits(SocialTwitchOutline, _React$Component);

	function SocialTwitchOutline() {
		_classCallCheck(this, SocialTwitchOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialTwitchOutline).apply(this, arguments));
	}

	_createClass(SocialTwitchOutline, [{
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
							_react2.default.createElement('path', { d: 'M80,32l-32,80v304h96v64h64l64-64h80l112-112V32H80z M416,288l-64,64h-96.001L192,416v-64h-80V80h304V288z' })
						),
						_react2.default.createElement('rect', { x: '320', y: '143', width: '48', height: '129' }),
						_react2.default.createElement('rect', { x: '208', y: '143', width: '48', height: '129' })
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
						_react2.default.createElement('path', { d: 'M80,32l-32,80v304h96v64h64l64-64h80l112-112V32H80z M416,288l-64,64h-96.001L192,416v-64h-80V80h304V288z' })
					),
					_react2.default.createElement('rect', { x: '320', y: '143', width: '48', height: '129' }),
					_react2.default.createElement('rect', { x: '208', y: '143', width: '48', height: '129' })
				)
			);
		}
	}]);

	return SocialTwitchOutline;
}(_react2.default.Component);

exports.default = SocialTwitchOutline;
;SocialTwitchOutline.defaultProps = { bare: false };