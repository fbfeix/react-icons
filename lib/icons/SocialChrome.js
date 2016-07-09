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

var SocialChrome = function (_React$Component) {
	_inherits(SocialChrome, _React$Component);

	function SocialChrome() {
		_classCallCheck(this, SocialChrome);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialChrome).apply(this, arguments));
	}

	_createClass(SocialChrome, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M188.8,255.925c0,36.946,30.243,67.178,67.2,67.178s67.199-30.231,67.199-67.178c0-36.945-30.242-67.179-67.199-67.179 S188.8,218.98,188.8,255.925z' }),
						_react2.default.createElement('path', { d: 'M476.752,217.795c-0.009,0.005-0.016,0.038-0.024,0.042c-1.701-9.877-4.04-19.838-6.989-28.838h-0.107 c2.983,9,5.352,19,7.072,29h-0.002c-1.719-10-4.088-20-7.07-29h-155.39c19.044,17,31.358,40.175,31.358,67.052 c0,16.796-4.484,31.284-12.314,44.724L231.044,478.452c0,0-0.009,0.264-0.014,0.264l-0.01,0.284c0.005,0,0.009,0,0.015,0 l-0.005-0.262c8.203,0.92,16.531,1.262,24.97,1.262c6.842,0,13.609-0.393,20.299-1.002c10.135-0.911,20.077-2.519,29.777-4.733 C405.68,451.525,480,362.404,480,255.941C480,242.942,478.879,230.188,476.752,217.795z' }),
						_react2.default.createElement('path', { d: 'M256,345.496c-33.601,0-61.601-17.91-77.285-44.785L76.006,123.047l-0.137-0.236 c-10.293,13.896-19.015,29.022-25.903,45.123C38.407,194.945,32,224.686,32,255.925c0,62.695,25.784,119.36,67.316,160.009 c29.342,28.719,66.545,49.433,108.088,58.619l0.029-0.051l77.683-134.604C276.157,343.256,266.085,345.496,256,345.496z' }),
						_react2.default.createElement('path', { d: 'M91.292,104.575l77.35,133.25C176.483,197.513,212.315,166,256,166h205.172c-6.921-15-15.594-30.324-25.779-43.938 c0.039,0.021,0.078,0.053,0.117,0.074C445.644,135.712,454.278,151,461.172,166h0.172c-6.884-15-15.514-30.38-25.668-43.99 c-0.115-0.06-0.229-0.168-0.342-0.257C394.475,67.267,329.359,32,256,32c-26.372,0-51.673,4.569-75.172,12.936 c-34.615,12.327-65.303,32.917-89.687,59.406l0.142,0.243C91.286,104.581,91.289,104.578,91.292,104.575z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M188.8,255.925c0,36.946,30.243,67.178,67.2,67.178s67.199-30.231,67.199-67.178c0-36.945-30.242-67.179-67.199-67.179 S188.8,218.98,188.8,255.925z' }),
					_react2.default.createElement('path', { d: 'M476.752,217.795c-0.009,0.005-0.016,0.038-0.024,0.042c-1.701-9.877-4.04-19.838-6.989-28.838h-0.107 c2.983,9,5.352,19,7.072,29h-0.002c-1.719-10-4.088-20-7.07-29h-155.39c19.044,17,31.358,40.175,31.358,67.052 c0,16.796-4.484,31.284-12.314,44.724L231.044,478.452c0,0-0.009,0.264-0.014,0.264l-0.01,0.284c0.005,0,0.009,0,0.015,0 l-0.005-0.262c8.203,0.92,16.531,1.262,24.97,1.262c6.842,0,13.609-0.393,20.299-1.002c10.135-0.911,20.077-2.519,29.777-4.733 C405.68,451.525,480,362.404,480,255.941C480,242.942,478.879,230.188,476.752,217.795z' }),
					_react2.default.createElement('path', { d: 'M256,345.496c-33.601,0-61.601-17.91-77.285-44.785L76.006,123.047l-0.137-0.236 c-10.293,13.896-19.015,29.022-25.903,45.123C38.407,194.945,32,224.686,32,255.925c0,62.695,25.784,119.36,67.316,160.009 c29.342,28.719,66.545,49.433,108.088,58.619l0.029-0.051l77.683-134.604C276.157,343.256,266.085,345.496,256,345.496z' }),
					_react2.default.createElement('path', { d: 'M91.292,104.575l77.35,133.25C176.483,197.513,212.315,166,256,166h205.172c-6.921-15-15.594-30.324-25.779-43.938 c0.039,0.021,0.078,0.053,0.117,0.074C445.644,135.712,454.278,151,461.172,166h0.172c-6.884-15-15.514-30.38-25.668-43.99 c-0.115-0.06-0.229-0.168-0.342-0.257C394.475,67.267,329.359,32,256,32c-26.372,0-51.673,4.569-75.172,12.936 c-34.615,12.327-65.303,32.917-89.687,59.406l0.142,0.243C91.286,104.581,91.289,104.578,91.292,104.575z' })
				)
			);
		}
	}]);

	return SocialChrome;
}(_react2.default.Component);

exports.default = SocialChrome;
;SocialChrome.defaultProps = { bare: false };