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

var IosUnlockedOutline = function (_React$Component) {
	_inherits(IosUnlockedOutline, _React$Component);

	function IosUnlockedOutline() {
		_classCallCheck(this, IosUnlockedOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosUnlockedOutline).apply(this, arguments));
	}

	_createClass(IosUnlockedOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,288c-17.673,0-32,14.327-32,32c0,14.91,10.198,27.439,24,30.992V384h16v-33.008c13.802-3.553,24-16.082,24-30.992 C288,302.327,273.673,288,256,288z M256,336c-8.822,0-16-7.178-16-16s7.178-16,16-16s16,7.178,16,16S264.822,336,256,336z' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M168,224v-72c0-48.523,39.484-88,88.016-88C304.531,64,344,103.477,344,152v8h16v-8c0-57.43-46.562-104-103.984-104 C198.562,48,152,94.57,152,152v72H96v240h320V224H168z M400,448H112V240h288V448z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,288c-17.673,0-32,14.327-32,32c0,14.91,10.198,27.439,24,30.992V384h16v-33.008c13.802-3.553,24-16.082,24-30.992 C288,302.327,273.673,288,256,288z M256,336c-8.822,0-16-7.178-16-16s7.178-16,16-16s16,7.178,16,16S264.822,336,256,336z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M168,224v-72c0-48.523,39.484-88,88.016-88C304.531,64,344,103.477,344,152v8h16v-8c0-57.43-46.562-104-103.984-104 C198.562,48,152,94.57,152,152v72H96v240h320V224H168z M400,448H112V240h288V448z' })
					)
				)
			);
		}
	}]);

	return IosUnlockedOutline;
}(_react2.default.Component);

exports.default = IosUnlockedOutline;
;IosUnlockedOutline.defaultProps = { bare: false };