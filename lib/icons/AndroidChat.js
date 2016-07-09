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

var AndroidChat = function (_React$Component) {
	_inherits(AndroidChat, _React$Component);

	function AndroidChat() {
		_classCallCheck(this, AndroidChat);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidChat).apply(this, arguments));
	}

	_createClass(AndroidChat, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M391.553,64H57.607C53.131,64,48,67.745,48,72.159v214.217c0,4.413,5.131,8.624,9.607,8.624H115v88.894L205.128,295 h186.425c4.477,0,7.447-4.211,7.447-8.624V72.159C399,67.745,396.029,64,391.553,64z' }),
						_react2.default.createElement('path', { d: 'M456.396,127H424v166.57c0,15.987-6.915,26.43-25.152,26.43H218.096l-38.905,39h129.688L399,448v-89h57.396 c4.478,0,7.604-4.262,7.604-8.682V136.103C464,131.689,460.874,127,456.396,127z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M391.553,64H57.607C53.131,64,48,67.745,48,72.159v214.217c0,4.413,5.131,8.624,9.607,8.624H115v88.894L205.128,295 h186.425c4.477,0,7.447-4.211,7.447-8.624V72.159C399,67.745,396.029,64,391.553,64z' }),
					_react2.default.createElement('path', { d: 'M456.396,127H424v166.57c0,15.987-6.915,26.43-25.152,26.43H218.096l-38.905,39h129.688L399,448v-89h57.396 c4.478,0,7.604-4.262,7.604-8.682V136.103C464,131.689,460.874,127,456.396,127z' })
				)
			);
		}
	}]);

	return AndroidChat;
}(_react2.default.Component);

exports.default = AndroidChat;
;AndroidChat.defaultProps = { bare: false };