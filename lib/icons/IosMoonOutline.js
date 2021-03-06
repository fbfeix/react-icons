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

var IosMoonOutline = function (_React$Component) {
	_inherits(IosMoonOutline, _React$Component);

	function IosMoonOutline() {
		_classCallCheck(this, IosMoonOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosMoonOutline).apply(this, arguments));
	}

	_createClass(IosMoonOutline, [{
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
							_react2.default.createElement('path', { d: 'M343.1,315c-1.8,0.1-3.5,0.1-5.3,0.1c-29.1,0-56.5-11.3-77.1-31.9c-20.6-20.6-31.9-48-31.9-77.1 c0-16.6,3.7-32.6,10.6-47.1c3.1-6.4,6.8-12.5,11.1-18.2c-7.6,0.8-14.9,2.4-22,4.6c-46.8,14.8-80.7,58.5-80.7,110.2 c0,63.8,51.7,115.5,115.5,115.5c35.3,0,66.8-15.8,88-40.7c4.8-5.7,9.2-11.9,12.8-18.5C357.3,313.6,350.3,314.7,343.1,315z M263.3,355.1c-54.9,0-99.5-44.6-99.5-99.5c0-39.1,22.6-72.9,55.4-89.2c-4.2,12.5-6.4,25.8-6.4,39.7c0,65.9,51,119.9,115.6,124.7 C311,346,288.2,355.1,263.3,355.1z' })
						)
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
						_react2.default.createElement('path', { d: 'M343.1,315c-1.8,0.1-3.5,0.1-5.3,0.1c-29.1,0-56.5-11.3-77.1-31.9c-20.6-20.6-31.9-48-31.9-77.1 c0-16.6,3.7-32.6,10.6-47.1c3.1-6.4,6.8-12.5,11.1-18.2c-7.6,0.8-14.9,2.4-22,4.6c-46.8,14.8-80.7,58.5-80.7,110.2 c0,63.8,51.7,115.5,115.5,115.5c35.3,0,66.8-15.8,88-40.7c4.8-5.7,9.2-11.9,12.8-18.5C357.3,313.6,350.3,314.7,343.1,315z M263.3,355.1c-54.9,0-99.5-44.6-99.5-99.5c0-39.1,22.6-72.9,55.4-89.2c-4.2,12.5-6.4,25.8-6.4,39.7c0,65.9,51,119.9,115.6,124.7 C311,346,288.2,355.1,263.3,355.1z' })
					)
				)
			);
		}
	}]);

	return IosMoonOutline;
}(_react2.default.Component);

exports.default = IosMoonOutline;
;IosMoonOutline.defaultProps = { bare: false };