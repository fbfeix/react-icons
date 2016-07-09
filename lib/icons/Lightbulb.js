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

var Lightbulb = function (_React$Component) {
	_inherits(Lightbulb, _React$Component);

	function Lightbulb() {
		_classCallCheck(this, Lightbulb);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Lightbulb).apply(this, arguments));
	}

	_createClass(Lightbulb, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,32c-70.7,0-128,55.4-128,123.8c0,4.9,0.3,9.7,0.9,14.5c0.6,5.4,1.6,10.6,3,15.7c0.1,0.5,0.3,1.1,0.4,1.6 c16.6,62.8,45.3,71.5,58.9,167.6c0,0.2,0.1,0.4,0.1,0.5c1.5,9.2,9.8,12.3,19.8,12.3H301c10,0,18.2-3.1,19.7-12.3 c0-0.2,0.1-0.4,0.1-0.5c13.6-96.1,42.3-104.7,58.9-167.6c0.2-0.5,0.3-1,0.4-1.6c1.3-5.1,2.3-10.4,3-15.7c0.6-4.7,0.9-9.6,0.9-14.5 C384,87.4,326.7,32,256,32z' }),
						_react2.default.createElement('path', { d: 'M317.8,396.5c0.1-0.2,0.3-0.4,0.4-0.6c1.1-1.7,1.7-3.6,1.7-5.7c0-3.5,1.6-6.2-6.5-6.2H198.6c-8.1,0-6.5,2.1-6.5,6.2 c0,2.1,0.6,4,1.7,5.7c0.1,0.2,0.3,0.4,0.5,0.6c0,0.1,0.1,0.1,0.1,0.2c1.7,2.6,2.7,4.4,2.7,7.6c0,3.1-0.9,4.9-2.6,7.5 c-0.3,0.4-0.5,0.7-0.7,1c-1,1.7-1.6,3.6-1.6,5.6c0,2.1,0.6,4,1.7,5.8c0.1,0.2,0.3,0.4,0.4,0.6c1.8,2.7,2.8,4.5,2.8,7.8 c0,3.1-0.9,4.9-2.6,7.4c-0.2,0.4-0.5,0.7-0.8,1.1c-1,1.7-1.6,3.6-1.6,5.6c0,5.4,4.3,10.1,10.2,11.6c0.3,0.1,0.6,0.1,0.9,0.2 c6,1.4,12.2,1.6,18.5,2.5c0.7,0.1,1.4,0.2,2.2,0.3c5.6,1,10.3,3.9,13.4,7.7l0,0c3.8,5.3,10.8,11,18.8,11c7.6,0,14.3-5.4,18.2-10.4 h0c3-4.2,8-7.3,13.9-8.4c0.7-0.1,1.4-0.3,2.2-0.3c6.3-0.9,12.5-1.1,18.5-2.5c0.3-0.1,0.6-0.1,0.9-0.2c5.9-1.6,10.2-6.2,10.2-11.6 c0-2-0.6-3.9-1.6-5.6c-0.3-0.4-0.5-0.7-0.8-1.1c-1.6-2.6-2.6-4.3-2.6-7.4c0-3.2,1-5.1,2.8-7.8c0.1-0.2,0.3-0.4,0.4-0.6 c1.1-1.7,1.7-3.7,1.7-5.8c0-2-0.6-3.9-1.6-5.6c-0.3-0.3-0.5-0.7-0.7-1c-1.6-2.6-2.6-4.3-2.6-7.5c0-3.2,1-5,2.7-7.6 C317.7,396.7,317.7,396.6,317.8,396.5z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32c-70.7,0-128,55.4-128,123.8c0,4.9,0.3,9.7,0.9,14.5c0.6,5.4,1.6,10.6,3,15.7c0.1,0.5,0.3,1.1,0.4,1.6 c16.6,62.8,45.3,71.5,58.9,167.6c0,0.2,0.1,0.4,0.1,0.5c1.5,9.2,9.8,12.3,19.8,12.3H301c10,0,18.2-3.1,19.7-12.3 c0-0.2,0.1-0.4,0.1-0.5c13.6-96.1,42.3-104.7,58.9-167.6c0.2-0.5,0.3-1,0.4-1.6c1.3-5.1,2.3-10.4,3-15.7c0.6-4.7,0.9-9.6,0.9-14.5 C384,87.4,326.7,32,256,32z' }),
					_react2.default.createElement('path', { d: 'M317.8,396.5c0.1-0.2,0.3-0.4,0.4-0.6c1.1-1.7,1.7-3.6,1.7-5.7c0-3.5,1.6-6.2-6.5-6.2H198.6c-8.1,0-6.5,2.1-6.5,6.2 c0,2.1,0.6,4,1.7,5.7c0.1,0.2,0.3,0.4,0.5,0.6c0,0.1,0.1,0.1,0.1,0.2c1.7,2.6,2.7,4.4,2.7,7.6c0,3.1-0.9,4.9-2.6,7.5 c-0.3,0.4-0.5,0.7-0.7,1c-1,1.7-1.6,3.6-1.6,5.6c0,2.1,0.6,4,1.7,5.8c0.1,0.2,0.3,0.4,0.4,0.6c1.8,2.7,2.8,4.5,2.8,7.8 c0,3.1-0.9,4.9-2.6,7.4c-0.2,0.4-0.5,0.7-0.8,1.1c-1,1.7-1.6,3.6-1.6,5.6c0,5.4,4.3,10.1,10.2,11.6c0.3,0.1,0.6,0.1,0.9,0.2 c6,1.4,12.2,1.6,18.5,2.5c0.7,0.1,1.4,0.2,2.2,0.3c5.6,1,10.3,3.9,13.4,7.7l0,0c3.8,5.3,10.8,11,18.8,11c7.6,0,14.3-5.4,18.2-10.4 h0c3-4.2,8-7.3,13.9-8.4c0.7-0.1,1.4-0.3,2.2-0.3c6.3-0.9,12.5-1.1,18.5-2.5c0.3-0.1,0.6-0.1,0.9-0.2c5.9-1.6,10.2-6.2,10.2-11.6 c0-2-0.6-3.9-1.6-5.6c-0.3-0.4-0.5-0.7-0.8-1.1c-1.6-2.6-2.6-4.3-2.6-7.4c0-3.2,1-5.1,2.8-7.8c0.1-0.2,0.3-0.4,0.4-0.6 c1.1-1.7,1.7-3.7,1.7-5.8c0-2-0.6-3.9-1.6-5.6c-0.3-0.3-0.5-0.7-0.7-1c-1.6-2.6-2.6-4.3-2.6-7.5c0-3.2,1-5,2.7-7.6 C317.7,396.7,317.7,396.6,317.8,396.5z' })
				)
			);
		}
	}]);

	return Lightbulb;
}(_react2.default.Component);

exports.default = Lightbulb;
;Lightbulb.defaultProps = { bare: false };