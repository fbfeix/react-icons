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

var SocialYahoo = function (_React$Component) {
	_inherits(SocialYahoo, _React$Component);

	function SocialYahoo() {
		_classCallCheck(this, SocialYahoo);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialYahoo).apply(this, arguments));
	}

	_createClass(SocialYahoo, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M384.6,68.4c-11.3,0-22.5-0.8-32.6-4.4l-96,160L160,64c-10.1,3.6-20.7,4.4-32,4.4c-11.1,0-22.1-0.9-32-4.4l128,212.7V448 c10-3.5,20.8-4.4,32-4.4s22,0.9,32,4.4V277L416,64C406.1,67.4,395.7,68.4,384.6,68.4z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M384.6,68.4c-11.3,0-22.5-0.8-32.6-4.4l-96,160L160,64c-10.1,3.6-20.7,4.4-32,4.4c-11.1,0-22.1-0.9-32-4.4l128,212.7V448 c10-3.5,20.8-4.4,32-4.4s22,0.9,32,4.4V277L416,64C406.1,67.4,395.7,68.4,384.6,68.4z' })
			);
		}
	}]);

	return SocialYahoo;
}(_react2.default.Component);

exports.default = SocialYahoo;
;SocialYahoo.defaultProps = { bare: false };