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

var AndroidMicrophone = function (_React$Component) {
	_inherits(AndroidMicrophone, _React$Component);

	function AndroidMicrophone() {
		_classCallCheck(this, AndroidMicrophone);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidMicrophone).apply(this, arguments));
	}

	_createClass(AndroidMicrophone, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,320c37.712,0,68.571-30.924,68.571-68.714V100.714C324.571,62.924,293.712,32,256,32s-68.571,30.924-68.571,68.714 v150.572C187.429,289.076,218.288,320,256,320z M377.139,244.548c0,68.714-58.282,116.815-121.139,116.815 s-121.139-48.102-121.139-116.815H96c0,77.873,61.719,143.153,137.144,153.465V480h45.713v-81.987 C354.281,386.561,416,322.421,416,244.548H377.139z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,320c37.712,0,68.571-30.924,68.571-68.714V100.714C324.571,62.924,293.712,32,256,32s-68.571,30.924-68.571,68.714 v150.572C187.429,289.076,218.288,320,256,320z M377.139,244.548c0,68.714-58.282,116.815-121.139,116.815 s-121.139-48.102-121.139-116.815H96c0,77.873,61.719,143.153,137.144,153.465V480h45.713v-81.987 C354.281,386.561,416,322.421,416,244.548H377.139z' })
				)
			);
		}
	}]);

	return AndroidMicrophone;
}(_react2.default.Component);

exports.default = AndroidMicrophone;
;AndroidMicrophone.defaultProps = { bare: false };