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

var Easel = function (_React$Component) {
	_inherits(Easel, _React$Component);

	function Easel() {
		_classCallCheck(this, Easel);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Easel).apply(this, arguments));
	}

	_createClass(Easel, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '80', y: '144', width: '352', height: '192' }),
						_react2.default.createElement('path', { d: 'M464,96H48c-8.837,0-16,7.163-16,16v256c0,8.837,6.932,16,15.768,16H464c8.837,0,16-7.163,16-16V112 C480,103.163,472.837,96,464,96z M448,352H64V128h384V352z' }),
						_react2.default.createElement('polygon', { points: '80,480 112,480 140.147,400 108.835,400 \t' }),
						_react2.default.createElement('polygon', { points: '270.83,32 241.472,32 224.171,80 288.099,80 \t' }),
						_react2.default.createElement('polygon', { points: '371.853,400 400,480 432,480 403.22,400 \t' }),
						_react2.default.createElement('rect', { x: '240', y: '400', width: '32', height: '48' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '80', y: '144', width: '352', height: '192' }),
					_react2.default.createElement('path', { d: 'M464,96H48c-8.837,0-16,7.163-16,16v256c0,8.837,6.932,16,15.768,16H464c8.837,0,16-7.163,16-16V112 C480,103.163,472.837,96,464,96z M448,352H64V128h384V352z' }),
					_react2.default.createElement('polygon', { points: '80,480 112,480 140.147,400 108.835,400 \t' }),
					_react2.default.createElement('polygon', { points: '270.83,32 241.472,32 224.171,80 288.099,80 \t' }),
					_react2.default.createElement('polygon', { points: '371.853,400 400,480 432,480 403.22,400 \t' }),
					_react2.default.createElement('rect', { x: '240', y: '400', width: '32', height: '48' })
				)
			);
		}
	}]);

	return Easel;
}(_react2.default.Component);

exports.default = Easel;
;Easel.defaultProps = { bare: false };