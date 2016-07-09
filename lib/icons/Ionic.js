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

var Ionic = function (_React$Component) {
	_inherits(Ionic, _React$Component);

	function Ionic() {
		_classCallCheck(this, Ionic);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Ionic).apply(this, arguments));
	}

	_createClass(Ionic, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M423.592,132.804C427.006,127.714,429,121.59,429,115c0-17.675-14.33-32-32-32c-6.59,0-12.714,1.994-17.805,5.409 C344.709,63.015,302.11,48,256,48C141.125,48,48,141.125,48,256c0,114.877,93.125,208,208,208c114.873,0,208-93.123,208-208 C464,209.889,448.984,167.29,423.592,132.804z M391.83,391.832c-17.646,17.646-38.191,31.499-61.064,41.174 c-23.672,10.012-48.826,15.089-74.766,15.089c-25.94,0-51.095-5.077-74.767-15.089c-22.873-9.675-43.417-23.527-61.064-41.174 s-31.5-38.191-41.174-61.064C68.982,307.096,63.905,281.94,63.905,256c0-25.94,5.077-51.095,15.089-74.767 c9.674-22.873,23.527-43.417,41.174-61.064s38.191-31.5,61.064-41.174C204.905,68.982,230.06,63.905,256,63.905 c25.939,0,51.094,5.077,74.766,15.089c13.446,5.687,26.08,12.83,37.802,21.327C366.293,104.719,365,109.707,365,115 c0,17.675,14.327,32,32,32c5.293,0,10.28-1.293,14.678-3.568c8.498,11.721,15.641,24.355,21.327,37.801 c10.013,23.672,15.09,48.827,15.09,74.767c0,25.939-5.077,51.096-15.09,74.768C423.33,353.641,409.478,374.186,391.83,391.832z' }),
						_react2.default.createElement('circle', { cx: '256.003', cy: '256', r: '96' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M423.592,132.804C427.006,127.714,429,121.59,429,115c0-17.675-14.33-32-32-32c-6.59,0-12.714,1.994-17.805,5.409 C344.709,63.015,302.11,48,256,48C141.125,48,48,141.125,48,256c0,114.877,93.125,208,208,208c114.873,0,208-93.123,208-208 C464,209.889,448.984,167.29,423.592,132.804z M391.83,391.832c-17.646,17.646-38.191,31.499-61.064,41.174 c-23.672,10.012-48.826,15.089-74.766,15.089c-25.94,0-51.095-5.077-74.767-15.089c-22.873-9.675-43.417-23.527-61.064-41.174 s-31.5-38.191-41.174-61.064C68.982,307.096,63.905,281.94,63.905,256c0-25.94,5.077-51.095,15.089-74.767 c9.674-22.873,23.527-43.417,41.174-61.064s38.191-31.5,61.064-41.174C204.905,68.982,230.06,63.905,256,63.905 c25.939,0,51.094,5.077,74.766,15.089c13.446,5.687,26.08,12.83,37.802,21.327C366.293,104.719,365,109.707,365,115 c0,17.675,14.327,32,32,32c5.293,0,10.28-1.293,14.678-3.568c8.498,11.721,15.641,24.355,21.327,37.801 c10.013,23.672,15.09,48.827,15.09,74.767c0,25.939-5.077,51.096-15.09,74.768C423.33,353.641,409.478,374.186,391.83,391.832z' }),
					_react2.default.createElement('circle', { cx: '256.003', cy: '256', r: '96' })
				)
			);
		}
	}]);

	return Ionic;
}(_react2.default.Component);

exports.default = Ionic;
;Ionic.defaultProps = { bare: false };