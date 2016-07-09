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

var Bowtie = function (_React$Component) {
	_inherits(Bowtie, _React$Component);

	function Bowtie() {
		_classCallCheck(this, Bowtie);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Bowtie).apply(this, arguments));
	}

	_createClass(Bowtie, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M223.955,212.011c0,0,8.054-4.679,19.985-7.011c21.318-4.166,39.472-5.5,47.466,8.5c9.777,17.124,18.402,53.417,16.488,85.5 c-1,16.75-4.622,22.125-4.622,22.125s-15.333,9.525-47.341,6.875c-34.725-2.875-39.971-15.004-39.971-15.004 s4.497-11.305,7.995-42.499C227.452,239.303,223.955,212.011,223.955,212.011z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M183.984,285c12.546-3.323,23.03-7.189,27.659-8.985c0.693-4.707,1.28-9.718,1.694-15.015 c0.271-3.461,0.465-6.754,0.602-9.896c-6.854-2.333-13.534-4.851-28.769-10.104c-38.66-13.333-57.146-17-57.146-17 s14.24-2.5,42.219,3c19.986,3.929,34.392,9.5,43.947,14.333c0.771-15.999-2.477-32.583-2.477-32.583 C189.729,168.5,119.53,112,84.368,112C57.888,112,32,180.5,32,256s23.03,144,51.51,144c33.356,0,116.463-80,116.463-80 s5.738-12.578,9.879-33.572c-18.788,5.198-63.84,8.572-63.84,8.572S166.996,289.5,183.984,285z' }),
						_react2.default.createElement('path', { d: 'M427.632,112c-36.37,0-102.363,56.5-124.348,96.75l-0.761,1.375c0,0,1.389,2.527,1.873,3.375 c3.424,5.996,6.704,14.348,9.442,24.041c8.115-2.805,23.599-8.164,37.523-13.041c19.985-7,34.975-9.5,34.975-9.5 s-52.982,23.741-69.605,34.264c2.169,10.159,3.693,21.199,4.218,32.242c5.423,2.216,16.551,6.475,29.914,9.994 c18.986,5,40.398,11.5,40.398,11.5s-54.202-5.27-70.114-12.522c-0.013,2.862-0.095,5.709-0.263,8.522 c-0.997,16.719-4.608,22.104-4.622,22.124C323.883,331.667,391.262,400,428.49,400C456.97,400,480,331.5,480,256 S454.112,112,427.632,112z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M223.955,212.011c0,0,8.054-4.679,19.985-7.011c21.318-4.166,39.472-5.5,47.466,8.5c9.777,17.124,18.402,53.417,16.488,85.5 c-1,16.75-4.622,22.125-4.622,22.125s-15.333,9.525-47.341,6.875c-34.725-2.875-39.971-15.004-39.971-15.004 s4.497-11.305,7.995-42.499C227.452,239.303,223.955,212.011,223.955,212.011z' }),
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M183.984,285c12.546-3.323,23.03-7.189,27.659-8.985c0.693-4.707,1.28-9.718,1.694-15.015 c0.271-3.461,0.465-6.754,0.602-9.896c-6.854-2.333-13.534-4.851-28.769-10.104c-38.66-13.333-57.146-17-57.146-17 s14.24-2.5,42.219,3c19.986,3.929,34.392,9.5,43.947,14.333c0.771-15.999-2.477-32.583-2.477-32.583 C189.729,168.5,119.53,112,84.368,112C57.888,112,32,180.5,32,256s23.03,144,51.51,144c33.356,0,116.463-80,116.463-80 s5.738-12.578,9.879-33.572c-18.788,5.198-63.84,8.572-63.84,8.572S166.996,289.5,183.984,285z' }),
					_react2.default.createElement('path', { d: 'M427.632,112c-36.37,0-102.363,56.5-124.348,96.75l-0.761,1.375c0,0,1.389,2.527,1.873,3.375 c3.424,5.996,6.704,14.348,9.442,24.041c8.115-2.805,23.599-8.164,37.523-13.041c19.985-7,34.975-9.5,34.975-9.5 s-52.982,23.741-69.605,34.264c2.169,10.159,3.693,21.199,4.218,32.242c5.423,2.216,16.551,6.475,29.914,9.994 c18.986,5,40.398,11.5,40.398,11.5s-54.202-5.27-70.114-12.522c-0.013,2.862-0.095,5.709-0.263,8.522 c-0.997,16.719-4.608,22.104-4.622,22.124C323.883,331.667,391.262,400,428.49,400C456.97,400,480,331.5,480,256 S454.112,112,427.632,112z' })
				)
			);
		}
	}]);

	return Bowtie;
}(_react2.default.Component);

exports.default = Bowtie;
;Bowtie.defaultProps = { bare: false };