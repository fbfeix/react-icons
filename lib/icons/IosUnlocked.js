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

var IosUnlocked = function (_React$Component) {
	_inherits(IosUnlocked, _React$Component);

	function IosUnlocked() {
		_classCallCheck(this, IosUnlocked);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosUnlocked).apply(this, arguments));
	}

	_createClass(IosUnlocked, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,304c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S264.822,304,256,304z' }),
						_react2.default.createElement('path', { d: 'M168,224v-72c0-48.523,39.484-88,88.016-88C304.531,64,344,103.477,344,152v8h16v-8c0-57.43-46.562-104-103.984-104 C198.562,48,152,94.57,152,152v72H96v240h320V224H168z M264,350.992V384h-16v-33.008c-13.802-3.553-24-16.082-24-30.992 c0-17.673,14.327-32,32-32s32,14.327,32,32C288,334.91,277.802,347.439,264,350.992z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,304c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S264.822,304,256,304z' }),
					_react2.default.createElement('path', { d: 'M168,224v-72c0-48.523,39.484-88,88.016-88C304.531,64,344,103.477,344,152v8h16v-8c0-57.43-46.562-104-103.984-104 C198.562,48,152,94.57,152,152v72H96v240h320V224H168z M264,350.992V384h-16v-33.008c-13.802-3.553-24-16.082-24-30.992 c0-17.673,14.327-32,32-32s32,14.327,32,32C288,334.91,277.802,347.439,264,350.992z' })
				)
			);
		}
	}]);

	return IosUnlocked;
}(_react2.default.Component);

exports.default = IosUnlocked;
;IosUnlocked.defaultProps = { bare: false };