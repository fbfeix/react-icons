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

var IosPieOutline = function (_React$Component) {
	_inherits(IosPieOutline, _React$Component);

	function IosPieOutline() {
		_classCallCheck(this, IosPieOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPieOutline).apply(this, arguments));
	}

	_createClass(IosPieOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M288,80.826c45.293,3.705,87.354,23.024,119.809,55.494C444.044,172.57,464,220.744,464,272.043 c0,25.924-5.08,51.042-15.099,74.703c-9.68,22.859-23.54,43.384-41.194,61.024c-17.654,17.639-38.204,31.481-61.08,41.151 c-23.673,10.01-48.823,15.081-74.752,15.081c-41.193,0-80.47-12.847-113.584-37.146c-15.95-11.705-29.957-25.733-41.633-41.692 c-8.378-11.453-15.422-23.724-21.041-36.634l180.259-45.008L288,300.496V288V81 M272,64v224L74.245,337.376 C101.653,420.221,179.841,480,271.875,480C386.75,480,480,386.875,480,272S387,64,272,64L272,64z' }),
					_react2.default.createElement('path', { d: 'M240,48.181v214.943L59.658,308.854c-9.117-23.568-11.197-56.973-11.158-69.496v-0.036v-0.035 c0-47.311,16.465-93.746,45.173-127.398c16.735-19.618,37.502-34.981,61.721-45.663C180.099,55.331,208.519,49.274,240,48.181 M256,32h-5.5C90.5,32,32,148.25,32,239.287c0,0,0.25,56.666,18.91,88.291L256,275.573V32L256,32z' })
				)
			);
		}
	}]);

	return IosPieOutline;
}(_react2.default.Component);

exports.default = IosPieOutline;
;