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

var VolumeMute = function (_React$Component) {
	_inherits(VolumeMute, _React$Component);

	function VolumeMute() {
		_classCallCheck(this, VolumeMute);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeMute).apply(this, arguments));
	}

	_createClass(VolumeMute, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '255.9,217 191,217 191,295 255.9,295 303,346.3 303,165.7 \t' }),
					_react2.default.createElement('path', { d: 'M364.5,60.1c-0.4-0.2-0.7-0.4-1.1-0.6C331.5,42,294.9,32,256,32C132.3,32,32,132.3,32,256c0,84.3,46.6,157.6,115.4,195.9 c0.4,0.2,0.7,0.5,1.1,0.7C180.5,470,217.1,480,256,480c123.7,0,224-100.3,224-224C480,171.7,433.4,98.3,364.5,60.1z M393.9,355.4 L336,297.1v76.7l19.6,19.9c-28,20.3-62.3,32.7-99.5,32.7c-21.6,0-42.3-4.2-61.3-11.5c-6.5-2.5-12.9-5.3-19-8.6 c-53.6-28.7-90.1-85.2-90.1-150.3c0-37.2,12.4-71.4,32.7-99.4l35.3,35.4h76.7l-73.6-73.8c28-20.2,62.1-32.6,99.4-32.6 c21.6,0,42.2,4.2,61.3,11.5c6.1,2.4,12.2,5,17.9,8c54.2,28.5,91.3,85.3,91.3,150.8C426.5,293.3,414.2,327.4,393.9,355.4z' })
				)
			);
		}
	}]);

	return VolumeMute;
}(_react2.default.Component);

exports.default = VolumeMute;
;