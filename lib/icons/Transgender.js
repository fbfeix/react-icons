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

var Transgender = function (_React$Component) {
	_inherits(Transgender, _React$Component);

	function Transgender() {
		_classCallCheck(this, Transgender);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Transgender).apply(this, arguments));
	}

	_createClass(Transgender, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M368,0v40h69.873l-93.046,91.97c-8.529-8.249-15.132-12.586-15.132-12.586C308.841,104.694,283.422,96,256,96 c-34.525,0-65.86,13.669-88.903,35.894l-17.333-17.131l35.833-35.833L153.07,46.403l-36.022,36.021L74.127,40H144V0H0v144h40V67.806 l46.085,45.582L50.402,149.07l32.526,32.526l35.862-35.861l22.185,21.942c-8.395,17.065-13.118,36.267-13.118,56.578 C127.857,286.884,173,338.989,232,350.25V402h-72v46h72v64h48v-64h72v-46h-72v-51.75c58-11.261,104.222-63.397,104.222-126.025 c0-20.202-4.794-39.738-13.094-56.649L472,67.806V144h40V0H368z M255.929,304.402c-44.156,0-80.079-35.968-80.079-80.178 c0-44.211,35.923-80.18,80.079-80.18c44.155,0,80.078,35.969,80.078,80.18C336.007,268.435,300.084,304.402,255.929,304.402z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M368,0v40h69.873l-93.046,91.97c-8.529-8.249-15.132-12.586-15.132-12.586C308.841,104.694,283.422,96,256,96 c-34.525,0-65.86,13.669-88.903,35.894l-17.333-17.131l35.833-35.833L153.07,46.403l-36.022,36.021L74.127,40H144V0H0v144h40V67.806 l46.085,45.582L50.402,149.07l32.526,32.526l35.862-35.861l22.185,21.942c-8.395,17.065-13.118,36.267-13.118,56.578 C127.857,286.884,173,338.989,232,350.25V402h-72v46h72v64h48v-64h72v-46h-72v-51.75c58-11.261,104.222-63.397,104.222-126.025 c0-20.202-4.794-39.738-13.094-56.649L472,67.806V144h40V0H368z M255.929,304.402c-44.156,0-80.079-35.968-80.079-80.178 c0-44.211,35.923-80.18,80.079-80.18c44.155,0,80.078,35.969,80.078,80.18C336.007,268.435,300.084,304.402,255.929,304.402z' })
			);
		}
	}]);

	return Transgender;
}(_react2.default.Component);

exports.default = Transgender;
;Transgender.defaultProps = { bare: false };