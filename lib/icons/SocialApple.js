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

var SocialApple = function (_React$Component) {
	_inherits(SocialApple, _React$Component);

	function SocialApple() {
		_classCallCheck(this, SocialApple);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialApple).apply(this, arguments));
	}

	_createClass(SocialApple, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M333.6,153.9c-33.6,0-47.8,16.5-71.2,16.5c-24,0-42.3-16.4-71.4-16.4c-28.5,0-58.9,17.9-78.2,48.4 c-27.1,43-22.5,124,21.4,193c15.7,24.7,36.7,52.4,64.2,52.7c0.2,0,0.3,0,0.5,0c23.9,0,31-16.1,63.9-16.3c0.2,0,0.3,0,0.5,0 c32.4,0,38.9,16.2,62.7,16.2c0.2,0,0.3,0,0.5,0c27.5-0.3,49.6-31,65.3-55.6c11.3-17.7,15.5-26.6,24.2-46.6 c-63.5-24.8-73.7-117.4-10.9-152.9C385.9,168.2,359,153.9,333.6,153.9L333.6,153.9z' }),
					_react2.default.createElement('path', { d: 'M326.2,64c-20,1.4-43.3,14.5-57,31.6c-12.4,15.5-22.6,38.5-18.6,60.8c0.5,0,1,0,1.6,0c21.3,0,43.1-13.2,55.8-30.1 C320.3,110.2,329.6,87.4,326.2,64L326.2,64z' })
				)
			);
		}
	}]);

	return SocialApple;
}(_react2.default.Component);

exports.default = SocialApple;
;