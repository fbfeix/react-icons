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

var LogOut = function (_React$Component) {
	_inherits(LogOut, _React$Component);

	function LogOut() {
		_classCallCheck(this, LogOut);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LogOut).apply(this, arguments));
	}

	_createClass(LogOut, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '366.863,323.883 389.49,346.51 480,256 389.49,165.49 366.862,188.118 418.745,240 192,240 192,272 418.745,272 \t ' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M391.491,391.766C355.229,428.029,307.018,448,255.736,448c-51.287,0-99.506-19.971-135.772-56.235 C83.697,355.501,64,307.285,64,256c0-51.281,19.697-99.495,55.965-135.761C156.232,83.973,204.45,64,255.736,64 c51.279,0,99.491,19.973,135.755,56.238c2.527,2.528,4.966,5.121,7.333,7.762h40.731c-40.474-58.028-107.709-96-183.819-96 C132.021,32,32,132.298,32,256c0,123.715,100.021,224,223.736,224c76.112,0,143.35-37.97,183.822-96h-40.73 C396.46,386.643,394.021,389.236,391.491,391.766z' })
					)
				)
			);
		}
	}]);

	return LogOut;
}(_react2.default.Component);

exports.default = LogOut;
;