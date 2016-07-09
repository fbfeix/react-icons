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

var AndroidPrint = function (_React$Component) {
	_inherits(AndroidPrint, _React$Component);

	function AndroidPrint() {
		_classCallCheck(this, AndroidPrint);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidPrint).apply(this, arguments));
	}

	_createClass(AndroidPrint, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M399.95,160h-287.9C76.824,160,48,188.803,48,224v138.667h79.899V448h256.201v-85.333H464V224 C464,188.803,435.175,160,399.95,160z M352,416H160V288h192V416z M384.101,64H127.899v80h256.201V64z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M399.95,160h-287.9C76.824,160,48,188.803,48,224v138.667h79.899V448h256.201v-85.333H464V224 C464,188.803,435.175,160,399.95,160z M352,416H160V288h192V416z M384.101,64H127.899v80h256.201V64z' })
				)
			);
		}
	}]);

	return AndroidPrint;
}(_react2.default.Component);

exports.default = AndroidPrint;
;AndroidPrint.defaultProps = { bare: false };