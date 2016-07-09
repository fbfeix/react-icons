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

var Monitor = function (_React$Component) {
	_inherits(Monitor, _React$Component);

	function Monitor() {
		_classCallCheck(this, Monitor);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Monitor).apply(this, arguments));
	}

	_createClass(Monitor, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M468.7,64H43.3c-6,0-11.3,5-11.3,11.1v265.7c0,6.2,5.2,11.1,11.3,11.1h425.4c6,0,11.3-5,11.3-11.1V75.1 C480,69,474.8,64,468.7,64z M448,320H64V96h384V320z' }),
						_react2.default.createElement('path', { d: 'M302.5,448c28-0.5,41.5-3.9,29-12.5c-12.5-8.7-28.5-15.3-29-22.5c-0.3-3.7-1.7-45-1.7-45H256h-44.8c0,0-1.5,41.3-1.7,45 c-0.5,7.1-16.5,13.8-29,22.5c-12.5,8.7,1,12,29,12.5H302.5z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M468.7,64H43.3c-6,0-11.3,5-11.3,11.1v265.7c0,6.2,5.2,11.1,11.3,11.1h425.4c6,0,11.3-5,11.3-11.1V75.1 C480,69,474.8,64,468.7,64z M448,320H64V96h384V320z' }),
					_react2.default.createElement('path', { d: 'M302.5,448c28-0.5,41.5-3.9,29-12.5c-12.5-8.7-28.5-15.3-29-22.5c-0.3-3.7-1.7-45-1.7-45H256h-44.8c0,0-1.5,41.3-1.7,45 c-0.5,7.1-16.5,13.8-29,22.5c-12.5,8.7,1,12,29,12.5H302.5z' })
				)
			);
		}
	}]);

	return Monitor;
}(_react2.default.Component);

exports.default = Monitor;
;Monitor.defaultProps = { bare: false };