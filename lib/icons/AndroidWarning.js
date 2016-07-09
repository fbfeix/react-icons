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

var AndroidWarning = function (_React$Component) {
	_inherits(AndroidWarning, _React$Component);

	function AndroidWarning() {
		_classCallCheck(this, AndroidWarning);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidWarning).apply(this, arguments));
	}

	_createClass(AndroidWarning, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_31_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M32,464h448L256,48L32,464z M280,400h-48v-48h48V400z M280,320h-48v-96h48V320z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_31_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M32,464h448L256,48L32,464z M280,400h-48v-48h48V400z M280,320h-48v-96h48V320z' })
					)
				)
			);
		}
	}]);

	return AndroidWarning;
}(_react2.default.Component);

exports.default = AndroidWarning;
;AndroidWarning.defaultProps = { bare: false };