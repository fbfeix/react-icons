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

var IosLightbulbOutline = function (_React$Component) {
	_inherits(IosLightbulbOutline, _React$Component);

	function IosLightbulbOutline() {
		_classCallCheck(this, IosLightbulbOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosLightbulbOutline).apply(this, arguments));
	}

	_createClass(IosLightbulbOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M400,172.9C400,95.1,333.9,32,256,32c-77.9,0-144,63.1-144,141c0,31,13.2,59,30.2,83h-0.3c10.9,15,21.4,27.7,31.5,45 c22,37.8,18.6,74.3,18.7,81.6v1.4h128v-1.4c0-8.9-3.6-43.8,18.4-81.6c10.1-17.3,20.6-30,31.5-45h-0.1C386.8,232,400,204,400,172.9z M351,254.4c-0.6,0.8-1.1,1.5-1.7,2.3c-8.1,10.9-16.5,22.2-24.7,36.1c-17.3,29.7-20.4,57.9-20.8,75.1H288V256l32-64h-16.6L272,256 v112h-32V256l-31.4-64H192l32,64v112h-15.9c-0.5-17.2-3.9-45.7-20.9-75c-4.5-7.7-9.1-15-13.7-21h0.2l-18.6-25.6 c-15.8-21.6-27.1-47.1-27.1-73.6c0-33.4,16-64.8,39.6-88.4s55-36.7,88.4-36.7c33.4,0,64.8,13.1,88.4,36.7 c23.6,23.6,39.6,55,39.6,88.4c0,26.5-11.3,51.9-27.1,73.5L351,254.4z' }),
					_react2.default.createElement('rect', { x: '224', y: '464', width: '64', height: '16' }),
					_react2.default.createElement('rect', { x: '208', y: '432', width: '96', height: '16' }),
					_react2.default.createElement('rect', { x: '208', y: '400', width: '96', height: '16' })
				)
			);
		}
	}]);

	return IosLightbulbOutline;
}(_react2.default.Component);

exports.default = IosLightbulbOutline;
;