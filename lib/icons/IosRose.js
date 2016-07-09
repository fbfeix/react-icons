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

var IosRose = function (_React$Component) {
	_inherits(IosRose, _React$Component);

	function IosRose() {
		_classCallCheck(this, IosRose);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosRose).apply(this, arguments));
	}

	_createClass(IosRose, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M416,128c-18.863,4.163-36.75,8.786-53.697,13.753c-40.457,11.858-75.509,25.693-105.445,40.015 c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889S167.635,480,256,480s144-55.148,144-128.111 S338.999,224,416,128L416,128z' }),
						_react2.default.createElement('path', { d: 'M96,96c41.475,47.079,44.624,103.891,39.382,144.741c12.772-11.274,31.177-25.734,56.144-41.389 c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765c-9.113-10.898-22.07-20.606-36.631-29.095 C162.631,110.756,96,96,96,96L96,96z' }),
						_react2.default.createElement('path', { d: 'M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533l2.724,3.257 c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z' }),
						_react2.default.createElement('path', { d: 'M176,32c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574 c9.505-11.4,20.415-21.626,32.605-30.543C210.342,47.655,176,32,176,32L176,32z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M416,128c-18.863,4.163-36.75,8.786-53.697,13.753c-40.457,11.858-75.509,25.693-105.445,40.015 c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889S167.635,480,256,480s144-55.148,144-128.111 S338.999,224,416,128L416,128z' }),
					_react2.default.createElement('path', { d: 'M96,96c41.475,47.079,44.624,103.891,39.382,144.741c12.772-11.274,31.177-25.734,56.144-41.389 c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765c-9.113-10.898-22.07-20.606-36.631-29.095 C162.631,110.756,96,96,96,96L96,96z' }),
					_react2.default.createElement('path', { d: 'M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533l2.724,3.257 c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z' }),
					_react2.default.createElement('path', { d: 'M176,32c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574 c9.505-11.4,20.415-21.626,32.605-30.543C210.342,47.655,176,32,176,32L176,32z' })
				)
			);
		}
	}]);

	return IosRose;
}(_react2.default.Component);

exports.default = IosRose;
;IosRose.defaultProps = { bare: false };