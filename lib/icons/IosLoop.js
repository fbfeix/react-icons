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

var IosLoop = function (_React$Component) {
	_inherits(IosLoop, _React$Component);

	function IosLoop() {
		_classCallCheck(this, IosLoop);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosLoop).apply(this, arguments));
	}

	_createClass(IosLoop, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '489.373,256 448,297.373 405.627,256 394.813,266.813 448,320 500.687,267.313 \t' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M459.994,255.509c-0.002-0.577,0.013-1.157,0.007-1.733l-0.029-0.003C458.771,142.311,367.742,52,256,52 c-73.59,0-141.753,39.878-177.888,104.071l13.943,7.848C125.359,104.754,188.18,68,256,68 c103.273,0,187.355,83.708,187.985,186.836c0.038,6.882-0.281,13.83-1.017,20.831l15.912,1.674 c0.755-7.168,1.105-14.286,1.111-21.341H460C460,255.836,459.994,255.673,459.994,255.509z' }),
						_react2.default.createElement('path', { d: 'M419.944,348.081C386.641,407.246,323.82,444,256,444c-103.475,0-187.688-84.032-187.993-187.437 c-0.015-6.686,0.31-13.434,1.024-20.23l-15.912-1.674c-0.754,7.168-1.104,14.286-1.108,21.341H52c0,0.472,0.015,0.939,0.018,1.41 c0.006,0.975-0.006,1.952,0.015,2.924l0.022-0.003C54.369,370.825,144.962,460,256,460c73.59,0,141.753-39.878,177.888-104.071 L419.944,348.081z' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('polygon', { points: '64,192 11.313,244.687 22.627,256 64,214.627 105.373,256 116.687,244.687 \t\t\t' })
						)
					)
				)
			);
		}
	}]);

	return IosLoop;
}(_react2.default.Component);

exports.default = IosLoop;
;