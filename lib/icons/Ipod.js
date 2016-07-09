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

var Ipod = function (_React$Component) {
	_inherits(Ipod, _React$Component);

	function Ipod() {
		_classCallCheck(this, Ipod);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Ipod).apply(this, arguments));
	}

	_createClass(Ipod, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,311c-17.7,0-32,14.3-32,32c0,17.6,14.3,32,32,32c17.6,0,32-14.3,32-32C288,325.3,273.7,311,256,311z' }),
						_react2.default.createElement('path', { d: 'M340.4,64H171.6C156.4,64,144,76.2,144,91.7v328.7c0,15.5,12.4,27.7,27.6,27.7h168.8c15.2,0,27.6-12.2,27.6-27.7V91.7 C368,76.2,355.6,64,340.4,64z M256.1,416.1c-39.8,0-72.1-32.2-72.1-72c0-39.7,32.3-72,72.1-72c39.7,0,71.9,32.3,71.9,72 C328,383.9,295.8,416.1,256.1,416.1z M335.9,226.8c-0.8,7.6-7,13.2-14.7,13.2h-131c-8.2,0-14.2-6.2-14.2-14.6V110.9 c0-7.5,5-13.7,12-14.9l135.8,0c6.5,1.2,11.5,6.6,12.2,13.3L335.9,226.8z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,311c-17.7,0-32,14.3-32,32c0,17.6,14.3,32,32,32c17.6,0,32-14.3,32-32C288,325.3,273.7,311,256,311z' }),
					_react2.default.createElement('path', { d: 'M340.4,64H171.6C156.4,64,144,76.2,144,91.7v328.7c0,15.5,12.4,27.7,27.6,27.7h168.8c15.2,0,27.6-12.2,27.6-27.7V91.7 C368,76.2,355.6,64,340.4,64z M256.1,416.1c-39.8,0-72.1-32.2-72.1-72c0-39.7,32.3-72,72.1-72c39.7,0,71.9,32.3,71.9,72 C328,383.9,295.8,416.1,256.1,416.1z M335.9,226.8c-0.8,7.6-7,13.2-14.7,13.2h-131c-8.2,0-14.2-6.2-14.2-14.6V110.9 c0-7.5,5-13.7,12-14.9l135.8,0c6.5,1.2,11.5,6.6,12.2,13.3L335.9,226.8z' })
				)
			);
		}
	}]);

	return Ipod;
}(_react2.default.Component);

exports.default = Ipod;
;Ipod.defaultProps = { bare: false };