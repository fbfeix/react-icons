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

var Icecream = function (_React$Component) {
	_inherits(Icecream, _React$Component);

	function Icecream() {
		_classCallCheck(this, Icecream);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Icecream).apply(this, arguments));
	}

	_createClass(Icecream, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '128,256 256,480 384,256 \t' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M402.5,172.6c-0.8-0.4-1.5-0.8-2.3-1.3c-4.4-2.8-8.4-8.5-8.7-12.7l0.1-0.7c3.2-9,5-19.2,5-29.8c0-53.1-43-96.1-96.1-96.1 c-31.4,0-59.2,15-76.8,38.3c0,0-9.1,14-10.8,29c0,0,1.1-19.4,4.2-31.5c-7.4-2.5-15.4-3.8-23.6-3.8c-41.7,0-75.6,33.8-75.6,75.6 c0,6.4,0.8,12.6,2.3,18.5c0,0.4-0.1,0.7-0.2,1c-0.9,5.1-4,9.5-8.4,12.3c-0.7,0.5-1.5,0.9-2.2,1.3c-8.2,5-13.5,13.6-13.5,23.4 c0,15.4,13.5,28,29.9,28h4.1h252h4.1c16.4,0,29.8-12.5,29.8-28C416,186.3,410.6,177.6,402.5,172.6z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '128,256 256,480 384,256 \t' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M402.5,172.6c-0.8-0.4-1.5-0.8-2.3-1.3c-4.4-2.8-8.4-8.5-8.7-12.7l0.1-0.7c3.2-9,5-19.2,5-29.8c0-53.1-43-96.1-96.1-96.1 c-31.4,0-59.2,15-76.8,38.3c0,0-9.1,14-10.8,29c0,0,1.1-19.4,4.2-31.5c-7.4-2.5-15.4-3.8-23.6-3.8c-41.7,0-75.6,33.8-75.6,75.6 c0,6.4,0.8,12.6,2.3,18.5c0,0.4-0.1,0.7-0.2,1c-0.9,5.1-4,9.5-8.4,12.3c-0.7,0.5-1.5,0.9-2.2,1.3c-8.2,5-13.5,13.6-13.5,23.4 c0,15.4,13.5,28,29.9,28h4.1h252h4.1c16.4,0,29.8-12.5,29.8-28C416,186.3,410.6,177.6,402.5,172.6z' })
					)
				)
			);
		}
	}]);

	return Icecream;
}(_react2.default.Component);

exports.default = Icecream;
;Icecream.defaultProps = { bare: false };