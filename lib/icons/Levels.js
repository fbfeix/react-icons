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

var Levels = function (_React$Component) {
	_inherits(Levels, _React$Component);

	function Levels() {
		_classCallCheck(this, Levels);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Levels).apply(this, arguments));
	}

	_createClass(Levels, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M127,99.2V80c0-8.8-7.2-16-16-16s-16,7.2-16,16v21.5c-8.5,5.8-14,15.5-14,26.5s5.5,20.7,14,26.5V432c0,8.8,7.2,16,16,16 s16-7.2,16-16V156.8c10.7-5.2,18-16.1,18-28.8S137.7,104.4,127,99.2z' }),
					_react2.default.createElement('path', { d: 'M223,292.9V80c0-8.8-7.2-16-16-16s-16,7.2-16,16v211.7c-10.1,5.4-17,16-17,28.3s6.9,22.9,17,28.3V432c0,8.8,7.2,16,16,16 s16-7.2,16-16v-84.9c9-5.7,15-15.7,15-27.1S232,298.6,223,292.9z' }),
					_react2.default.createElement('path', { d: 'M319,163.3V80c0-8.8-7.2-16-16-16s-16,7.2-16,16v83.3c-9.6,5.5-16,15.9-16,27.7s6.4,22.2,16,27.7V432c0,8.8,7.2,16,16,16 s16-7.2,16-16V218.7c9.6-5.5,16-15.9,16-27.7S328.6,168.8,319,163.3z' }),
					_react2.default.createElement('path', { d: 'M431,383c0-11.8-6.4-22.2-16-27.7V80c0-8.8-7.2-16-16-16s-16,7.2-16,16v275.3c-9.6,5.5-16,15.9-16,27.7s6.4,22.2,16,27.7 V432c0,8.8,7.2,16,16,16s16-7.2,16-16v-21.3C424.6,405.2,431,394.8,431,383z' })
				)
			);
		}
	}]);

	return Levels;
}(_react2.default.Component);

exports.default = Levels;
;