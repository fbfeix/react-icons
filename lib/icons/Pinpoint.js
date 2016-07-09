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

var Pinpoint = function (_React$Component) {
	_inherits(Pinpoint, _React$Component);

	function Pinpoint() {
		_classCallCheck(this, Pinpoint);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Pinpoint).apply(this, arguments));
	}

	_createClass(Pinpoint, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z M391.8,391.8c-32.5,32.5-74.6,51.9-119.8,55.6L264,384h-16l-7.9,63.3c-45.3-3.7-87.4-23.1-119.8-55.6 c-32.5-32.5-51.9-74.6-55.6-119.8L128,264v-16l-63.3-7.9c3.7-45.3,23.1-87.4,55.6-119.8c32.5-32.5,74.6-51.9,119.8-55.6L248,128h16 l7.9-63.3c45.3,3.7,87.4,23.1,119.8,55.6c32.5,32.5,51.9,74.6,55.6,119.8L384,248v16l63.3,7.9C443.6,317.2,424.2,359.3,391.8,391.8z ' })
			);
		}
	}]);

	return Pinpoint;
}(_react2.default.Component);

exports.default = Pinpoint;
;