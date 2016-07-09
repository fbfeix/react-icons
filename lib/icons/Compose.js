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

var Compose = function (_React$Component) {
	_inherits(Compose, _React$Component);

	function Compose() {
		_classCallCheck(this, Compose);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Compose).apply(this, arguments));
	}

	_createClass(Compose, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M442.8,99.6l-30.4-30.4c-7-6.9-18.2-6.9-25.1,0L355.5,101l55.5,55.5l31.8-31.7C449.7,117.7,449.7,106.5,442.8,99.6z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '346.1,110.5 174.1,288 160,352 224,337.9 400.6,164.9 \t\t' })
					),
					_react2.default.createElement('path', { d: 'M384,256v150c0,5.1-3.9,10.1-9.2,10.1s-269-0.1-269-0.1c-5.6,0-9.8-5.4-9.8-10s0-268,0-268c0-5,4.7-10,10.6-10H256l32-32 H87.4c-13,0-23.4,10.3-23.4,23.3v305.3c0,12.9,10.5,23.4,23.4,23.4h305.3c12.9,0,23.3-10.5,23.3-23.4V224L384,256z' })
				)
			);
		}
	}]);

	return Compose;
}(_react2.default.Component);

exports.default = Compose;
;