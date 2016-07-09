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

var AndroidOptions = function (_React$Component) {
	_inherits(AndroidOptions, _React$Component);

	function AndroidOptions() {
		_classCallCheck(this, AndroidOptions);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidOptions).apply(this, arguments));
	}

	_createClass(AndroidOptions, [{
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
						_react2.default.createElement('rect', { x: '32', y: '384', width: '272', height: '32' }),
						_react2.default.createElement('rect', { x: '400', y: '384', width: '80', height: '32' }),
						_react2.default.createElement('path', { d: 'M384,447.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0 c17.673,0,32,14.551,32,32.5V447.5z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '32', y: '240', width: '80', height: '32' }),
						_react2.default.createElement('rect', { x: '208', y: '240', width: '272', height: '32' }),
						_react2.default.createElement('path', { d: 'M192,303.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0 c17.673,0,32,14.551,32,32.5V303.5z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '32', y: '96', width: '272', height: '32' }),
						_react2.default.createElement('rect', { x: '400', y: '96', width: '80', height: '32' }),
						_react2.default.createElement('path', { d: 'M384,159.5c0,17.949-14.327,32.5-32,32.5l0,0c-17.673,0-32-14.551-32-32.5v-95c0-17.949,14.327-32.5,32-32.5l0,0 c17.673,0,32,14.551,32,32.5V159.5z' })
					)
				)
			);
		}
	}]);

	return AndroidOptions;
}(_react2.default.Component);

exports.default = AndroidOptions;
;