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

var SocialWhatsappOutline = function (_React$Component) {
	_inherits(SocialWhatsappOutline, _React$Component);

	function SocialWhatsappOutline() {
		_classCallCheck(this, SocialWhatsappOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialWhatsappOutline).apply(this, arguments));
	}

	_createClass(SocialWhatsappOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M209.877,154.114c-4.258-11.323-9.176-10.515-12.45-10.639 c-3.277-0.121-6.146-0.061-10.573,0.011c-3.746,0.061-9.882,1.026-15.232,6.413c-5.357,5.378-20.366,18.312-21.404,45.725 c-1.031,27.408,18.08,54.643,20.749,58.455c2.667,3.826,36.494,63.236,92.719,87.67c56.231,24.427,56.525,16.981,66.84,16.435 c10.325-0.54,33.726-12.246,38.899-25.073c5.172-12.827,5.588-23.979,4.271-26.358c-1.316-2.371-5-3.911-10.51-6.9 c-5.516-2.995-32.595-17.498-37.673-19.55c-5.081-2.044-8.787-3.108-12.742,2.329c-3.957,5.422-15.191,17.569-18.596,21.168 c-3.42,3.6-6.711,3.934-12.226,0.93c-5.5-2.988-23.373-9.548-44.098-29.317c-16.126-15.38-26.711-34.043-29.779-39.736 c-3.069-5.697-0.02-8.604,2.9-11.269c2.618-2.407,5.857-6.301,8.792-9.449c2.919-3.148,3.949-5.43,5.961-9.083 c2.007-3.645,1.2-6.932-0.102-9.771C224.32,193.267,214.133,165.437,209.877,154.114z' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M260.062,64c50.249,0,97.478,19.402,132.982,54.632C428.482,153.796,448,200.533,448,250.232 c0,49.694-19.518,96.43-54.956,131.596c-35.507,35.232-82.735,54.637-132.982,54.637c-31.806,0-63.24-8.023-90.906-23.201 l-12.017-6.593l-13.063,4.149l-61.452,19.522l19.375-57.149l4.798-14.151l-7.771-12.763 c-17.593-28.898-26.892-62.111-26.892-96.047c0-49.699,19.518-96.436,54.957-131.601C162.596,83.402,209.819,64,260.062,64 M260.062,32C138.605,32,40.134,129.701,40.134,250.232c0,41.229,11.532,79.791,31.559,112.687L32,480l121.764-38.682 c31.508,17.285,67.745,27.146,106.298,27.146C381.535,468.464,480,370.749,480,250.232C480,129.701,381.535,32,260.062,32 L260.062,32z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M209.877,154.114c-4.258-11.323-9.176-10.515-12.45-10.639 c-3.277-0.121-6.146-0.061-10.573,0.011c-3.746,0.061-9.882,1.026-15.232,6.413c-5.357,5.378-20.366,18.312-21.404,45.725 c-1.031,27.408,18.08,54.643,20.749,58.455c2.667,3.826,36.494,63.236,92.719,87.67c56.231,24.427,56.525,16.981,66.84,16.435 c10.325-0.54,33.726-12.246,38.899-25.073c5.172-12.827,5.588-23.979,4.271-26.358c-1.316-2.371-5-3.911-10.51-6.9 c-5.516-2.995-32.595-17.498-37.673-19.55c-5.081-2.044-8.787-3.108-12.742,2.329c-3.957,5.422-15.191,17.569-18.596,21.168 c-3.42,3.6-6.711,3.934-12.226,0.93c-5.5-2.988-23.373-9.548-44.098-29.317c-16.126-15.38-26.711-34.043-29.779-39.736 c-3.069-5.697-0.02-8.604,2.9-11.269c2.618-2.407,5.857-6.301,8.792-9.449c2.919-3.148,3.949-5.43,5.961-9.083 c2.007-3.645,1.2-6.932-0.102-9.771C224.32,193.267,214.133,165.437,209.877,154.114z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M260.062,64c50.249,0,97.478,19.402,132.982,54.632C428.482,153.796,448,200.533,448,250.232 c0,49.694-19.518,96.43-54.956,131.596c-35.507,35.232-82.735,54.637-132.982,54.637c-31.806,0-63.24-8.023-90.906-23.201 l-12.017-6.593l-13.063,4.149l-61.452,19.522l19.375-57.149l4.798-14.151l-7.771-12.763 c-17.593-28.898-26.892-62.111-26.892-96.047c0-49.699,19.518-96.436,54.957-131.601C162.596,83.402,209.819,64,260.062,64 M260.062,32C138.605,32,40.134,129.701,40.134,250.232c0,41.229,11.532,79.791,31.559,112.687L32,480l121.764-38.682 c31.508,17.285,67.745,27.146,106.298,27.146C381.535,468.464,480,370.749,480,250.232C480,129.701,381.535,32,260.062,32 L260.062,32z' })
					)
				)
			);
		}
	}]);

	return SocialWhatsappOutline;
}(_react2.default.Component);

exports.default = SocialWhatsappOutline;
;SocialWhatsappOutline.defaultProps = { bare: false };