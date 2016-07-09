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

var IosPricetagOutline = function (_React$Component) {
	_inherits(IosPricetagOutline, _React$Component);

	function IosPricetagOutline() {
		_classCallCheck(this, IosPricetagOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPricetagOutline).apply(this, arguments));
	}

	_createClass(IosPricetagOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M464,32H304L48,320l160,160l256-288V32z M448,184L208.125,456L72.062,320L311.587,48H448V184z' }),
						_react2.default.createElement('path', { d: 'M368,160c17.645,0,32-14.355,32-32s-14.355-32-32-32s-32,14.355-32,32S350.355,160,368,160z M368,112 c8.836,0,16,7.163,16,16s-7.164,16-16,16s-16-7.163-16-16S359.164,112,368,112z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M464,32H304L48,320l160,160l256-288V32z M448,184L208.125,456L72.062,320L311.587,48H448V184z' }),
					_react2.default.createElement('path', { d: 'M368,160c17.645,0,32-14.355,32-32s-14.355-32-32-32s-32,14.355-32,32S350.355,160,368,160z M368,112 c8.836,0,16,7.163,16,16s-7.164,16-16,16s-16-7.163-16-16S359.164,112,368,112z' })
				)
			);
		}
	}]);

	return IosPricetagOutline;
}(_react2.default.Component);

exports.default = IosPricetagOutline;
;IosPricetagOutline.defaultProps = { bare: false };