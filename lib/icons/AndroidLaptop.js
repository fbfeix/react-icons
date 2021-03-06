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

var AndroidLaptop = function (_React$Component) {
	_inherits(AndroidLaptop, _React$Component);

	function AndroidLaptop() {
		_classCallCheck(this, AndroidLaptop);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidLaptop).apply(this, arguments));
	}

	_createClass(AndroidLaptop, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_29_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M437.334,416C460.803,416,480,396.803,480,373.334V106.668C480,83.199,460.803,64,437.334,64H74.666 C51.197,64,32,83.199,32,106.668v266.666C32,396.803,51.197,416,74.666,416H0c0,23.469,64,32,96,32h320c32,0,96-8.531,96-32 H437.334z M74.666,106.668h362.668v271.998H74.666V106.668z M256,434.666c-11.729,0-21.333-9.604-21.333-21.334 c0-11.729,9.604-21.332,21.333-21.332s21.333,9.604,21.333,21.332C277.333,425.062,267.729,434.666,256,434.666z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_29_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M437.334,416C460.803,416,480,396.803,480,373.334V106.668C480,83.199,460.803,64,437.334,64H74.666 C51.197,64,32,83.199,32,106.668v266.666C32,396.803,51.197,416,74.666,416H0c0,23.469,64,32,96,32h320c32,0,96-8.531,96-32 H437.334z M74.666,106.668h362.668v271.998H74.666V106.668z M256,434.666c-11.729,0-21.333-9.604-21.333-21.334 c0-11.729,9.604-21.332,21.333-21.332s21.333,9.604,21.333,21.332C277.333,425.062,267.729,434.666,256,434.666z' })
					)
				)
			);
		}
	}]);

	return AndroidLaptop;
}(_react2.default.Component);

exports.default = AndroidLaptop;
;AndroidLaptop.defaultProps = { bare: false };