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

var IosPricetags = function (_React$Component) {
	_inherits(IosPricetags, _React$Component);

	function IosPricetags() {
		_classCallCheck(this, IosPricetags);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPricetags).apply(this, arguments));
	}

	_createClass(IosPricetags, [{
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
							_react2.default.createElement('polygon', { points: '464,64 464,201.377 227.153,467.48 240,480 480,208 480,64 \t\t' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M288,32L32,320l160,160l23.471-23.904l11.348-11.375L448,192V80V64V32H288z M352,160c-17.645,0-32-14.355-32-32 s14.355-32,32-32s32,14.355,32,32S369.645,160,352,160z' }),
							_react2.default.createElement('circle', { cx: '352', cy: '128', r: '16' })
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
						_react2.default.createElement('polygon', { points: '464,64 464,201.377 227.153,467.48 240,480 480,208 480,64 \t\t' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M288,32L32,320l160,160l23.471-23.904l11.348-11.375L448,192V80V64V32H288z M352,160c-17.645,0-32-14.355-32-32 s14.355-32,32-32s32,14.355,32,32S369.645,160,352,160z' }),
						_react2.default.createElement('circle', { cx: '352', cy: '128', r: '16' })
					)
				)
			);
		}
	}]);

	return IosPricetags;
}(_react2.default.Component);

exports.default = IosPricetags;
;IosPricetags.defaultProps = { bare: false };