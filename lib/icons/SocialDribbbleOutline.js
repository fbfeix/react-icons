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

var SocialDribbbleOutline = function (_React$Component) {
	_inherits(SocialDribbbleOutline, _React$Component);

	function SocialDribbbleOutline() {
		_classCallCheck(this, SocialDribbbleOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialDribbbleOutline).apply(this, arguments));
	}

	_createClass(SocialDribbbleOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,64C150,64,64,150,64,256c0,106.1,86,192,192,192s192-85.9,192-192C448,150,362,64,256,64z M377.9,152.5 c21.6,25.4,35.3,57.6,37.7,92.9c-34.6-1.8-76-1.8-109.2,1.3c-4.2-10.6-8.5-21-13.2-31C331.5,199.1,361,177.3,377.9,152.5z M256,96 c38.8,0,74.4,13.8,102.1,36.8c-17.4,22-44.7,41.1-78.7,55.6c-18.6-34.4-40-64-62.8-87.3C229.3,97.9,242.4,96,256,96z M183.6,113.5 c23.1,23,44.8,52.3,63.8,86.6c-36.1,11-77.5,17.3-121.7,17.3c-8.4,0-16.6-0.3-24.7-0.8C112.5,171.5,143,134.1,183.6,113.5z M96.3,248.4c9.1,0.4,18.3,0.6,27.6,0.5c50.4-0.6,97.3-8.5,137.6-21.4c3.8,7.9,7.4,16,10.8,24.3c-5.5,1.3-10.4,2.7-14.3,4.3 c-55.1,23.1-98.5,60.4-122,105.5c-24.8-28.2-40-65.1-40-105.6C96,253.4,96.1,250.9,96.3,248.4z M256,416c-37,0-71-12.6-98.1-33.7 c21.3-42.2,59.3-77.1,107.2-98.8c4.5-2.1,10.5-3.8,17.4-5.3c5.7,15.8,10.8,32.2,15.3,49.2c6.9,26.5,11.8,52.7,14.8,78.1 C295,412.2,276,416,256,416z M342.5,390.5c-3-25.7-7.9-52.1-14.9-78.9c-3.4-13-7.3-25.6-11.5-37.9c31.4-2.6,69-2.2,98.9,0 C409.6,322.8,382,365,342.5,390.5z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,64C150,64,64,150,64,256c0,106.1,86,192,192,192s192-85.9,192-192C448,150,362,64,256,64z M377.9,152.5 c21.6,25.4,35.3,57.6,37.7,92.9c-34.6-1.8-76-1.8-109.2,1.3c-4.2-10.6-8.5-21-13.2-31C331.5,199.1,361,177.3,377.9,152.5z M256,96 c38.8,0,74.4,13.8,102.1,36.8c-17.4,22-44.7,41.1-78.7,55.6c-18.6-34.4-40-64-62.8-87.3C229.3,97.9,242.4,96,256,96z M183.6,113.5 c23.1,23,44.8,52.3,63.8,86.6c-36.1,11-77.5,17.3-121.7,17.3c-8.4,0-16.6-0.3-24.7-0.8C112.5,171.5,143,134.1,183.6,113.5z M96.3,248.4c9.1,0.4,18.3,0.6,27.6,0.5c50.4-0.6,97.3-8.5,137.6-21.4c3.8,7.9,7.4,16,10.8,24.3c-5.5,1.3-10.4,2.7-14.3,4.3 c-55.1,23.1-98.5,60.4-122,105.5c-24.8-28.2-40-65.1-40-105.6C96,253.4,96.1,250.9,96.3,248.4z M256,416c-37,0-71-12.6-98.1-33.7 c21.3-42.2,59.3-77.1,107.2-98.8c4.5-2.1,10.5-3.8,17.4-5.3c5.7,15.8,10.8,32.2,15.3,49.2c6.9,26.5,11.8,52.7,14.8,78.1 C295,412.2,276,416,256,416z M342.5,390.5c-3-25.7-7.9-52.1-14.9-78.9c-3.4-13-7.3-25.6-11.5-37.9c31.4-2.6,69-2.2,98.9,0 C409.6,322.8,382,365,342.5,390.5z' })
			);
		}
	}]);

	return SocialDribbbleOutline;
}(_react2.default.Component);

exports.default = SocialDribbbleOutline;
;SocialDribbbleOutline.defaultProps = { bare: false };