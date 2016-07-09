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

var SocialDropboxOutline = function (_React$Component) {
	_inherits(SocialDropboxOutline, _React$Component);

	function SocialDropboxOutline() {
		_classCallCheck(this, SocialDropboxOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialDropboxOutline).apply(this, arguments));
	}

	_createClass(SocialDropboxOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M177,77.1L64,151l78.3,63L256,143.2L177,77.1z M91.4,153.3l84.5-56.8l52.9,46L143.4,195L91.4,153.3z' }),
					_react2.default.createElement('path', { d: 'M369.8,213L256,284.1l79,66.1l19-12.6v20.2L256,417l-98-58.5V338l19,12.2l79-66.1L142.2,213L64,276.3l78,51.5v39.4 l114,67.8l114-68.5v-39.2l78-51.2L369.8,213z M143.4,230.9l85.4,55.4l-52.9,44.1l-84.5-55.8L143.4,230.9z M283.2,286.3l85.4-55.4 l52.1,43.6l-84.5,55.8L283.2,286.3z' }),
					_react2.default.createElement('path', { d: 'M448,151L335,77.1l-79,66.1l113.8,70.8L448,151z M283.2,142.6l52.9-46l84.5,56.8L368.6,195L283.2,142.6z' })
				)
			);
		}
	}]);

	return SocialDropboxOutline;
}(_react2.default.Component);

exports.default = SocialDropboxOutline;
;