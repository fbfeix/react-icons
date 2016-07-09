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

var HeartBroken = function (_React$Component) {
	_inherits(HeartBroken, _React$Component);

	function HeartBroken() {
		_classCallCheck(this, HeartBroken);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(HeartBroken).apply(this, arguments));
	}

	_createClass(HeartBroken, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M229,288c1-18,0-38,8-55c2-5,1-10,1-15c-4-21-14-40-15-60c0-1.39,1.004-4.771,1.005-6.157 c-3.216,2.234-7.607,4.024-11.005,5.157c-20,6-17.51,2.573-34.51,13.573l-11.933,7.228c16.343-17.939,38.528-24.781,56.525-38.714 c0.194-15.438,0.858-30.677,3.137-45.84C185.61,53.496,121.785,54.268,82.123,95.57c-45.497,47.344-45.497,124.101,0,171.445 l152.849,159.096c-0.085-10.656-0.443-21.176-1.972-31.111C227,359,229,324,229,288z' }),
					_react2.default.createElement('path', { d: 'M322,301c-11-26-33-44-63-50c-0.85,0-1.879-0.543-2.936-1.319c-0.023,0.107-0.041,0.213-0.064,0.319c-11,48-23,94-21,142 c0,12.227,3.983,25.117,3.833,38.131L256,448l104-108.25C345.153,329.271,330.428,318.621,322,301z' }),
					_react2.default.createElement('path', { d: 'M429.874,95.57c-40.426-42.094-105.989-42.094-146.408,0L264,115.403c0.075,13.175,0.213,26.202-3,38.597 c-2,10-19,19-16,31c3.003,13.213,8.166,25.705,10.732,38.559C271.014,232.084,284.771,242.896,297,256 c22.801,26.766,37.747,57.459,65.283,81.371l67.591-70.355C475.375,219.671,475.375,142.914,429.874,95.57z' })
				)
			);
		}
	}]);

	return HeartBroken;
}(_react2.default.Component);

exports.default = HeartBroken;
;