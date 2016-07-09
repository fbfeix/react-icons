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

var Medkit = function (_React$Component) {
	_inherits(Medkit, _React$Component);

	function Medkit() {
		_classCallCheck(this, Medkit);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Medkit).apply(this, arguments));
	}

	_createClass(Medkit, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M472.2,144H352v-30.7C351,85.1,330.3,64,300.8,64H256h-44.8c-29.4,0-50.2,21.1-51.2,49.3V144H39.8c-4.4,0-7.8,3.6-7.8,8 v288c0,4.4,3.3,8,7.8,8h432.5c4.4,0,7.8-3.6,7.8-8V152C480,147.6,476.7,144,472.2,144z M192,117.2c0-0.4,0-0.7,0-1s0-0.6,0-1 c0-9.7,8.6-19.3,18.8-19.3H256h45.2c10.1,0,18.8,9.5,18.8,19.3c0,0.3,0,0.6,0,1s0,0.6,0,1V144H192V117.2z M352,320h-64v64h-64v-64 h-64v-64h64v-64h64v64h64V320z' })
				)
			);
		}
	}]);

	return Medkit;
}(_react2.default.Component);

exports.default = Medkit;
;