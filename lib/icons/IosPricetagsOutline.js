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

var IosPricetagsOutline = function (_React$Component) {
	_inherits(IosPricetagsOutline, _React$Component);

	function IosPricetagsOutline() {
		_classCallCheck(this, IosPricetagsOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPricetagsOutline).apply(this, arguments));
	}

	_createClass(IosPricetagsOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M448,64V32H288L32,320l160,160l23.471-23.904L240,480l240-272V64H448z M192,457.371L54.39,320L294.621,48H432v16v16 v105.377l-216.555,247.99l-11.34,11.363L192,457.371z M464,201.377L240,457.371l-13.182-12.65L448,192V80h16V201.377z' }),
						_react2.default.createElement('path', { d: 'M352,160c17.645,0,32-14.355,32-32s-14.355-32-32-32s-32,14.355-32,32S334.355,160,352,160z M352,112 c8.836,0,16,7.163,16,16s-7.164,16-16,16s-16-7.163-16-16S343.164,112,352,112z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M448,64V32H288L32,320l160,160l23.471-23.904L240,480l240-272V64H448z M192,457.371L54.39,320L294.621,48H432v16v16 v105.377l-216.555,247.99l-11.34,11.363L192,457.371z M464,201.377L240,457.371l-13.182-12.65L448,192V80h16V201.377z' }),
					_react2.default.createElement('path', { d: 'M352,160c17.645,0,32-14.355,32-32s-14.355-32-32-32s-32,14.355-32,32S334.355,160,352,160z M352,112 c8.836,0,16,7.163,16,16s-7.164,16-16,16s-16-7.163-16-16S343.164,112,352,112z' })
				)
			);
		}
	}]);

	return IosPricetagsOutline;
}(_react2.default.Component);

exports.default = IosPricetagsOutline;
;IosPricetagsOutline.defaultProps = { bare: false };