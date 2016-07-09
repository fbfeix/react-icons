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

var ChatboxWorking = function (_React$Component) {
	_inherits(ChatboxWorking, _React$Component);

	function ChatboxWorking() {
		_classCallCheck(this, ChatboxWorking);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ChatboxWorking).apply(this, arguments));
	}

	_createClass(ChatboxWorking, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M124.3,400H277c14.4,0,14.4,0.1,21.3,5.2S384,464,384,464v-64h3.7c42.2,0,76.3-31.8,76.3-71.4V119.7 c0-39.6-34.2-71.7-76.3-71.7H124.3C82.2,48,48,80.1,48,119.7v208.9C48,368.2,82.2,400,124.3,400z M352.1,192c17.7,0,32,14.3,32,32 c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C320.1,206.3,334.4,192,352.1,192z M256.1,192c17.7,0,32,14.3,32,32 c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C224.1,206.3,238.4,192,256.1,192z M160.1,192c17.7,0,32,14.3,32,32 c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C128.1,206.3,142.4,192,160.1,192z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M124.3,400H277c14.4,0,14.4,0.1,21.3,5.2S384,464,384,464v-64h3.7c42.2,0,76.3-31.8,76.3-71.4V119.7 c0-39.6-34.2-71.7-76.3-71.7H124.3C82.2,48,48,80.1,48,119.7v208.9C48,368.2,82.2,400,124.3,400z M352.1,192c17.7,0,32,14.3,32,32 c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C320.1,206.3,334.4,192,352.1,192z M256.1,192c17.7,0,32,14.3,32,32 c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C224.1,206.3,238.4,192,256.1,192z M160.1,192c17.7,0,32,14.3,32,32 c0,17.7-14.3,32-32,32c-17.7,0-32-14.3-32-32C128.1,206.3,142.4,192,160.1,192z' })
			);
		}
	}]);

	return ChatboxWorking;
}(_react2.default.Component);

exports.default = ChatboxWorking;
;ChatboxWorking.defaultProps = { bare: false };