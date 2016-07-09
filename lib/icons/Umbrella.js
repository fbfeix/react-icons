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

var Umbrella = function (_React$Component) {
	_inherits(Umbrella, _React$Component);

	function Umbrella() {
		_classCallCheck(this, Umbrella);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Umbrella).apply(this, arguments));
	}

	_createClass(Umbrella, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M376.2,288c0,0.1,0,0.2,0,0.4C376.2,288.2,376.2,288.1,376.2,288L376.2,288z' }),
						_react2.default.createElement('path', { d: 'M136.2,288c0,0.1,0,0.2,0,0.4C136.2,288.2,136.2,288.1,136.2,288L136.2,288z' })
					),
					_react2.default.createElement('path', { d: 'M272,48.8c0-0.3,0-0.5,0-0.8c0-8.8-7.2-16-16-16c-8.8,0-16,7.2-16,16c0,0.2,0,0.5,0,0.7c-116.3,8-208,103.1-208,221.4 c0,3.6,0.2,14.2,0.4,17.8c2.7-26.3,24.7-51.7,51.7-51.7c28.7,0,51.9,23.1,52.1,51.7h0c0.2-28.6,23.4-51.7,52.1-51.7 c26.5,0,50.9,21.1,51.7,45.5V416c0,17.9-14.1,32-32,32c-17.1,0-31-14.4-31-32c0-8.8-7.2-16-16-16s-16,7.2-16,16 c0,35.3,28.3,64,63,64c17.3,0,33.5-6.7,45.5-18.8c11.9-12,18.5-28.1,18.5-45.2l0-135.3c3.3-32.7,23.4-44.4,52.1-44.4 c28.7,0,51.9,23.1,52.1,51.7h0c0.2-28.6,23.4-51.7,52.1-51.7c26.1,0,47.6,26.7,51.4,51.7c0.1-2.8,0.2-9.1,0.2-11.8 C480,157.8,388.2,57.3,272,48.8z' })
				)
			);
		}
	}]);

	return Umbrella;
}(_react2.default.Component);

exports.default = Umbrella;
;