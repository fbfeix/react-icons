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

var IosNutrition = function (_React$Component) {
	_inherits(IosNutrition, _React$Component);

	function IosNutrition() {
		_classCallCheck(this, IosNutrition);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosNutrition).apply(this, arguments));
	}

	_createClass(IosNutrition, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M359,233.62l-0.106-0.039c-0.136-0.138-0.306-0.443-0.444-0.579L279.551,154h-0.004c-5.848-6-14.23-10.168-23.547-10.168 c-11.842,0-22.174,6.168-27.708,16.168h-0.007c0,0-7.109,11.351-18.318,29.249l32.617,39.85c2.947,3.772,3.305,7.895,1.414,9.785 l-0.114,0.114c-2.296,2.296-5.894,1.535-9.785-1.414l-35.967-29.439c-23.608,37.693-56.827,90.731-83.671,133.592l19.123,23.362 c2.947,3.772,3.305,7.895,1.414,9.785l-0.114,0.114c-2.296,2.296-5.894,1.535-9.785-1.414l-20.22-16.55 C84.874,388.974,70.194,412.411,69,414.315v0.003c-3,5.066-5,11.144-5,17.682c0,17.674,14.244,32,31.918,32 c7.842,0,14.383-3.398,20.628-7.508l114.842-84.195l-28.971-35.395c-2.947-3.772-3.305-7.895-1.414-9.785l0.114-0.114 c2.296-2.296,5.894-1.534,9.785,1.415l37.963,31.215C303.85,319.348,355.035,282,355.035,282h0.005 c7.859-6,13.024-15.319,13.024-25.857c0-8.713-3.064-16.75-9.064-22.521V233.62z' }),
						_react2.default.createElement('polygon', { points: '448,138.781 431.514,111.087 365.284,149.299 414.515,64.086 386.896,48 316.897,169.084 345.485,197.672 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M359,233.62l-0.106-0.039c-0.136-0.138-0.306-0.443-0.444-0.579L279.551,154h-0.004c-5.848-6-14.23-10.168-23.547-10.168 c-11.842,0-22.174,6.168-27.708,16.168h-0.007c0,0-7.109,11.351-18.318,29.249l32.617,39.85c2.947,3.772,3.305,7.895,1.414,9.785 l-0.114,0.114c-2.296,2.296-5.894,1.535-9.785-1.414l-35.967-29.439c-23.608,37.693-56.827,90.731-83.671,133.592l19.123,23.362 c2.947,3.772,3.305,7.895,1.414,9.785l-0.114,0.114c-2.296,2.296-5.894,1.535-9.785-1.414l-20.22-16.55 C84.874,388.974,70.194,412.411,69,414.315v0.003c-3,5.066-5,11.144-5,17.682c0,17.674,14.244,32,31.918,32 c7.842,0,14.383-3.398,20.628-7.508l114.842-84.195l-28.971-35.395c-2.947-3.772-3.305-7.895-1.414-9.785l0.114-0.114 c2.296-2.296,5.894-1.534,9.785,1.415l37.963,31.215C303.85,319.348,355.035,282,355.035,282h0.005 c7.859-6,13.024-15.319,13.024-25.857c0-8.713-3.064-16.75-9.064-22.521V233.62z' }),
					_react2.default.createElement('polygon', { points: '448,138.781 431.514,111.087 365.284,149.299 414.515,64.086 386.896,48 316.897,169.084 345.485,197.672 \t' })
				)
			);
		}
	}]);

	return IosNutrition;
}(_react2.default.Component);

exports.default = IosNutrition;
;IosNutrition.defaultProps = { bare: false };