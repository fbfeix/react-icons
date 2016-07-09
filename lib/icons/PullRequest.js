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

var PullRequest = function (_React$Component) {
	_inherits(PullRequest, _React$Component);

	function PullRequest() {
		_classCallCheck(this, PullRequest);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PullRequest).apply(this, arguments));
	}

	_createClass(PullRequest, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M128,64c-35.29,0-64,28.71-64,64c0,23.637,12.89,44.307,32,55.391v177.219C76.89,371.693,64,392.363,64,416 c0,35.29,28.71,64,64,64s64-28.71,64-64c0-23.637-12.89-44.307-32-55.391V183.391c19.11-11.084,32-31.754,32-55.391 C192,92.71,163.29,64,128,64z M128,448c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S145.673,448,128,448z M128,160 c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S145.673,160,128,160z' }),
						_react2.default.createElement('path', { d: 'M415,360.034V204.989c0-33.987-10.49-61.002-31.18-80.294c-22.111-20.618-54.314-30.388-95.82-29.106V32l-96,96l96,96v-64 c26.5,0,42.67,2.642,52.175,11.504c7.183,6.698,10.825,17.964,10.825,33.485v156.196c-18.562,11.217-31,31.589-31,54.814 c0,35.29,28.71,64,64,64s64-28.71,64-64C448,391.951,434.662,370.969,415,360.034z M384,448c-17.673,0-32-14.327-32-32 s14.327-32,32-32s32,14.327,32,32S401.673,448,384,448z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M128,64c-35.29,0-64,28.71-64,64c0,23.637,12.89,44.307,32,55.391v177.219C76.89,371.693,64,392.363,64,416 c0,35.29,28.71,64,64,64s64-28.71,64-64c0-23.637-12.89-44.307-32-55.391V183.391c19.11-11.084,32-31.754,32-55.391 C192,92.71,163.29,64,128,64z M128,448c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S145.673,448,128,448z M128,160 c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S145.673,160,128,160z' }),
					_react2.default.createElement('path', { d: 'M415,360.034V204.989c0-33.987-10.49-61.002-31.18-80.294c-22.111-20.618-54.314-30.388-95.82-29.106V32l-96,96l96,96v-64 c26.5,0,42.67,2.642,52.175,11.504c7.183,6.698,10.825,17.964,10.825,33.485v156.196c-18.562,11.217-31,31.589-31,54.814 c0,35.29,28.71,64,64,64s64-28.71,64-64C448,391.951,434.662,370.969,415,360.034z M384,448c-17.673,0-32-14.327-32-32 s14.327-32,32-32s32,14.327,32,32S401.673,448,384,448z' })
				)
			);
		}
	}]);

	return PullRequest;
}(_react2.default.Component);

exports.default = PullRequest;
;PullRequest.defaultProps = { bare: false };