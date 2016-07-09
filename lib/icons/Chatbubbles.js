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

var Chatbubbles = function (_React$Component) {
	_inherits(Chatbubbles, _React$Component);

	function Chatbubbles() {
		_classCallCheck(this, Chatbubbles);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Chatbubbles).apply(this, arguments));
	}

	_createClass(Chatbubbles, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M73.3,391C73.3,391,73.3,391,73.3,391c1.8,3,2.8,6.4,2.8,10.2L64,464l56.2-22.1c2.7-1.1,5.6-1.7,8.7-1.7 c2.8,0,5.5,0.5,8,1.4c0,0,0.1,0,0.2,0c0.4,0.2,0.8,0.3,1.2,0.5c17.8,7.3,37.4,11.4,57.9,11.4c46.3,0,87.6-20.5,114.8-52.6 c-14.1,3.6-28.9,5.7-44.1,5.7c-95.9,0-173.7-75-173.7-167.5c0-11.8,1.3-23.2,3.7-34.3C66.9,230.9,48,268.6,48,310.6 c0,28.4,8.6,55.2,23.5,77.5C72.1,388.9,72.7,390,73.3,391z' }),
					_react2.default.createElement('path', { d: 'M290.3,48c-83.7,0-153.6,57.2-170,133.2c-2.4,11.1-3.7,22.5-3.7,34.3c0,92.5,77.7,167.5,173.7,167.5 c15.3,0,30-2.1,44.1-5.7c8.1-2.1,16.1-4.5,23.8-7.6c0.5-0.2,0.9-0.4,1.4-0.6c0.1,0,0.2,0,0.2-0.1c2.9-1.1,6.1-1.7,9.3-1.7 c3.6,0,7,0.7,10.1,2l68.6,25.8l-17-73.8c0-4.4,1.2-8.6,3.3-12.2c0,0,0,0,0,0c0.6-1.1,1.4-2.1,2.1-3.1 c17.4-26.1,27.5-57.2,27.5-90.5C464,123,386.3,48,290.3,48z' })
				)
			);
		}
	}]);

	return Chatbubbles;
}(_react2.default.Component);

exports.default = Chatbubbles;
;