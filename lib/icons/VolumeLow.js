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

var VolumeLow = function (_React$Component) {
	_inherits(VolumeLow, _React$Component);

	function VolumeLow() {
		_classCallCheck(this, VolumeLow);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeLow).apply(this, arguments));
	}

	_createClass(VolumeLow, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '311,407.7 311,104.4 216.2,192 112,192 112,320 216.2,320 \t' }),
						_react2.default.createElement('path', { d: 'M367.2,355.6c20.5-27.8,32.8-62.3,32.8-99.6c0-37.4-12.3-71.8-32.8-99.6l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.3 c0,31.6-10.4,60.7-27.8,84.3L367.2,355.6z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '311,407.7 311,104.4 216.2,192 112,192 112,320 216.2,320 \t' }),
					_react2.default.createElement('path', { d: 'M367.2,355.6c20.5-27.8,32.8-62.3,32.8-99.6c0-37.4-12.3-71.8-32.8-99.6l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.3 c0,31.6-10.4,60.7-27.8,84.3L367.2,355.6z' })
				)
			);
		}
	}]);

	return VolumeLow;
}(_react2.default.Component);

exports.default = VolumeLow;
;VolumeLow.defaultProps = { bare: false };