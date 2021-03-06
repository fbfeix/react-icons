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

var Chatbubble = function (_React$Component) {
	_inherits(Chatbubble, _React$Component);

	function Chatbubble() {
		_classCallCheck(this, Chatbubble);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Chatbubble).apply(this, arguments));
	}

	_createClass(Chatbubble, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,449.4c28.9,0,56.4-5.7,81.3-15.9c0.6-0.3,1.1-0.5,1.7-0.7c0.1,0,0.2,0,0.2-0.1c3.5-1.3,7.3-2,11.2-2 c4.3,0,8.4,0.8,12.1,2.4l84,30.9l-22.1-88.4c0-5.3,1.5-10.3,3.9-14.6c0,0,0,0,0,0c0.8-1.3,1.6-2.6,2.5-3.7 c20.9-31.3,33-68.5,33-108.4C464,137.9,370.9,48,256,48C141.1,48,48,137.9,48,248.7C48,359.6,141.1,449.4,256,449.4z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,449.4c28.9,0,56.4-5.7,81.3-15.9c0.6-0.3,1.1-0.5,1.7-0.7c0.1,0,0.2,0,0.2-0.1c3.5-1.3,7.3-2,11.2-2 c4.3,0,8.4,0.8,12.1,2.4l84,30.9l-22.1-88.4c0-5.3,1.5-10.3,3.9-14.6c0,0,0,0,0,0c0.8-1.3,1.6-2.6,2.5-3.7 c20.9-31.3,33-68.5,33-108.4C464,137.9,370.9,48,256,48C141.1,48,48,137.9,48,248.7C48,359.6,141.1,449.4,256,449.4z' })
			);
		}
	}]);

	return Chatbubble;
}(_react2.default.Component);

exports.default = Chatbubble;
;Chatbubble.defaultProps = { bare: false };