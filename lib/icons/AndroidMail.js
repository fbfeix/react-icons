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

var AndroidMail = function (_React$Component) {
	_inherits(AndroidMail, _React$Component);

	function AndroidMail() {
		_classCallCheck(this, AndroidMail);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidMail).apply(this, arguments));
	}

	_createClass(AndroidMail, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_19_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M437.332,80H74.668C51.199,80,32,99.198,32,122.667v266.666C32,412.802,51.199,432,74.668,432h362.664 C460.801,432,480,412.802,480,389.333V122.667C480,99.198,460.801,80,437.332,80z M432,170.667L256,288L80,170.667V128 l176,117.333L432,128V170.667z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_19_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M437.332,80H74.668C51.199,80,32,99.198,32,122.667v266.666C32,412.802,51.199,432,74.668,432h362.664 C460.801,432,480,412.802,480,389.333V122.667C480,99.198,460.801,80,437.332,80z M432,170.667L256,288L80,170.667V128 l176,117.333L432,128V170.667z' })
					)
				)
			);
		}
	}]);

	return AndroidMail;
}(_react2.default.Component);

exports.default = AndroidMail;
;AndroidMail.defaultProps = { bare: false };