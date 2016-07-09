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

var CheckmarkCircled = function (_React$Component) {
	_inherits(CheckmarkCircled, _React$Component);

	function CheckmarkCircled() {
		_classCallCheck(this, CheckmarkCircled);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckmarkCircled).apply(this, arguments));
	}

	_createClass(CheckmarkCircled, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z M370.9,181.1L231.8,359.6c-1.1,1.1-2.9,3.5-5.1,3.5c-2.3,0-3.8-1.6-5.1-2.9c-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5 c-0.6-0.9-1.1-2-1.1-3.2c0-1.2,0.5-2.3,1.1-3.2c0.4-0.4,0.7-0.7,1.1-1.2c7.7-8.1,23.3-24.5,24.3-25.5c1.3-1.3,2.4-3,4.8-3 c2.5,0,4.1,2.1,5.3,3.3c1.2,1.2,45,43.3,45,43.3l111.3-143c1-0.8,2.2-1.4,3.5-1.4c1.3,0,2.5,0.5,3.5,1.3l30.6,24.1 c0.8,1,1.3,2.2,1.3,3.5C372,179.1,371.5,180.2,370.9,181.1z' })
				)
			);
		}
	}]);

	return CheckmarkCircled;
}(_react2.default.Component);

exports.default = CheckmarkCircled;
;