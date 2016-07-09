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

var Videocamera = function (_React$Component) {
	_inherits(Videocamera, _React$Component);

	function Videocamera() {
		_classCallCheck(this, Videocamera);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Videocamera).apply(this, arguments));
	}

	_createClass(Videocamera, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M367,185.3c0-5.1-4-9.3-9.2-9.3H306v-32.2c0-35.2-29.3-63.8-64.9-63.8H63v48h176.1c4.5,0,9.9,5.6,9.9,10.1V176H41.4 c-5.2,0-9.4,4.2-9.4,9.3v170.4v55.7v11.3c0,5.1,4.2,9.3,9.4,9.3h316.4c5.2,0,9.2-4.2,9.2-9.3v-64.5l113,34.7v-88.2v-88.2l-113,34.7 V185.3z M258.2,341h-10.9H152h-11.9c-19.8,0-35.9-16-35.9-35.8s16.1-35.8,35.9-35.8c19.8,0,35.9,16.2,35.9,36 c0,10-4.2,18.6-10.8,25.6h67.9c-6.6-7-10.8-15.6-10.8-25.6c0-19.8,16.1-35.9,35.9-35.9c19.8,0,35.9,15.9,35.9,35.7 S278,341,258.2,341z' })
			);
		}
	}]);

	return Videocamera;
}(_react2.default.Component);

exports.default = Videocamera;
;