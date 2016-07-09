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

var LoadB = function (_React$Component) {
	_inherits(LoadB, _React$Component);

	function LoadB() {
		_classCallCheck(this, LoadB);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadB).apply(this, arguments));
	}

	_createClass(LoadB, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M288,160c0,17.7-14.3,32-32,32l0,0c-17.7,0-32-14.3-32-32V64c0-17.7,14.3-32,32-32l0,0c17.7,0,32,14.3,32,32V160z' }),
						_react2.default.createElement('path', { d: 'M256,320c-17.7,0-32,14.3-32,32v96c0,17.7,14.3,32,32,32s32-14.3,32-32v-96C288,334.3,273.7,320,256,320L256,320z' }),
						_react2.default.createElement('path', { d: 'M448,224h-96c-17.7,0-32,14.3-32,32s14.3,32,32,32h96c17.7,0,32-14.3,32-32S465.7,224,448,224L448,224z' }),
						_react2.default.createElement('path', { d: 'M160,224H64c-17.7,0-32,14.3-32,32s14.3,32,32,32h96c17.7,0,32-14.3,32-32S177.7,224,160,224L160,224z' }),
						_react2.default.createElement('path', { d: 'M346.5,210.7c-12.5,12.5-32.8,12.5-45.3,0l0,0c-12.5-12.5-12.5-32.8,0-45.3l67.9-67.9c12.5-12.5,32.8-12.5,45.3,0l0,0 c12.5,12.5,12.5,32.8,0,45.3L346.5,210.7z' }),
						_react2.default.createElement('path', { d: 'M210.7,301.3c-12.5-12.5-32.8-12.5-45.3,0l-67.9,67.9c-12.5,12.5-12.5,32.8,0,45.3c12.5,12.5,32.8,12.5,45.3,0l67.9-67.9 C223.2,334,223.2,313.8,210.7,301.3L210.7,301.3z' }),
						_react2.default.createElement('path', { d: 'M414.4,369.1l-67.9-67.9c-12.5-12.5-32.8-12.5-45.3,0c-12.5,12.5-12.5,32.8,0,45.3l67.9,67.9c12.5,12.5,32.8,12.5,45.3,0 C426.9,401.9,426.9,381.6,414.4,369.1L414.4,369.1z' }),
						_react2.default.createElement('path', { d: 'M210.7,165.5l-67.9-67.9c-12.5-12.5-32.8-12.5-45.3,0c-12.5,12.5-12.5,32.8,0,45.3l67.9,67.9c12.5,12.5,32.8,12.5,45.3,0 S223.2,178,210.7,165.5L210.7,165.5z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M288,160c0,17.7-14.3,32-32,32l0,0c-17.7,0-32-14.3-32-32V64c0-17.7,14.3-32,32-32l0,0c17.7,0,32,14.3,32,32V160z' }),
					_react2.default.createElement('path', { d: 'M256,320c-17.7,0-32,14.3-32,32v96c0,17.7,14.3,32,32,32s32-14.3,32-32v-96C288,334.3,273.7,320,256,320L256,320z' }),
					_react2.default.createElement('path', { d: 'M448,224h-96c-17.7,0-32,14.3-32,32s14.3,32,32,32h96c17.7,0,32-14.3,32-32S465.7,224,448,224L448,224z' }),
					_react2.default.createElement('path', { d: 'M160,224H64c-17.7,0-32,14.3-32,32s14.3,32,32,32h96c17.7,0,32-14.3,32-32S177.7,224,160,224L160,224z' }),
					_react2.default.createElement('path', { d: 'M346.5,210.7c-12.5,12.5-32.8,12.5-45.3,0l0,0c-12.5-12.5-12.5-32.8,0-45.3l67.9-67.9c12.5-12.5,32.8-12.5,45.3,0l0,0 c12.5,12.5,12.5,32.8,0,45.3L346.5,210.7z' }),
					_react2.default.createElement('path', { d: 'M210.7,301.3c-12.5-12.5-32.8-12.5-45.3,0l-67.9,67.9c-12.5,12.5-12.5,32.8,0,45.3c12.5,12.5,32.8,12.5,45.3,0l67.9-67.9 C223.2,334,223.2,313.8,210.7,301.3L210.7,301.3z' }),
					_react2.default.createElement('path', { d: 'M414.4,369.1l-67.9-67.9c-12.5-12.5-32.8-12.5-45.3,0c-12.5,12.5-12.5,32.8,0,45.3l67.9,67.9c12.5,12.5,32.8,12.5,45.3,0 C426.9,401.9,426.9,381.6,414.4,369.1L414.4,369.1z' }),
					_react2.default.createElement('path', { d: 'M210.7,165.5l-67.9-67.9c-12.5-12.5-32.8-12.5-45.3,0c-12.5,12.5-12.5,32.8,0,45.3l67.9,67.9c12.5,12.5,32.8,12.5,45.3,0 S223.2,178,210.7,165.5L210.7,165.5z' })
				)
			);
		}
	}]);

	return LoadB;
}(_react2.default.Component);

exports.default = LoadB;
;LoadB.defaultProps = { bare: false };