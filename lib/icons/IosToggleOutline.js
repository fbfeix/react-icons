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

var IosToggleOutline = function (_React$Component) {
	_inherits(IosToggleOutline, _React$Component);

	function IosToggleOutline() {
		_classCallCheck(this, IosToggleOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosToggleOutline).apply(this, arguments));
	}

	_createClass(IosToggleOutline, [{
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
							_react2.default.createElement('path', { d: 'M128,320c26.467,0,48,21.533,48,48s-21.533,48-48,48s-48-21.533-48-48S101.533,320,128,320 M128,304 c-35.346,0-64,28.654-64,64c0,35.347,28.654,64,64,64s64-28.653,64-64C192,332.654,163.346,304,128,304L128,304z' }),
							_react2.default.createElement('path', { d: 'M383.25,288c44.388,0,80.625,36.112,80.625,80.5S427.888,448,383.5,448h-255C84.112,448,48,412.888,48,368.5 S84.112,288,128.5,288H383 M383.5,272h-255C75.205,272,32,315.205,32,368.5S75.205,464,128.5,464h255 c53.295,0,96.5-42.205,96.5-95.5S436.795,272,383.5,272L383.5,272z' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M384,96c26.467,0,48,21.533,48,48s-21.533,48-48,48s-48-21.533-48-48S357.533,96,384,96 M384,80 c-35.346,0-64,28.654-64,64c0,35.347,28.654,64,64,64s64-28.653,64-64C448,108.654,419.346,80,384,80L384,80z' }),
							_react2.default.createElement('path', { d: 'M129,64h254.5c44.388,0,80.5,36.112,80.5,80.5S427.888,224,383.5,224h-255c-44.388,0-80.375-35.112-80.375-79.5 S84.362,64,128.75,64 M128.5,48C75.205,48,32,91.205,32,144.5S75.205,240,128.5,240h255c53.295,0,96.5-42.205,96.5-95.5 S436.795,48,383.5,48H128.5L128.5,48z' })
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
						_react2.default.createElement('path', { d: 'M128,320c26.467,0,48,21.533,48,48s-21.533,48-48,48s-48-21.533-48-48S101.533,320,128,320 M128,304 c-35.346,0-64,28.654-64,64c0,35.347,28.654,64,64,64s64-28.653,64-64C192,332.654,163.346,304,128,304L128,304z' }),
						_react2.default.createElement('path', { d: 'M383.25,288c44.388,0,80.625,36.112,80.625,80.5S427.888,448,383.5,448h-255C84.112,448,48,412.888,48,368.5 S84.112,288,128.5,288H383 M383.5,272h-255C75.205,272,32,315.205,32,368.5S75.205,464,128.5,464h255 c53.295,0,96.5-42.205,96.5-95.5S436.795,272,383.5,272L383.5,272z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M384,96c26.467,0,48,21.533,48,48s-21.533,48-48,48s-48-21.533-48-48S357.533,96,384,96 M384,80 c-35.346,0-64,28.654-64,64c0,35.347,28.654,64,64,64s64-28.653,64-64C448,108.654,419.346,80,384,80L384,80z' }),
						_react2.default.createElement('path', { d: 'M129,64h254.5c44.388,0,80.5,36.112,80.5,80.5S427.888,224,383.5,224h-255c-44.388,0-80.375-35.112-80.375-79.5 S84.362,64,128.75,64 M128.5,48C75.205,48,32,91.205,32,144.5S75.205,240,128.5,240h255c53.295,0,96.5-42.205,96.5-95.5 S436.795,48,383.5,48H128.5L128.5,48z' })
					)
				)
			);
		}
	}]);

	return IosToggleOutline;
}(_react2.default.Component);

exports.default = IosToggleOutline;
;IosToggleOutline.defaultProps = { bare: false };