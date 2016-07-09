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

var Fork = function (_React$Component) {
	_inherits(Fork, _React$Component);

	function Fork() {
		_classCallCheck(this, Fork);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Fork).apply(this, arguments));
	}

	_createClass(Fork, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M270.2,148.9C270.2,149,270.1,149,270.2,148.9v0.1V148.9z' }),
					_react2.default.createElement('path', { d: 'M320,166c0-43.2-15-93.2-24-133.7V32h-8l-0.2,116.9c0,6.1-2.9,11.1-9,11.1c-5.7,0-8-4.3-8.6-9.9c-0.1-0.4,0-0.8,0-1.2 L259.9,32h-8l-9,117l-0.1,1.1c-0.6,5.6-3.7,9.9-9.5,9.9c-6.1,0-9.1-5-9.1-11.1L223.8,32h-8C207,73,192,122.9,192,166.1 c0,25.7,14.6,48.1,36.7,58.2c11.2,5.1,11.3,10.3,11.3,10.3s-16,201.7-16,213.1c0,11.4,4,18.5,9.5,24s14.2,8.2,22.4,8.2 c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c8.2,0,16.8-2.7,22.4-8.2c5.5-5.5,9.3-10.9,9.3-24c0-13.1-16-213.1-16-213.1s-1-5,11.4-10.6 C305,214.2,320,191.8,320,166z' })
				)
			);
		}
	}]);

	return Fork;
}(_react2.default.Component);

exports.default = Fork;
;