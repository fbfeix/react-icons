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

var IosIonicOutline = function (_React$Component) {
	_inherits(IosIonicOutline, _React$Component);

	function IosIonicOutline() {
		_classCallCheck(this, IosIonicOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosIonicOutline).apply(this, arguments));
	}

	_createClass(IosIonicOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M425.5,134.8c4.7-5.9,7.5-13.5,7.5-21.6c0-19.2-15.6-34.9-34.8-34.9c-8.2,0-15.7,2.8-21.6,7.5c-34-24.2-75-37.8-119.9-37.8 C141.8,48,48,140.5,48,255.6C48,370.7,141.7,464,256.6,464C371.5,464,464,370.7,464,255.6C464,210.6,449.7,168.9,425.5,134.8z M398,91.3c12.2,0,22,9.9,22,22c0,12.2-9.9,22-22,22c-12.2,0-22-9.9-22-22C376,101.2,385.8,91.3,398,91.3z M391.8,391.7 c-17.6,17.6-38.2,31.6-61.1,41.3c-23.7,10-48.2,15.2-74.2,15.2c-25.9,0-51.7-5.1-75.4-15.2c-22.9-9.7-43.4-23.5-61.1-41.3 c-17.6-17.6-31.5-38.3-41.2-61.2c-10-23.7-15.1-48.9-15.1-74.9c0-25.9,5.1-51.2,15.1-74.9c9.7-22.9,23.5-43.5,41.2-61.2 s38.2-31.6,61.1-41.3c23.7-10,49.4-14.1,75.4-14.1c25.9,0,50.5,4,74.2,14.1c12.7,5.4,24.7,12.1,35.9,20c-2.1,4.5-3.3,9.5-3.3,14.9 c0,19.2,15.6,34.9,34.8,34.9c5.3,0,10.3-1.2,14.9-3.3c7.9,11.2,14.6,23.2,20,36c10,23.7,15.1,48.9,15.1,74.9 c0,25.9-5.1,51.2-15.1,74.9C423.3,353.4,409.5,374,391.8,391.7z' }),
						_react2.default.createElement('path', { d: 'M256.5,160.1c-53,0-96,42.8-96,95.9s42.9,96.1,96,96.1c53,0,96-43,96-96.1S309.5,160.1,256.5,160.1z M256.5,335.8 c-44.1,0-79.7-35.8-79.7-79.8c0-44.1,35.6-79.6,79.7-79.6s79.7,35.6,79.7,79.6C336.2,300.1,300.5,335.8,256.5,335.8z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M425.5,134.8c4.7-5.9,7.5-13.5,7.5-21.6c0-19.2-15.6-34.9-34.8-34.9c-8.2,0-15.7,2.8-21.6,7.5c-34-24.2-75-37.8-119.9-37.8 C141.8,48,48,140.5,48,255.6C48,370.7,141.7,464,256.6,464C371.5,464,464,370.7,464,255.6C464,210.6,449.7,168.9,425.5,134.8z M398,91.3c12.2,0,22,9.9,22,22c0,12.2-9.9,22-22,22c-12.2,0-22-9.9-22-22C376,101.2,385.8,91.3,398,91.3z M391.8,391.7 c-17.6,17.6-38.2,31.6-61.1,41.3c-23.7,10-48.2,15.2-74.2,15.2c-25.9,0-51.7-5.1-75.4-15.2c-22.9-9.7-43.4-23.5-61.1-41.3 c-17.6-17.6-31.5-38.3-41.2-61.2c-10-23.7-15.1-48.9-15.1-74.9c0-25.9,5.1-51.2,15.1-74.9c9.7-22.9,23.5-43.5,41.2-61.2 s38.2-31.6,61.1-41.3c23.7-10,49.4-14.1,75.4-14.1c25.9,0,50.5,4,74.2,14.1c12.7,5.4,24.7,12.1,35.9,20c-2.1,4.5-3.3,9.5-3.3,14.9 c0,19.2,15.6,34.9,34.8,34.9c5.3,0,10.3-1.2,14.9-3.3c7.9,11.2,14.6,23.2,20,36c10,23.7,15.1,48.9,15.1,74.9 c0,25.9-5.1,51.2-15.1,74.9C423.3,353.4,409.5,374,391.8,391.7z' }),
					_react2.default.createElement('path', { d: 'M256.5,160.1c-53,0-96,42.8-96,95.9s42.9,96.1,96,96.1c53,0,96-43,96-96.1S309.5,160.1,256.5,160.1z M256.5,335.8 c-44.1,0-79.7-35.8-79.7-79.8c0-44.1,35.6-79.6,79.7-79.6s79.7,35.6,79.7,79.6C336.2,300.1,300.5,335.8,256.5,335.8z' })
				)
			);
		}
	}]);

	return IosIonicOutline;
}(_react2.default.Component);

exports.default = IosIonicOutline;
;IosIonicOutline.defaultProps = { bare: false };