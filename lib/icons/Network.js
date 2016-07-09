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

var Network = function (_React$Component) {
	_inherits(Network, _React$Component);

	function Network() {
		_classCallCheck(this, Network);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Network).apply(this, arguments));
	}

	_createClass(Network, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M448,96c0-35.29-28.71-64-64-64s-64,28.71-64,64c0,23.637,12.89,44.307,32,55.391v52.832l-96,48l-96-48v-52.832 c19.11-11.084,32-31.754,32-55.391c0-35.29-28.71-64-64-64S64,60.71,64,96c0,23.637,12.89,44.307,32,55.391v92.387l128,64v52.832 c-19.11,11.084-32,31.754-32,55.391c0,35.29,28.71,64,64,64s64-28.71,64-64c0-23.637-12.89-44.307-32-55.391v-52.832l128-64v-92.387 C435.11,140.307,448,119.637,448,96z M128,64c17.673,0,32,14.327,32,32s-14.327,32-32,32s-32-14.327-32-32S110.327,64,128,64z M256,448c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S273.673,448,256,448z M384,128c-17.673,0-32-14.327-32-32 s14.327-32,32-32s32,14.327,32,32S401.673,128,384,128z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M448,96c0-35.29-28.71-64-64-64s-64,28.71-64,64c0,23.637,12.89,44.307,32,55.391v52.832l-96,48l-96-48v-52.832 c19.11-11.084,32-31.754,32-55.391c0-35.29-28.71-64-64-64S64,60.71,64,96c0,23.637,12.89,44.307,32,55.391v92.387l128,64v52.832 c-19.11,11.084-32,31.754-32,55.391c0,35.29,28.71,64,64,64s64-28.71,64-64c0-23.637-12.89-44.307-32-55.391v-52.832l128-64v-92.387 C435.11,140.307,448,119.637,448,96z M128,64c17.673,0,32,14.327,32,32s-14.327,32-32,32s-32-14.327-32-32S110.327,64,128,64z M256,448c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S273.673,448,256,448z M384,128c-17.673,0-32-14.327-32-32 s14.327-32,32-32s32,14.327,32,32S401.673,128,384,128z' })
			);
		}
	}]);

	return Network;
}(_react2.default.Component);

exports.default = Network;
;Network.defaultProps = { bare: false };