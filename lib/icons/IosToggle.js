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

var IosToggle = function (_React$Component) {
	_inherits(IosToggle, _React$Component);

	function IosToggle() {
		_classCallCheck(this, IosToggle);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosToggle).apply(this, arguments));
	}

	_createClass(IosToggle, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M128,320c-26.467,0-48,21.533-48,48s21.533,48,48,48s48-21.533,48-48S154.467,320,128,320z' }),
						_react2.default.createElement('path', { d: 'M383.5,272h-255C75.205,272,32,315.205,32,368.5S75.205,464,128.5,464h255c53.295,0,96.5-42.205,96.5-95.5 S436.795,272,383.5,272z M128,432c-35.346,0-64-28.653-64-64c0-35.346,28.654-64,64-64s64,28.654,64,64 C192,403.347,163.346,432,128,432z' }),
						_react2.default.createElement('path', { d: 'M384,192c26.467,0,48-21.533,48-48s-21.533-48-48-48s-48,21.533-48,48S357.533,192,384,192z' }),
						_react2.default.createElement('path', { d: 'M128.5,240h255c53.295,0,96.5-42.205,96.5-95.5S436.795,48,383.5,48h-255C75.205,48,32,91.205,32,144.5 S75.205,240,128.5,240z M384,80c35.346,0,64,28.654,64,64c0,35.347-28.654,64-64,64s-64-28.653-64-64 C320,108.654,348.654,80,384,80z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M128,320c-26.467,0-48,21.533-48,48s21.533,48,48,48s48-21.533,48-48S154.467,320,128,320z' }),
					_react2.default.createElement('path', { d: 'M383.5,272h-255C75.205,272,32,315.205,32,368.5S75.205,464,128.5,464h255c53.295,0,96.5-42.205,96.5-95.5 S436.795,272,383.5,272z M128,432c-35.346,0-64-28.653-64-64c0-35.346,28.654-64,64-64s64,28.654,64,64 C192,403.347,163.346,432,128,432z' }),
					_react2.default.createElement('path', { d: 'M384,192c26.467,0,48-21.533,48-48s-21.533-48-48-48s-48,21.533-48,48S357.533,192,384,192z' }),
					_react2.default.createElement('path', { d: 'M128.5,240h255c53.295,0,96.5-42.205,96.5-95.5S436.795,48,383.5,48h-255C75.205,48,32,91.205,32,144.5 S75.205,240,128.5,240z M384,80c35.346,0,64,28.654,64,64c0,35.347-28.654,64-64,64s-64-28.653-64-64 C320,108.654,348.654,80,384,80z' })
				)
			);
		}
	}]);

	return IosToggle;
}(_react2.default.Component);

exports.default = IosToggle;
;IosToggle.defaultProps = { bare: false };