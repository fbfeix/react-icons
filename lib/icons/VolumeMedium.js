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

var VolumeMedium = function (_React$Component) {
	_inherits(VolumeMedium, _React$Component);

	function VolumeMedium() {
		_classCallCheck(this, VolumeMedium);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeMedium).apply(this, arguments));
	}

	_createClass(VolumeMedium, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '270,407.7 270,104.4 175.3,192 71,192 71,320 175.3,320 \t' }),
					_react2.default.createElement('path', { d: 'M326.3,355.6c20.5-27.8,32.8-62.3,32.8-99.6c0-37.4-12.3-71.8-32.8-99.6l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.3 c0,31.6-10.4,60.7-27.8,84.3L326.3,355.6z' }),
					_react2.default.createElement('path', { d: 'M392.8,401.6c30-40.7,48-91,48-145.6s-18-104.9-48-145.6l-20.4,15.3c26.9,36.4,43,81.4,43,130.3c0,48.9-16.1,93.8-43,130.3 L392.8,401.6z' })
				)
			);
		}
	}]);

	return VolumeMedium;
}(_react2.default.Component);

exports.default = VolumeMedium;
;