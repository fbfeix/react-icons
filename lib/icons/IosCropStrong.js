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

var IosCropStrong = function (_React$Component) {
	_inherits(IosCropStrong, _React$Component);

	function IosCropStrong() {
		_classCallCheck(this, IosCropStrong);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCropStrong).apply(this, arguments));
	}

	_createClass(IosCropStrong, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '128', y: '64', width: '32', height: '48' }),
					_react2.default.createElement('polygon', { points: '160,352 160,176 128,176 128,384 336,384 336,352 \t' }),
					_react2.default.createElement('rect', { x: '400', y: '352', width: '48', height: '32' }),
					_react2.default.createElement('polygon', { points: '64,128 64,160 352,160 352,448 384,448 384,128 \t' })
				)
			);
		}
	}]);

	return IosCropStrong;
}(_react2.default.Component);

exports.default = IosCropStrong;
;