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

var AndroidCart = function (_React$Component) {
	_inherits(AndroidCart, _React$Component);

	function AndroidCart() {
		_classCallCheck(this, AndroidCart);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCart).apply(this, arguments));
	}

	_createClass(AndroidCart, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { fill: '#010101', d: 'M169.6,377.6c-22.882,0-41.6,18.718-41.6,41.601c0,22.882,18.718,41.6,41.6,41.6s41.601-18.718,41.601-41.6 C211.2,396.317,192.481,377.6,169.6,377.6z M48,51.2v41.6h41.6l74.883,151.682l-31.308,50.954c-3.118,5.2-5.2,12.482-5.2,19.765 c0,27.85,19.025,41.6,44.825,41.6H416v-40H177.893c-3.118,0-5.2-2.082-5.2-5.2c0-1.036,2.207-5.2,2.207-5.2l20.782-32.8h154.954 c15.601,0,29.128-8.317,36.4-21.836l74.882-128.8c1.237-2.461,2.082-6.246,2.082-10.399c0-11.446-9.364-19.765-20.8-19.765H135.364 L115.6,51.2H48z M374.399,377.6c-22.882,0-41.6,18.718-41.6,41.601c0,22.882,18.718,41.6,41.6,41.6S416,442.082,416,419.2 C416,396.317,397.281,377.6,374.399,377.6z' })
				)
			);
		}
	}]);

	return AndroidCart;
}(_react2.default.Component);

exports.default = AndroidCart;
;