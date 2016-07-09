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

var AndroidCloudOutline = function (_React$Component) {
	_inherits(AndroidCloudOutline, _React$Component);

	function AndroidCloudOutline() {
		_classCallCheck(this, AndroidCloudOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCloudOutline).apply(this, arguments));
	}

	_createClass(AndroidCloudOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_9_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M403.001,217.001C388.997,148.002,328.998,96,256,96c-57.998,0-107.999,32.998-132.997,81 C63.002,183.002,16,233.998,16,296c0,65.996,54.004,120,120,120h260c55,0,100-45,100-100.001 C496,263.002,455.003,220,403.001,217.001z M396,376H136c-44.004,0-80-35.996-80-80c0-44,35.996-80,80-80h14.004 c12.998-46,55-80,105.996-80c60.996,0,110,49,110,110v10h30c32.998,0,60,27.003,60,60C456,348.998,428.998,376,396,376z' })
						)
					)
				)
			);
		}
	}]);

	return AndroidCloudOutline;
}(_react2.default.Component);

exports.default = AndroidCloudOutline;
;