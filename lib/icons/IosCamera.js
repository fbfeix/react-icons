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

var IosCamera = function (_React$Component) {
	_inherits(IosCamera, _React$Component);

	function IosCamera() {
		_classCallCheck(this, IosCamera);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCamera).apply(this, arguments));
	}

	_createClass(IosCamera, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M417.5,160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3,0-22.2,12-54.5,48H145v-16h-34v16H97.5C79.9,160,64,173.2,64,190.7 v176c0,17.5,15.9,33.3,33.5,33.3h320c17.6,0,30.5-15.8,30.5-33.3v-176C448,173.2,435.1,160,417.5,160z M256,360.5 c-47.1,0-85.5-38.4-85.5-85.5s38.4-85.5,85.5-85.5s85.5,38.4,85.5,85.5S303.1,360.5,256,360.5z M369,209h-17v-17h17V209z' }),
						_react2.default.createElement('path', { d: 'M256,205.5c-38.4,0-69.5,31.1-69.5,69.5s31.1,69.5,69.5,69.5s69.5-31.1,69.5-69.5S294.4,205.5,256,205.5z M256,307 c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S273.7,307,256,307z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M417.5,160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3,0-22.2,12-54.5,48H145v-16h-34v16H97.5C79.9,160,64,173.2,64,190.7 v176c0,17.5,15.9,33.3,33.5,33.3h320c17.6,0,30.5-15.8,30.5-33.3v-176C448,173.2,435.1,160,417.5,160z M256,360.5 c-47.1,0-85.5-38.4-85.5-85.5s38.4-85.5,85.5-85.5s85.5,38.4,85.5,85.5S303.1,360.5,256,360.5z M369,209h-17v-17h17V209z' }),
					_react2.default.createElement('path', { d: 'M256,205.5c-38.4,0-69.5,31.1-69.5,69.5s31.1,69.5,69.5,69.5s69.5-31.1,69.5-69.5S294.4,205.5,256,205.5z M256,307 c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S273.7,307,256,307z' })
				)
			);
		}
	}]);

	return IosCamera;
}(_react2.default.Component);

exports.default = IosCamera;
;IosCamera.defaultProps = { bare: false };