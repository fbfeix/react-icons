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

var IosColorWandOutline = function (_React$Component) {
	_inherits(IosColorWandOutline, _React$Component);

	function IosColorWandOutline() {
		_classCallCheck(this, IosColorWandOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosColorWandOutline).apply(this, arguments));
	}

	_createClass(IosColorWandOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M192.011,149.661l-34.043,34.041l256.097,256.096L448,405.757L192.011,149.661z M212.596,215.702l11.415-11.414 l201.468,201.469l-11.414,11.414L212.596,215.702z' }),
						_react2.default.createElement('rect', { x: '184', y: '64', width: '16', height: '40' }),
						_react2.default.createElement('rect', { x: '184', y: '268', width: '16', height: '40' }),
						_react2.default.createElement('rect', { x: '280', y: '176', width: '40', height: '16' }),
						_react2.default.createElement('rect', { x: '64', y: '176', width: '40', height: '16' }),
						_react2.default.createElement('rect', { x: '111.875', y: '94.077', transform: 'matrix(-0.7071 0.7071 -0.7071 -0.7071 285.3039 109.9734)', width: '16', height: '40' }),
						_react2.default.createElement('rect', { x: '111.877', y: '238.327', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 21.9762 525.7571)', width: '15.998', height: '40' }),
						_react2.default.createElement('rect', { x: '256.126', y: '94.077', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 370.226 381.506)', width: '16', height: '39.999' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M192.011,149.661l-34.043,34.041l256.097,256.096L448,405.757L192.011,149.661z M212.596,215.702l11.415-11.414 l201.468,201.469l-11.414,11.414L212.596,215.702z' }),
					_react2.default.createElement('rect', { x: '184', y: '64', width: '16', height: '40' }),
					_react2.default.createElement('rect', { x: '184', y: '268', width: '16', height: '40' }),
					_react2.default.createElement('rect', { x: '280', y: '176', width: '40', height: '16' }),
					_react2.default.createElement('rect', { x: '64', y: '176', width: '40', height: '16' }),
					_react2.default.createElement('rect', { x: '111.875', y: '94.077', transform: 'matrix(-0.7071 0.7071 -0.7071 -0.7071 285.3039 109.9734)', width: '16', height: '40' }),
					_react2.default.createElement('rect', { x: '111.877', y: '238.327', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 21.9762 525.7571)', width: '15.998', height: '40' }),
					_react2.default.createElement('rect', { x: '256.126', y: '94.077', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 370.226 381.506)', width: '16', height: '39.999' })
				)
			);
		}
	}]);

	return IosColorWandOutline;
}(_react2.default.Component);

exports.default = IosColorWandOutline;
;IosColorWandOutline.defaultProps = { bare: false };