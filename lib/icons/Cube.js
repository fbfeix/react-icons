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

var Cube = function (_React$Component) {
	_inherits(Cube, _React$Component);

	function Cube() {
		_classCallCheck(this, Cube);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Cube).apply(this, arguments));
	}

	_createClass(Cube, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M467.301,168.084c-1.805,0-3.516,0.329-5.07,0.962l-2.281,1.15l-171.475,88.938l-3.888,1.996c0,0-0.052,0.023-0.052,0.047 c-7.56,4.668-12.535,12.506-12.535,21.425v185.854c0,6.382,5.649,11.544,12.69,11.544c2.178,0,4.251-0.513,6.065-1.404 c0.155-0.095,0.363-0.188,0.519-0.282l174.731-92.694l0.259-0.141c8.241-4.504,13.735-12.742,13.735-22.105V179.582 C480,173.223,474.299,168.084,467.301,168.084z' }),
						_react2.default.createElement('path', { d: 'M454.273,118.521l-181.7-81.731c0,0-10.659-4.79-16.577-4.79s-16.526,4.79-16.526,4.79L57.614,118.521 c0,0-7.989,3.292-7.989,9.479c0,6.562,8.3,11.5,8.3,11.5l182.582,96.371l2.902,1.479c3.784,1.687,8.077,2.649,12.587,2.649 c4.561,0,8.915-0.963,12.742-2.696l2.539-1.315l182.893-96.536c0,0,7.508-4.036,7.508-11.453 C461.678,121.5,454.273,118.521,454.273,118.521z' }),
						_react2.default.createElement('path', { d: 'M227.466,261.178l-3.992-2.043L52.042,170.197l-2.28-1.15c-1.495-0.634-3.258-0.962-5.071-0.962 c-6.997,0-12.69,5.138-12.69,11.497v183.792c0,9.388,5.485,17.602,13.727,22.105l0.208,0.141l174.739,92.694l0,0 c1.918,1.08,4.199,1.687,6.636,1.687c6.989,0,12.69-5.162,12.69-11.544V282.603C240,273.684,235.024,265.846,227.466,261.178z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M467.301,168.084c-1.805,0-3.516,0.329-5.07,0.962l-2.281,1.15l-171.475,88.938l-3.888,1.996c0,0-0.052,0.023-0.052,0.047 c-7.56,4.668-12.535,12.506-12.535,21.425v185.854c0,6.382,5.649,11.544,12.69,11.544c2.178,0,4.251-0.513,6.065-1.404 c0.155-0.095,0.363-0.188,0.519-0.282l174.731-92.694l0.259-0.141c8.241-4.504,13.735-12.742,13.735-22.105V179.582 C480,173.223,474.299,168.084,467.301,168.084z' }),
					_react2.default.createElement('path', { d: 'M454.273,118.521l-181.7-81.731c0,0-10.659-4.79-16.577-4.79s-16.526,4.79-16.526,4.79L57.614,118.521 c0,0-7.989,3.292-7.989,9.479c0,6.562,8.3,11.5,8.3,11.5l182.582,96.371l2.902,1.479c3.784,1.687,8.077,2.649,12.587,2.649 c4.561,0,8.915-0.963,12.742-2.696l2.539-1.315l182.893-96.536c0,0,7.508-4.036,7.508-11.453 C461.678,121.5,454.273,118.521,454.273,118.521z' }),
					_react2.default.createElement('path', { d: 'M227.466,261.178l-3.992-2.043L52.042,170.197l-2.28-1.15c-1.495-0.634-3.258-0.962-5.071-0.962 c-6.997,0-12.69,5.138-12.69,11.497v183.792c0,9.388,5.485,17.602,13.727,22.105l0.208,0.141l174.739,92.694l0,0 c1.918,1.08,4.199,1.687,6.636,1.687c6.989,0,12.69-5.162,12.69-11.544V282.603C240,273.684,235.024,265.846,227.466,261.178z' })
				)
			);
		}
	}]);

	return Cube;
}(_react2.default.Component);

exports.default = Cube;
;Cube.defaultProps = { bare: false };