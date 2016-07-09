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

var IosPersonadd = function (_React$Component) {
	_inherits(IosPersonadd, _React$Component);

	function IosPersonadd() {
		_classCallCheck(this, IosPersonadd);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPersonadd).apply(this, arguments));
	}

	_createClass(IosPersonadd, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '416,153 391,153 391,128 377,128 377,153 352,153 352,167 377,167 377,192 391,192 391,167 416,167 \t' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M363.3,363.9c-12.9-4.6-31.4-6.2-43.2-8.8c-6.8-1.5-16.7-5.3-20-9.2c-3.3-4-1.3-40.9-1.3-40.9s6.1-9.6,9.4-18 c3.3-8.4,6.9-31.4,6.9-31.4s6.8,0,9.2-11.9c2.6-13,6.6-18.4,6.1-28.1c-0.5-9-5.2-9.5-5.7-9.5c0,0,0,0,0,0s4.9-13.6,5.6-42.4 C331.1,129.6,305,96,256,96c-49,0-75,33.5-74.3,67.6c0.6,28.7,5.6,42.4,5.6,42.4s0,0,0,0c-0.5,0-5.2,0.5-5.7,9.5 c-0.5,9.7,3.6,14.9,6.1,27.9c2.4,11.9,9.2,12,9.2,12s3.6,23.1,6.9,31.5c3.3,8.5,9.4,18,9.4,18s2,36.9-1.3,40.9 c-3.3,4-13.2,7.7-20,9.2c-11.9,2.6-30.3,4.3-43.2,8.9C135.8,368.5,96,384,96,416h160h160C416,384,376.2,368.5,363.3,363.9z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '416,153 391,153 391,128 377,128 377,153 352,153 352,167 377,167 377,192 391,192 391,167 416,167 \t' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M363.3,363.9c-12.9-4.6-31.4-6.2-43.2-8.8c-6.8-1.5-16.7-5.3-20-9.2c-3.3-4-1.3-40.9-1.3-40.9s6.1-9.6,9.4-18 c3.3-8.4,6.9-31.4,6.9-31.4s6.8,0,9.2-11.9c2.6-13,6.6-18.4,6.1-28.1c-0.5-9-5.2-9.5-5.7-9.5c0,0,0,0,0,0s4.9-13.6,5.6-42.4 C331.1,129.6,305,96,256,96c-49,0-75,33.5-74.3,67.6c0.6,28.7,5.6,42.4,5.6,42.4s0,0,0,0c-0.5,0-5.2,0.5-5.7,9.5 c-0.5,9.7,3.6,14.9,6.1,27.9c2.4,11.9,9.2,12,9.2,12s3.6,23.1,6.9,31.5c3.3,8.5,9.4,18,9.4,18s2,36.9-1.3,40.9 c-3.3,4-13.2,7.7-20,9.2c-11.9,2.6-30.3,4.3-43.2,8.9C135.8,368.5,96,384,96,416h160h160C416,384,376.2,368.5,363.3,363.9z' })
					)
				)
			);
		}
	}]);

	return IosPersonadd;
}(_react2.default.Component);

exports.default = IosPersonadd;
;IosPersonadd.defaultProps = { bare: false };