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

var MicA = function (_React$Component) {
	_inherits(MicA, _React$Component);

	function MicA() {
		_classCallCheck(this, MicA);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MicA).apply(this, arguments));
	}

	_createClass(MicA, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M112.1,238.1l-0.1,13.6c0.1,65.6,46,120.6,108.1,136.2c1.3,0.1,2.6,0.5,3.8,0.9c5.9,2,10.1,6.9,12.1,12.8v58.7 c0,10.9,8.9,19.7,20,19.7h0.1c11.1,0,19.9-8.8,19.9-19.7v-58.8c2-5.9,6.1-10.7,12-12.7c1.2-0.4,2.5-0.8,3.9-0.9 C354,372.3,400,317.3,400,251.7v-13.6c0-10.4-8.9-18.9-19.5-18.9c-10.6,0-19.5,8.4-19.5,18.9v13.6c0,28.5-11.5,54.1-30.6,72.8 c-19.2,18.6-45.3,30.2-74.5,30.2c-29.2,0-55.1-11.5-74.2-30.2c-19.1-18.7-30.7-44.4-30.7-72.8v-13.6c0-10.4-8.8-18.9-19.5-18.9 C120.9,219.2,112.1,227.7,112.1,238.1z' }),
					_react2.default.createElement('path', { d: 'M179,107.7v143.8c0,41.8,34.7,75.7,77.5,75.7c42.8,0,77.5-33.9,77.5-75.7V107.7c0-41.8-34.7-75.7-77.5-75.7 C213.7,32,179,65.9,179,107.7z' })
				)
			);
		}
	}]);

	return MicA;
}(_react2.default.Component);

exports.default = MicA;
;