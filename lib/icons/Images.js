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

var Images = function (_React$Component) {
	_inherits(Images, _React$Component);

	function Images() {
		_classCallCheck(this, Images);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Images).apply(this, arguments));
	}

	_createClass(Images, [{
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
							_react2.default.createElement('path', { d: 'M457.6,140.2l-82.5-4l-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3L51.4,88.4c-11.8,1-20.3,10.5-19.4,21.7l21.2,235.8 c1,11.3,11.2,19.2,22.9,18.3l15-1.2l-2.4,45.8c-0.6,12.6,9.2,22.8,22.4,23.5L441.3,448c13.2,0.6,24.1-8.6,24.8-21.2L480,163.5 C480.6,151,470.7,140.8,457.6,140.2z M102.6,145.5l-7.1,134.8L78.1,305l-16-178c0-0.2,0-0.3,0-0.5s0-0.3,0-0.5 c0.5-5,4.3-9,9.5-9.4l261-21.4c5.2-0.4,9.7,3,10.5,7.9c0,0.2,0.3,0.2,0.3,0.4c0,0.1,0.3,0.2,0.3,0.4l2.7,30.8l-219-10.5 C114.2,123.8,103.2,133,102.6,145.5z M436.7,382.4l-46.7-55.3l-27.5-32.7c-2.4-2.9-6.3-5.3-10.6-5.5c-4.3-0.2-7.5,1.5-11.1,4.1 l-16.4,11.9c-3.5,2.1-6.2,3.5-9.9,3.3c-3.6-0.2-6.8-1.6-9.1-3.8c-0.8-0.8-2.3-2.2-3.5-3.4l-42.8-48.9c-3.1-3.9-8.2-6.4-13.8-6.7 c-5.7-0.3-11.2,2.1-14.8,5.6L129.4,359.8l-6.8,7.4l0.3-6.8l6.8-128.9l3.3-62.9c0-0.2,0-0.4,0-0.5c0-0.2,0-0.4,0-0.5 c1.4-5.4,6.2-9.3,11.9-9l204.2,9.8l28.7,1.4l58.3,2.8c5.8,0.3,10.3,4.7,10.4,10.2c0,0.2,0.3,0.3,0.3,0.5c0,0.2,0.3,0.3,0.3,0.5 L436.7,382.4z' })
						),
						_react2.default.createElement('path', { d: 'M373.2,262.3c19.4,0,35.2-15.8,35.2-35.2s-15.7-35.2-35.2-35.2c-19.4,0-35.2,15.7-35.2,35.2S353.7,262.3,373.2,262.3z' })
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
						_react2.default.createElement('path', { d: 'M457.6,140.2l-82.5-4l-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3L51.4,88.4c-11.8,1-20.3,10.5-19.4,21.7l21.2,235.8 c1,11.3,11.2,19.2,22.9,18.3l15-1.2l-2.4,45.8c-0.6,12.6,9.2,22.8,22.4,23.5L441.3,448c13.2,0.6,24.1-8.6,24.8-21.2L480,163.5 C480.6,151,470.7,140.8,457.6,140.2z M102.6,145.5l-7.1,134.8L78.1,305l-16-178c0-0.2,0-0.3,0-0.5s0-0.3,0-0.5 c0.5-5,4.3-9,9.5-9.4l261-21.4c5.2-0.4,9.7,3,10.5,7.9c0,0.2,0.3,0.2,0.3,0.4c0,0.1,0.3,0.2,0.3,0.4l2.7,30.8l-219-10.5 C114.2,123.8,103.2,133,102.6,145.5z M436.7,382.4l-46.7-55.3l-27.5-32.7c-2.4-2.9-6.3-5.3-10.6-5.5c-4.3-0.2-7.5,1.5-11.1,4.1 l-16.4,11.9c-3.5,2.1-6.2,3.5-9.9,3.3c-3.6-0.2-6.8-1.6-9.1-3.8c-0.8-0.8-2.3-2.2-3.5-3.4l-42.8-48.9c-3.1-3.9-8.2-6.4-13.8-6.7 c-5.7-0.3-11.2,2.1-14.8,5.6L129.4,359.8l-6.8,7.4l0.3-6.8l6.8-128.9l3.3-62.9c0-0.2,0-0.4,0-0.5c0-0.2,0-0.4,0-0.5 c1.4-5.4,6.2-9.3,11.9-9l204.2,9.8l28.7,1.4l58.3,2.8c5.8,0.3,10.3,4.7,10.4,10.2c0,0.2,0.3,0.3,0.3,0.5c0,0.2,0.3,0.3,0.3,0.5 L436.7,382.4z' })
					),
					_react2.default.createElement('path', { d: 'M373.2,262.3c19.4,0,35.2-15.8,35.2-35.2s-15.7-35.2-35.2-35.2c-19.4,0-35.2,15.7-35.2,35.2S353.7,262.3,373.2,262.3z' })
				)
			);
		}
	}]);

	return Images;
}(_react2.default.Component);

exports.default = Images;
;Images.defaultProps = { bare: false };