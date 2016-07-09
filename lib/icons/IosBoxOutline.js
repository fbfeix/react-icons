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

var IosBoxOutline = function (_React$Component) {
	_inherits(IosBoxOutline, _React$Component);

	function IosBoxOutline() {
		_classCallCheck(this, IosBoxOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBoxOutline).apply(this, arguments));
	}

	_createClass(IosBoxOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M287.8,240c8.8,0,16.1,7.2,16.1,16s-7,16-15.9,16h-64c-8.8,0-16-7.2-16-16s7.2-16,16-16h63 M288,224h-64 c-17.6,0-32,14.4-32,32s14.4,32,32,32h64c17.6,0,32-14.4,32-32S305.6,224,288,224L288,224z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M416,112H96v80h16v208h288V192h16V112z M384,384H128V192h256V384z M400,176H112v-48h288V176z' })
					)
				)
			);
		}
	}]);

	return IosBoxOutline;
}(_react2.default.Component);

exports.default = IosBoxOutline;
;