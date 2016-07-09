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

var Hammer = function (_React$Component) {
	_inherits(Hammer, _React$Component);

	function Hammer() {
		_classCallCheck(this, Hammer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Hammer).apply(this, arguments));
	}

	_createClass(Hammer, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M410,32h-52c-3.3,0-6,2.7-6,6v5.6c-4,4-10.9,9.8-17.8,9.8c-10.5,0-14.8-16.4-26.1-18.4s-27.2-3-37.9-3s-52,0.7-102,21.5 c-50,20.8-71.7,64.9-72.3,81.4c-0.3,8.7,2.7,21.1,10,11.1c7.3-10,35.3-42.3,57.7-44.7c22.3-2.3,45.7,0.8,63.7,17.2 c17.3,15.7,21.3,30.8,21.3,73.5l-6.6,2c-4.3,1.3-7,5.7-7,9c0,0-0.2,6.5-0.2,70.4C234.8,368,224,474,224,474c0,3.3,2.7,6,6,6h84 c3.3,0,6-2.7,6-6c0,0-10.8-106-10.8-200.6c0-63.9-0.2-70.4-0.2-70.4c0-3.3-2.3-7.8-7-9l-8-2c0-38.2-0.4-54,6.3-65.9 c7-12.4,22.3-22.9,29.7-25.1c5.9-1.8,16,1.3,22,6.5V122c0,3.3,2.7,6,6,6h52c3.3,0,6-2.7,6-6V38C416,34.7,413.3,32,410,32z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M410,32h-52c-3.3,0-6,2.7-6,6v5.6c-4,4-10.9,9.8-17.8,9.8c-10.5,0-14.8-16.4-26.1-18.4s-27.2-3-37.9-3s-52,0.7-102,21.5 c-50,20.8-71.7,64.9-72.3,81.4c-0.3,8.7,2.7,21.1,10,11.1c7.3-10,35.3-42.3,57.7-44.7c22.3-2.3,45.7,0.8,63.7,17.2 c17.3,15.7,21.3,30.8,21.3,73.5l-6.6,2c-4.3,1.3-7,5.7-7,9c0,0-0.2,6.5-0.2,70.4C234.8,368,224,474,224,474c0,3.3,2.7,6,6,6h84 c3.3,0,6-2.7,6-6c0,0-10.8-106-10.8-200.6c0-63.9-0.2-70.4-0.2-70.4c0-3.3-2.3-7.8-7-9l-8-2c0-38.2-0.4-54,6.3-65.9 c7-12.4,22.3-22.9,29.7-25.1c5.9-1.8,16,1.3,22,6.5V122c0,3.3,2.7,6,6,6h52c3.3,0,6-2.7,6-6V38C416,34.7,413.3,32,410,32z' })
			);
		}
	}]);

	return Hammer;
}(_react2.default.Component);

exports.default = Hammer;
;Hammer.defaultProps = { bare: false };