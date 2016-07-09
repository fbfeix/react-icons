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

var IosReverseCamera = function (_React$Component) {
	_inherits(IosReverseCamera, _React$Component);

	function IosReverseCamera() {
		_classCallCheck(this, IosReverseCamera);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosReverseCamera).apply(this, arguments));
	}

	_createClass(IosReverseCamera, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M417.5,160h-61.725c-32.105-36-42.219-48-54.525-48h-88.5c-12.314,0-22.167,12-54.521,48H145v-16h-34v16H97.5 C79.855,160,64,173.217,64,190.684v176.018C64,384.169,79.855,400,97.5,400h320c17.645,0,30.5-15.831,30.5-33.299V190.684 C448,173.217,435.145,160,417.5,160z M313.076,330.782C297.17,344.434,276.9,352,256,352c-45.487,0-82.509-36-87.205-78h-29.479 l37.534-50l38.87,50h-30.61c4.604,33,34.53,61.965,70.89,61.965c16.859,0,32.701-6.327,45.815-17.356l2.032-1.647l11.599,11.662 L313.076,330.782z M335.094,307.225L296.248,256h30.644c-4.617-35-34.548-63.797-70.891-63.797 c-16.618,0-32.888,6.133-45.814,17.005l-2.033,1.706l-11.599-11.61l2.371-2.052c15.905-13.65,36.175-21.206,57.075-21.206 c22.333,0,43.548,8.063,59.736,22.839C331.275,213.064,340.966,236,343.207,256h29.512L335.094,307.225z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M417.5,160h-61.725c-32.105-36-42.219-48-54.525-48h-88.5c-12.314,0-22.167,12-54.521,48H145v-16h-34v16H97.5 C79.855,160,64,173.217,64,190.684v176.018C64,384.169,79.855,400,97.5,400h320c17.645,0,30.5-15.831,30.5-33.299V190.684 C448,173.217,435.145,160,417.5,160z M313.076,330.782C297.17,344.434,276.9,352,256,352c-45.487,0-82.509-36-87.205-78h-29.479 l37.534-50l38.87,50h-30.61c4.604,33,34.53,61.965,70.89,61.965c16.859,0,32.701-6.327,45.815-17.356l2.032-1.647l11.599,11.662 L313.076,330.782z M335.094,307.225L296.248,256h30.644c-4.617-35-34.548-63.797-70.891-63.797 c-16.618,0-32.888,6.133-45.814,17.005l-2.033,1.706l-11.599-11.61l2.371-2.052c15.905-13.65,36.175-21.206,57.075-21.206 c22.333,0,43.548,8.063,59.736,22.839C331.275,213.064,340.966,236,343.207,256h29.512L335.094,307.225z' })
				)
			);
		}
	}]);

	return IosReverseCamera;
}(_react2.default.Component);

exports.default = IosReverseCamera;
;IosReverseCamera.defaultProps = { bare: false };