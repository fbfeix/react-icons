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

var IosCameraOutline = function (_React$Component) {
	_inherits(IosCameraOutline, _React$Component);

	function IosCameraOutline() {
		_classCallCheck(this, IosCameraOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCameraOutline).apply(this, arguments));
	}

	_createClass(IosCameraOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M417.5,160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3,0-22.2,12-54.5,48H145v-16h-34v16H97.5C79.9,160,64,173.2,64,190.7 v176c0,17.5,15.9,33.3,33.5,33.3h320c17.6,0,30.5-15.8,30.5-33.3v-176C448,173.2,435.1,160,417.5,160z M432,366.7 c0,9.3-6.2,17.3-14.5,17.3h-320c-8.7,0-17.5-8.7-17.5-17.3v-176c0-8.2,8.1-14.7,17.5-14.7h60.7h7.1l4.8-3.2c4-4.5,7.7-10,11.1-13.8 c11.3-12.7,19.5-21.7,25.3-26.9c4.7-4.2,6.2-4.1,6.2-4.1h88.5c0,0,1.6-0.1,6.7,4.5c6.1,5.5,14.7,16.5,26.6,29.8 c2.9,3.3,6,6.8,9.3,10.5l4.8,3.2h7.2h61.7c8.8,0,14.5,6,14.5,14.7V366.7z' }),
						_react2.default.createElement('path', { d: 'M256,189.5c-47.1,0-85.5,38.4-85.5,85.5s38.4,85.5,85.5,85.5s85.5-38.4,85.5-85.5S303.1,189.5,256,189.5z M256,344.5 c-38.4,0-69.5-31.1-69.5-69.5s31.1-69.5,69.5-69.5s69.5,31.1,69.5,69.5S294.4,344.5,256,344.5z' }),
						_react2.default.createElement('rect', { x: '352', y: '192', width: '17', height: '17' }),
						_react2.default.createElement('circle', { cx: '256', cy: '275', r: '32' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M417.5,160h-61.7c-32.1-36-42.2-48-54.5-48h-88.5c-12.3,0-22.2,12-54.5,48H145v-16h-34v16H97.5C79.9,160,64,173.2,64,190.7 v176c0,17.5,15.9,33.3,33.5,33.3h320c17.6,0,30.5-15.8,30.5-33.3v-176C448,173.2,435.1,160,417.5,160z M432,366.7 c0,9.3-6.2,17.3-14.5,17.3h-320c-8.7,0-17.5-8.7-17.5-17.3v-176c0-8.2,8.1-14.7,17.5-14.7h60.7h7.1l4.8-3.2c4-4.5,7.7-10,11.1-13.8 c11.3-12.7,19.5-21.7,25.3-26.9c4.7-4.2,6.2-4.1,6.2-4.1h88.5c0,0,1.6-0.1,6.7,4.5c6.1,5.5,14.7,16.5,26.6,29.8 c2.9,3.3,6,6.8,9.3,10.5l4.8,3.2h7.2h61.7c8.8,0,14.5,6,14.5,14.7V366.7z' }),
					_react2.default.createElement('path', { d: 'M256,189.5c-47.1,0-85.5,38.4-85.5,85.5s38.4,85.5,85.5,85.5s85.5-38.4,85.5-85.5S303.1,189.5,256,189.5z M256,344.5 c-38.4,0-69.5-31.1-69.5-69.5s31.1-69.5,69.5-69.5s69.5,31.1,69.5,69.5S294.4,344.5,256,344.5z' }),
					_react2.default.createElement('rect', { x: '352', y: '192', width: '17', height: '17' }),
					_react2.default.createElement('circle', { cx: '256', cy: '275', r: '32' })
				)
			);
		}
	}]);

	return IosCameraOutline;
}(_react2.default.Component);

exports.default = IosCameraOutline;
;IosCameraOutline.defaultProps = { bare: false };