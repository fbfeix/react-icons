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

var IosLightbulb = function (_React$Component) {
	_inherits(IosLightbulb, _React$Component);

	function IosLightbulb() {
		_classCallCheck(this, IosLightbulb);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosLightbulb).apply(this, arguments));
	}

	_createClass(IosLightbulb, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M400,172.9C400,95.1,333.9,32,256,32c-77.9,0-144,63.1-144,141c0,31,13.2,59,30.2,83h-0.3c10.9,15,21.4,27.7,31.5,45 c22,37.8,18.6,74.3,18.7,81.6v1.4h32V256l-32-64h16.6l31.4,64v128h32V256l31.4-64H320l-32,64v128h32v-1.4 c0-8.9-3.6-43.8,18.4-81.6c10.1-17.3,20.6-30,31.5-45h-0.1C386.8,232,400,204,400,172.9z' })
					),
					_react2.default.createElement('rect', { x: '224', y: '464', width: '64', height: '16' }),
					_react2.default.createElement('rect', { x: '208', y: '432', width: '96', height: '16' }),
					_react2.default.createElement('rect', { x: '208', y: '400', width: '96', height: '16' })
				)
			);
		}
	}]);

	return IosLightbulb;
}(_react2.default.Component);

exports.default = IosLightbulb;
;