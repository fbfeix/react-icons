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

var AndroidAlarmClock = function (_React$Component) {
	_inherits(AndroidAlarmClock, _React$Component);

	function AndroidAlarmClock() {
		_classCallCheck(this, AndroidAlarmClock);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidAlarmClock).apply(this, arguments));
	}

	_createClass(AndroidAlarmClock, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_2_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M470,124.837l-98.443-81.78l-27.814,32.931l98.442,81.769L470,124.837z M167.192,74.919L139.366,42L42,124.837 l27.814,32.919L167.192,74.919z M266.701,172.628h-32.101v127.446l101.649,60.539l16.051-26.553l-85.6-49.917V172.628z M256,87.665c-107,0-192.601,86.021-192.601,191.166C63.399,383.98,149,470,256,470c105.936,0,192.601-86.02,192.601-191.169 C448.601,173.687,361.936,87.665,256,87.665z M256,427.52c-82.393,0-149.8-66.906-149.8-148.688 c0-81.777,67.407-148.684,149.8-148.684c82.394,0,149.8,66.906,149.8,148.684C405.8,361.671,338.394,427.52,256,427.52z' })
					)
				)
			);
		}
	}]);

	return AndroidAlarmClock;
}(_react2.default.Component);

exports.default = AndroidAlarmClock;
;