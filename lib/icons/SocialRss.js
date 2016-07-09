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

var SocialRss = function (_React$Component) {
	_inherits(SocialRss, _React$Component);

	function SocialRss() {
		_classCallCheck(this, SocialRss);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialRss).apply(this, arguments));
	}

	_createClass(SocialRss, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M119.9,336.1c-30.8,0-55.9,25.1-55.9,55.8c0,30.8,25.1,55.6,55.9,55.6c30.9,0,55.9-24.9,55.9-55.6 C175.8,361.2,150.8,336.1,119.9,336.1z' }),
					_react2.default.createElement('path', { d: 'M64,192v79.9c48,0,94.1,14.2,128,48.1c33.9,33.9,48,79.9,48,128h80C320,308.1,204,192,64,192z' }),
					_react2.default.createElement('path', { d: 'M64,64v79.9c171,0,303.9,133,303.9,304.1H448C448,236.3,276,64,64,64z' })
				)
			);
		}
	}]);

	return SocialRss;
}(_react2.default.Component);

exports.default = SocialRss;
;