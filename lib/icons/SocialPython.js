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

var SocialPython = function (_React$Component) {
	_inherits(SocialPython, _React$Component);

	function SocialPython() {
		_classCallCheck(this, SocialPython);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialPython).apply(this, arguments));
	}

	_createClass(SocialPython, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M193.46,249.056c3.723-0.67,7.589-1.041,11.586-1.041L201.924,248h103.823c4.503,0,8.806-0.617,12.908-1.754 c19.37-5.363,33.345-22.537,33.345-43.663v-30.822v-56.402c0-24.832-21.15-43.484-46.289-47.606 c-15.931-2.624-39.258-3.827-55.089-3.749c-15.829,0.086-30.981,1.404-44.277,3.749C167.143,74.576,160,88.928,160,115.359V144h96 v16H128.82c-35.628,0-64.538,42.571-64.813,95.242C64.005,255.495,64,255.747,64,256c0,9.523,0.94,18.72,2.685,27.404 C74.648,323.07,99.451,352,128.82,352H144v-2.662v-43.273C144,279.238,164.146,254.332,193.46,249.056z M203.656,127.002 c-9.592,0-17.384-7.785-17.384-17.403c0-9.664,7.774-17.52,17.384-17.52c9.574,0,17.399,7.855,17.399,17.52 C221.056,119.217,213.246,127.002,203.656,127.002z' }),
						_react2.default.createElement('path', { d: 'M443.951,222.543C434.78,186.021,411.033,160,383.18,160H368v2.626v38.046c0,33.915-22.286,58.474-49.489,62.681 c-2.737,0.424-5.483,0.646-8.301,0.646H206.351c-4.518,0-8.904,0.584-13.049,1.672C174.18,270.689,160,286.6,160,307.236v32.922 v54.305c0,24.832,24.977,39.426,49.481,46.551c29.327,8.531,61.267,10.068,96.366,0C329.15,434.354,352,420.893,352,394.463V368 h-96v-16h127.18c25.24,0,47.107-21.365,57.814-52.549C445.474,286.404,448,271.641,448,256 C448,244.232,446.567,232.962,443.951,222.543z M307.867,382.82c9.59,0,17.381,7.785,17.381,17.4 c0,9.65-7.791,17.521-17.381,17.521c-9.577,0-17.399-7.871-17.399-17.521C290.468,390.59,298.274,382.82,307.867,382.82z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M193.46,249.056c3.723-0.67,7.589-1.041,11.586-1.041L201.924,248h103.823c4.503,0,8.806-0.617,12.908-1.754 c19.37-5.363,33.345-22.537,33.345-43.663v-30.822v-56.402c0-24.832-21.15-43.484-46.289-47.606 c-15.931-2.624-39.258-3.827-55.089-3.749c-15.829,0.086-30.981,1.404-44.277,3.749C167.143,74.576,160,88.928,160,115.359V144h96 v16H128.82c-35.628,0-64.538,42.571-64.813,95.242C64.005,255.495,64,255.747,64,256c0,9.523,0.94,18.72,2.685,27.404 C74.648,323.07,99.451,352,128.82,352H144v-2.662v-43.273C144,279.238,164.146,254.332,193.46,249.056z M203.656,127.002 c-9.592,0-17.384-7.785-17.384-17.403c0-9.664,7.774-17.52,17.384-17.52c9.574,0,17.399,7.855,17.399,17.52 C221.056,119.217,213.246,127.002,203.656,127.002z' }),
					_react2.default.createElement('path', { d: 'M443.951,222.543C434.78,186.021,411.033,160,383.18,160H368v2.626v38.046c0,33.915-22.286,58.474-49.489,62.681 c-2.737,0.424-5.483,0.646-8.301,0.646H206.351c-4.518,0-8.904,0.584-13.049,1.672C174.18,270.689,160,286.6,160,307.236v32.922 v54.305c0,24.832,24.977,39.426,49.481,46.551c29.327,8.531,61.267,10.068,96.366,0C329.15,434.354,352,420.893,352,394.463V368 h-96v-16h127.18c25.24,0,47.107-21.365,57.814-52.549C445.474,286.404,448,271.641,448,256 C448,244.232,446.567,232.962,443.951,222.543z M307.867,382.82c9.59,0,17.381,7.785,17.381,17.4 c0,9.65-7.791,17.521-17.381,17.521c-9.577,0-17.399-7.871-17.399-17.521C290.468,390.59,298.274,382.82,307.867,382.82z' })
				)
			);
		}
	}]);

	return SocialPython;
}(_react2.default.Component);

exports.default = SocialPython;
;SocialPython.defaultProps = { bare: false };