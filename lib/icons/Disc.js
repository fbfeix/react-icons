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

var Disc = function (_React$Component) {
	_inherits(Disc, _React$Component);

	function Disc() {
		_classCallCheck(this, Disc);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Disc).apply(this, arguments));
	}

	_createClass(Disc, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,158.9c-53.7,0-97.2,43.5-97.2,97.2c0,53.7,43.5,97.1,97.2,97.1c53.7,0,97.2-43.5,97.2-97.1 C353.2,202.4,309.7,158.9,256,158.9z M256,299.5c-24,0-43.5-19.5-43.5-43.5c0-24,19.5-43.5,43.5-43.5c24,0,43.5,19.5,43.5,43.5 C299.5,280,280,299.5,256,299.5z' }),
						_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224s224-100.3,224-224C480,132.3,379.7,32,256,32z M256,378.8 c-67.8,0-122.8-55-122.8-122.8c0-67.8,55-122.8,122.8-122.8c67.8,0,122.8,55,122.8,122.8C378.8,323.8,323.8,378.8,256,378.8z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,158.9c-53.7,0-97.2,43.5-97.2,97.2c0,53.7,43.5,97.1,97.2,97.1c53.7,0,97.2-43.5,97.2-97.1 C353.2,202.4,309.7,158.9,256,158.9z M256,299.5c-24,0-43.5-19.5-43.5-43.5c0-24,19.5-43.5,43.5-43.5c24,0,43.5,19.5,43.5,43.5 C299.5,280,280,299.5,256,299.5z' }),
					_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224s224-100.3,224-224C480,132.3,379.7,32,256,32z M256,378.8 c-67.8,0-122.8-55-122.8-122.8c0-67.8,55-122.8,122.8-122.8c67.8,0,122.8,55,122.8,122.8C378.8,323.8,323.8,378.8,256,378.8z' })
				)
			);
		}
	}]);

	return Disc;
}(_react2.default.Component);

exports.default = Disc;
;Disc.defaultProps = { bare: false };