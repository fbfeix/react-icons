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

var IosMonitor = function (_React$Component) {
	_inherits(IosMonitor, _React$Component);

	function IosMonitor() {
		_classCallCheck(this, IosMonitor);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosMonitor).apply(this, arguments));
	}

	_createClass(IosMonitor, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M496,384V96H16v288h175v16h-64v16h257v-16h-64v-16H496z M32,112h448v256H32V112z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '48', y: '128', width: '416', height: '224' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M496,384V96H16v288h175v16h-64v16h257v-16h-64v-16H496z M32,112h448v256H32V112z' }),
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '48', y: '128', width: '416', height: '224' })
				)
			);
		}
	}]);

	return IosMonitor;
}(_react2.default.Component);

exports.default = IosMonitor;
;IosMonitor.defaultProps = { bare: false };