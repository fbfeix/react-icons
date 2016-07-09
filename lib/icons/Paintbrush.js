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

var Paintbrush = function (_React$Component) {
	_inherits(Paintbrush, _React$Component);

	function Paintbrush() {
		_classCallCheck(this, Paintbrush);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Paintbrush).apply(this, arguments));
	}

	_createClass(Paintbrush, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M149.515,283.349c-51.921,0-83.939,45.661-83.939,95.085c0,22.691-10.071,39.153-33.575,48.104 c17.907,34.678,87.777,41.157,117.515,35.797c35.642-6.426,80.077-24.873,90.654-76.969 C252.48,324.739,201.434,283.349,149.515,283.349z' }),
						_react2.default.createElement('path', { d: 'M467.638,60.356c-12.955-12.948-29.964-17.292-44.92-5.35L247.598,209.1c-8.648-2.371-16.525-1.869-22.909,2.346 L165.896,260.4c-1.611,1.611-1.545,4.304,0.066,5.914c0.499,0.501,1.064,0.79,1.697,0.98c0.642,0.034,1.264,0.059,1.899,0.103 c0.019-0.002,0.036-0.01,0.054-0.014c47.938,3.432,91.034,36.754,89.3,89.506c-0.016,0.505-0.029,1.007-0.054,1.516 c0.123,0.848,0.5,1.664,1.149,2.315c1.595,1.593,4.168,1.605,5.781,0.044c0.018-0.018,0.037-0.027,0.055-0.044 c0.063-0.063,0.106-0.137,0.164-0.2l50.457-57.342c4.216-6.374,4.72-14.24,2.355-22.875l154.169-175.047 C484.939,90.308,480.592,73.308,467.638,60.356z' }),
						_react2.default.createElement('polygon', { points: '165.887,260.409 165.896,260.4 165.888,260.407 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M149.515,283.349c-51.921,0-83.939,45.661-83.939,95.085c0,22.691-10.071,39.153-33.575,48.104 c17.907,34.678,87.777,41.157,117.515,35.797c35.642-6.426,80.077-24.873,90.654-76.969 C252.48,324.739,201.434,283.349,149.515,283.349z' }),
					_react2.default.createElement('path', { d: 'M467.638,60.356c-12.955-12.948-29.964-17.292-44.92-5.35L247.598,209.1c-8.648-2.371-16.525-1.869-22.909,2.346 L165.896,260.4c-1.611,1.611-1.545,4.304,0.066,5.914c0.499,0.501,1.064,0.79,1.697,0.98c0.642,0.034,1.264,0.059,1.899,0.103 c0.019-0.002,0.036-0.01,0.054-0.014c47.938,3.432,91.034,36.754,89.3,89.506c-0.016,0.505-0.029,1.007-0.054,1.516 c0.123,0.848,0.5,1.664,1.149,2.315c1.595,1.593,4.168,1.605,5.781,0.044c0.018-0.018,0.037-0.027,0.055-0.044 c0.063-0.063,0.106-0.137,0.164-0.2l50.457-57.342c4.216-6.374,4.72-14.24,2.355-22.875l154.169-175.047 C484.939,90.308,480.592,73.308,467.638,60.356z' }),
					_react2.default.createElement('polygon', { points: '165.887,260.409 165.896,260.4 165.888,260.407 \t' })
				)
			);
		}
	}]);

	return Paintbrush;
}(_react2.default.Component);

exports.default = Paintbrush;
;Paintbrush.defaultProps = { bare: false };