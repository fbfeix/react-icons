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

var Stop = function (_React$Component) {
	_inherits(Stop, _React$Component);

	function Stop() {
		_classCallCheck(this, Stop);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Stop).apply(this, arguments));
	}

	_createClass(Stop, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M437.4,64H74.6C68.7,64,64,68.7,64,74.6v362.8c0,5.9,4.7,10.6,10.6,10.6h362.8c5.8,0,10.6-4.7,10.6-10.6V74.6 C448,68.7,443.2,64,437.4,64z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M437.4,64H74.6C68.7,64,64,68.7,64,74.6v362.8c0,5.9,4.7,10.6,10.6,10.6h362.8c5.8,0,10.6-4.7,10.6-10.6V74.6 C448,68.7,443.2,64,437.4,64z' })
			);
		}
	}]);

	return Stop;
}(_react2.default.Component);

exports.default = Stop;
;Stop.defaultProps = { bare: false };