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

var More = function (_React$Component) {
	_inherits(More, _React$Component);

	function More() {
		_classCallCheck(this, More);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(More).apply(this, arguments));
	}

	_createClass(More, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M113.7,304C86.2,304,64,282.6,64,256c0-26.5,22.2-48,49.7-48c27.6,0,49.8,21.5,49.8,48C163.5,282.6,141.3,304,113.7,304z' }),
					_react2.default.createElement('path', { d: 'M256,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.3-48,49.8-48c27.5,0,49.7,21.5,49.7,48C305.7,282.6,283.5,304,256,304z' }),
					_react2.default.createElement('path', { d: 'M398.2,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.2-48,49.8-48c27.5,0,49.8,21.5,49.8,48C448,282.6,425.8,304,398.2,304z' })
				)
			);
		}
	}]);

	return More;
}(_react2.default.Component);

exports.default = More;
;