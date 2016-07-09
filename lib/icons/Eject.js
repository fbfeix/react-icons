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

var Eject = function (_React$Component) {
	_inherits(Eject, _React$Component);

	function Eject() {
		_classCallCheck(this, Eject);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Eject).apply(this, arguments));
	}

	_createClass(Eject, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M399,320L399,320c10,0,16.8-7.1,16.8-15.9c0-3.3-1.1-6.1-2.8-9L275.3,104.7c-4.6-5.3-11.5-8.7-19.3-8.7 c-7.7,0-14.6,3.4-19.2,8.7l-138,190.8c-1.7,2.6-2.6,5.5-2.6,8.7c0,8.7,6.8,15.8,16.8,15.8v0H399z' }),
						_react2.default.createElement('path', { d: 'M403.7,352H108.4c-6.8,0-12.4,5.4-12.4,12.2v39.6c0,6.7,5.5,12.2,12.4,12.2h295.3c6.8,0,12.3-5.5,12.3-12.2v-39.6 C416,357.4,410.5,352,403.7,352z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M399,320L399,320c10,0,16.8-7.1,16.8-15.9c0-3.3-1.1-6.1-2.8-9L275.3,104.7c-4.6-5.3-11.5-8.7-19.3-8.7 c-7.7,0-14.6,3.4-19.2,8.7l-138,190.8c-1.7,2.6-2.6,5.5-2.6,8.7c0,8.7,6.8,15.8,16.8,15.8v0H399z' }),
					_react2.default.createElement('path', { d: 'M403.7,352H108.4c-6.8,0-12.4,5.4-12.4,12.2v39.6c0,6.7,5.5,12.2,12.4,12.2h295.3c6.8,0,12.3-5.5,12.3-12.2v-39.6 C416,357.4,410.5,352,403.7,352z' })
				)
			);
		}
	}]);

	return Eject;
}(_react2.default.Component);

exports.default = Eject;
;Eject.defaultProps = { bare: false };