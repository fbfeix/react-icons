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

var PersonAdd = function (_React$Component) {
	_inherits(PersonAdd, _React$Component);

	function PersonAdd() {
		_classCallCheck(this, PersonAdd);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PersonAdd).apply(this, arguments));
	}

	_createClass(PersonAdd, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '429,328 429,277 480,277 480,235 429,235 429,184 387,184 387,235 336,235 336,277 387,277 387,328 \t' }),
						_react2.default.createElement('path', { d: 'M416,448c0,0,0-26.4-2.2-40.2c-1.8-10.9-16.9-25.3-81.1-48.9c-63.2-23.2-59.3-11.9-59.3-54.6c0-27.7,14.1-11.6,23.1-64.2 c3.5-20.7,6.3-6.9,13.9-40.1c4-17.4-2.7-18.7-1.9-27c0.8-8.3,1.6-15.7,3.1-32.7C313.4,119.3,293.9,64,224,64 c-69.9,0-89.4,55.3-87.5,76.4c1.5,16.9,2.3,24.4,3.1,32.7c0.8,8.3-5.9,9.6-1.9,27c7.6,33.1,10.4,19.3,13.9,40.1 c9,52.6,23.1,36.5,23.1,64.2c0,42.8,3.9,31.5-59.3,54.6c-64.2,23.5-79.4,38-81.1,48.9C32,421.6,32,448,32,448h192H416z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '429,328 429,277 480,277 480,235 429,235 429,184 387,184 387,235 336,235 336,277 387,277 387,328 \t' }),
					_react2.default.createElement('path', { d: 'M416,448c0,0,0-26.4-2.2-40.2c-1.8-10.9-16.9-25.3-81.1-48.9c-63.2-23.2-59.3-11.9-59.3-54.6c0-27.7,14.1-11.6,23.1-64.2 c3.5-20.7,6.3-6.9,13.9-40.1c4-17.4-2.7-18.7-1.9-27c0.8-8.3,1.6-15.7,3.1-32.7C313.4,119.3,293.9,64,224,64 c-69.9,0-89.4,55.3-87.5,76.4c1.5,16.9,2.3,24.4,3.1,32.7c0.8,8.3-5.9,9.6-1.9,27c7.6,33.1,10.4,19.3,13.9,40.1 c9,52.6,23.1,36.5,23.1,64.2c0,42.8,3.9,31.5-59.3,54.6c-64.2,23.5-79.4,38-81.1,48.9C32,421.6,32,448,32,448h192H416z' })
				)
			);
		}
	}]);

	return PersonAdd;
}(_react2.default.Component);

exports.default = PersonAdd;
;PersonAdd.defaultProps = { bare: false };