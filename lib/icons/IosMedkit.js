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

var IosMedkit = function (_React$Component) {
	_inherits(IosMedkit, _React$Component);

	function IosMedkit() {
		_classCallCheck(this, IosMedkit);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosMedkit).apply(this, arguments));
	}

	_createClass(IosMedkit, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '272,272 272,256 272,208 240,208 240,256 240,272 224,272 176,272 176,304 224,304 240,304 240,320 240,368  272,368 272,320 272,304 288,304 336,304 336,272 288,272 \t' }),
						_react2.default.createElement('path', { d: 'M336,128V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v32H48v320h416V128H336z M192,98.1 c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1V128H192V98.1z M352,320h-64v64h-64v-64h-64v-64h64v-64h64v64h64V320z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '272,272 272,256 272,208 240,208 240,256 240,272 224,272 176,272 176,304 224,304 240,304 240,320 240,368  272,368 272,320 272,304 288,304 336,304 336,272 288,272 \t' }),
					_react2.default.createElement('path', { d: 'M336,128V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v32H48v320h416V128H336z M192,98.1 c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1V128H192V98.1z M352,320h-64v64h-64v-64h-64v-64h64v-64h64v64h64V320z' })
				)
			);
		}
	}]);

	return IosMedkit;
}(_react2.default.Component);

exports.default = IosMedkit;
;IosMedkit.defaultProps = { bare: false };