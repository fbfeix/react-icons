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

var Briefcase = function (_React$Component) {
	_inherits(Briefcase, _React$Component);

	function Briefcase() {
		_classCallCheck(this, Briefcase);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Briefcase).apply(this, arguments));
	}

	_createClass(Briefcase, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M272,272h-32v-8H32v176c0,4.4,3.3,8,7.8,8h432.5c4.4,0,7.7-3.6,7.7-8V264H272V272z' }),
						_react2.default.createElement('path', { d: 'M472.2,144H352v-30.7C351,85.1,330.3,64,300.8,64h-89.6c-29.4,0-50.2,21.1-51.2,49.3V144H39.8c-4.4,0-7.8,3.6-7.8,8v96h208 v-8h32v8h208v-96C480,147.6,476.7,144,472.2,144z M320,116.2c0,0.3,0,0.6,0,1V144H192v-26.8c0-0.4,0-0.7,0-1c0-0.3,0-0.6,0-1 c0-9.7,8.6-19.2,18.8-19.2h90.4c10.1,0,18.8,9.4,18.8,19.2C320,115.6,320,115.9,320,116.2z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M272,272h-32v-8H32v176c0,4.4,3.3,8,7.8,8h432.5c4.4,0,7.7-3.6,7.7-8V264H272V272z' }),
					_react2.default.createElement('path', { d: 'M472.2,144H352v-30.7C351,85.1,330.3,64,300.8,64h-89.6c-29.4,0-50.2,21.1-51.2,49.3V144H39.8c-4.4,0-7.8,3.6-7.8,8v96h208 v-8h32v8h208v-96C480,147.6,476.7,144,472.2,144z M320,116.2c0,0.3,0,0.6,0,1V144H192v-26.8c0-0.4,0-0.7,0-1c0-0.3,0-0.6,0-1 c0-9.7,8.6-19.2,18.8-19.2h90.4c10.1,0,18.8,9.4,18.8,19.2C320,115.6,320,115.9,320,116.2z' })
				)
			);
		}
	}]);

	return Briefcase;
}(_react2.default.Component);

exports.default = Briefcase;
;Briefcase.defaultProps = { bare: false };