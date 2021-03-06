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

var ErlenmeyerFlask = function (_React$Component) {
	_inherits(ErlenmeyerFlask, _React$Component);

	function ErlenmeyerFlask() {
		_classCallCheck(this, ErlenmeyerFlask);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ErlenmeyerFlask).apply(this, arguments));
	}

	_createClass(ErlenmeyerFlask, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M438.815,395.7L338.509,246.2c-12.8-20.3-19.009-44.4-19.009-70.2c0,0,0-73.5,0-93s12.592-33.25,15.009-42.083 c2.296-8.392,0.512-8.417-15.188-8.417H192.526c-15.999,0-18.548,0.009-16.311,8.416C178.633,50,191.5,64.3,191.5,83.5 s0,92.5,0,92.5c0,25.8-7.285,49.8-20.085,70.2l-49.279,76.5L73.035,395.6c-5.8,9-9.051,20.7-9.051,32.2 c0,28,16.347,52.7,63.246,52.7h257.589c46.998,0,63.197-24.7,63.197-52.7C447.916,416.3,444.615,404.7,438.815,395.7z M409.218,441 c-4.4,4.2-11.602,7.5-24.499,7.5h-257.59c-12.8,0-20.8-3.5-25.199-7.7c-2.7-2.6-6-7.05-6-13.35c0-5,1.4-10.125,3.9-14.125 l99.039-150.392c15.699-25.199,24.632-55.231,24.632-86.932V64.5h64v111.4c0,31.199,7.761,61.3,23.859,87l100.523,150 c2.499,4,3.968,9.25,3.968,14.25C415.85,433.55,411.918,438.4,409.218,441z' }),
						_react2.default.createElement('path', { d: 'M389.217,411.301c0.051,0.075,0.1,0.397,0,0.249L307.345,288.5H203.698l-81.069,123.151c-1.5,2.1-2.3,5.175-2.3,7.974 c0,7.5,6.288,13.875,13.687,13.875h244c7.5,0,13.599-6.725,13.599-14.125C391.614,416.875,390.516,413.301,389.217,411.301z M302.021,341.7c-1.5-1.5-2.3-3.601-2.3-5.7s0.899-4.2,2.3-5.7c1.5-1.5,3.6-2.3,5.6-2.3c2.102,0,4.2,0.8,5.602,2.3 c1.5,1.5,2.299,3.601,2.299,5.7s-0.899,4.2-2.299,5.7c-1.5,1.5-3.5,2.3-5.602,2.3C305.621,344,303.521,343.1,302.021,341.7z M348.92,400.7c-1.4,0.898-2.9,1.3-4.302,1.3c-2.499,0-5.099-1.3-6.598-3.6l-23.499-35.9c-2.4-3.7-1.4-8.7,2.299-11.1 c1.4-0.9,2.9-1.301,4.4-1.301c2.6,0,5.1,1.301,6.5,3.601L351.22,389.6C353.618,393.299,352.618,398.299,348.92,400.7z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M438.815,395.7L338.509,246.2c-12.8-20.3-19.009-44.4-19.009-70.2c0,0,0-73.5,0-93s12.592-33.25,15.009-42.083 c2.296-8.392,0.512-8.417-15.188-8.417H192.526c-15.999,0-18.548,0.009-16.311,8.416C178.633,50,191.5,64.3,191.5,83.5 s0,92.5,0,92.5c0,25.8-7.285,49.8-20.085,70.2l-49.279,76.5L73.035,395.6c-5.8,9-9.051,20.7-9.051,32.2 c0,28,16.347,52.7,63.246,52.7h257.589c46.998,0,63.197-24.7,63.197-52.7C447.916,416.3,444.615,404.7,438.815,395.7z M409.218,441 c-4.4,4.2-11.602,7.5-24.499,7.5h-257.59c-12.8,0-20.8-3.5-25.199-7.7c-2.7-2.6-6-7.05-6-13.35c0-5,1.4-10.125,3.9-14.125 l99.039-150.392c15.699-25.199,24.632-55.231,24.632-86.932V64.5h64v111.4c0,31.199,7.761,61.3,23.859,87l100.523,150 c2.499,4,3.968,9.25,3.968,14.25C415.85,433.55,411.918,438.4,409.218,441z' }),
					_react2.default.createElement('path', { d: 'M389.217,411.301c0.051,0.075,0.1,0.397,0,0.249L307.345,288.5H203.698l-81.069,123.151c-1.5,2.1-2.3,5.175-2.3,7.974 c0,7.5,6.288,13.875,13.687,13.875h244c7.5,0,13.599-6.725,13.599-14.125C391.614,416.875,390.516,413.301,389.217,411.301z M302.021,341.7c-1.5-1.5-2.3-3.601-2.3-5.7s0.899-4.2,2.3-5.7c1.5-1.5,3.6-2.3,5.6-2.3c2.102,0,4.2,0.8,5.602,2.3 c1.5,1.5,2.299,3.601,2.299,5.7s-0.899,4.2-2.299,5.7c-1.5,1.5-3.5,2.3-5.602,2.3C305.621,344,303.521,343.1,302.021,341.7z M348.92,400.7c-1.4,0.898-2.9,1.3-4.302,1.3c-2.499,0-5.099-1.3-6.598-3.6l-23.499-35.9c-2.4-3.7-1.4-8.7,2.299-11.1 c1.4-0.9,2.9-1.301,4.4-1.301c2.6,0,5.1,1.301,6.5,3.601L351.22,389.6C353.618,393.299,352.618,398.299,348.92,400.7z' })
				)
			);
		}
	}]);

	return ErlenmeyerFlask;
}(_react2.default.Component);

exports.default = ErlenmeyerFlask;
;ErlenmeyerFlask.defaultProps = { bare: false };