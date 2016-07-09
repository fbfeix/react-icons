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

var Filing = function (_React$Component) {
	_inherits(Filing, _React$Component);

	function Filing() {
		_classCallCheck(this, Filing);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Filing).apply(this, arguments));
	}

	_createClass(Filing, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M381,128.6H132.1c-12.1,0-19.5,0-19.5,20.4v28.1h288V149C400.6,128.6,393.2,128.6,381,128.6z' }),
					_react2.default.createElement('path', { d: 'M333,96.5H180c-13.1,0-19.5,0.3-19.5,18.7h192C352.4,96.8,346.1,96.5,333,96.5z' }),
					_react2.default.createElement('path', { d: 'M432.4,169.6l-15.9-9.4v32.3h-321v-32.3l-15.2,9.4c-14.3,8.9-17.8,15.3-15,40.9l17.5,184.8c3.7,20.7,15.9,21.2,24,21.2 h299.9c8.1,0,20.2-0.5,23.9-21.2l17.2-184.4C450.1,186.5,445.8,178.1,432.4,169.6z' })
				)
			);
		}
	}]);

	return Filing;
}(_react2.default.Component);

exports.default = Filing;
;