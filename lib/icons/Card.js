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

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).apply(this, arguments));
	}

	_createClass(Card, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M452,96H60c-15.5,0-27.9,12.5-28,28l0,0v0.3v263.4v0.3l0,0c0.2,15.5,12.5,28,28,28h392c15.6,0,28-12.7,28-28.3v0V124.3v0 C480,108.7,467.6,96,452,96z M77.1,128h357.7c6.9,0,12.1,5.1,13.1,12v20H64v-20.3C65,132.9,70.3,128,77.1,128z M434.9,384H77.1 c-6.9,0-12.1-4.9-13.1-11.7V256h384v116C447,378.9,441.7,384,434.9,384z' }),
					_react2.default.createElement('rect', { x: '96', y: '304', width: '192', height: '16' }),
					_react2.default.createElement('rect', { x: '96', y: '336', width: '96', height: '16' }),
					_react2.default.createElement('rect', { x: '352', y: '304', width: '64', height: '48' })
				)
			);
		}
	}]);

	return Card;
}(_react2.default.Component);

exports.default = Card;
;