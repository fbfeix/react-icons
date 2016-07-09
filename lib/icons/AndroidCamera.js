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

var AndroidCamera = function (_React$Component) {
	_inherits(AndroidCamera, _React$Component);

	function AndroidCamera() {
		_classCallCheck(this, AndroidCamera);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCamera).apply(this, arguments));
	}

	_createClass(AndroidCamera, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('circle', { cx: '256', cy: '280', r: '63' }),
					_react2.default.createElement('path', { d: 'M440,96h-88l-32-32H192l-32,32H72c-22.092,0-40,17.908-40,40v272c0,22.092,17.908,40,40,40h368c22.092,0,40-17.908,40-40 V136C480,113.908,462.092,96,440,96z M256,392c-61.855,0-112-50.145-112-112s50.145-112,112-112s112,50.145,112,112 S317.855,392,256,392z' })
				)
			);
		}
	}]);

	return AndroidCamera;
}(_react2.default.Component);

exports.default = AndroidCamera;
;