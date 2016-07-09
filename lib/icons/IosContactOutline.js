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

var IosContactOutline = function (_React$Component) {
	_inherits(IosContactOutline, _React$Component);

	function IosContactOutline() {
		_classCallCheck(this, IosContactOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosContactOutline).apply(this, arguments));
	}

	_createClass(IosContactOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,65.3 c105.1,0,190.7,85.5,190.7,190.7c0,46.5-16.7,89.1-44.4,122.2c-20-8.2-65.9-24.1-92.9-32.1c-2.4-0.7-2.7-0.9-2.7-10.7 c0-8.1,3.3-16.3,6.6-23.3c3.6-7.5,7.7-20.2,9.2-31.6c4.2-4.9,10-14.5,13.6-32.9c3.2-16.2,1.7-22.1-0.4-27.6 c-0.2-0.6-0.5-1.2-0.6-1.7c-0.8-3.8,0.3-23.5,3.1-38.8c1.9-10.5-0.5-32.8-14.9-51.3c-9.1-11.7-26.6-26-58.5-28l-17.5,0 c-31.4,2-48.8,16.3-58,28c-14.5,18.5-16.9,40.8-15,51.3c2.8,15.3,3.9,35,3.1,38.8c-0.2,0.7-0.4,1.2-0.6,1.8 c-2.1,5.5-3.7,11.4-0.4,27.6c3.7,18.4,9.4,28,13.6,32.9c1.5,11.4,5.7,24,9.2,31.6c2.6,5.5,3.8,13,3.8,23.6c0,9.9-0.4,10-2.6,10.7 c-28.1,8.3-72.6,24.3-90.4,32C82.1,345.3,65.3,302.6,65.3,256C65.3,150.9,150.9,65.3,256,65.3z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,65.3 c105.1,0,190.7,85.5,190.7,190.7c0,46.5-16.7,89.1-44.4,122.2c-20-8.2-65.9-24.1-92.9-32.1c-2.4-0.7-2.7-0.9-2.7-10.7 c0-8.1,3.3-16.3,6.6-23.3c3.6-7.5,7.7-20.2,9.2-31.6c4.2-4.9,10-14.5,13.6-32.9c3.2-16.2,1.7-22.1-0.4-27.6 c-0.2-0.6-0.5-1.2-0.6-1.7c-0.8-3.8,0.3-23.5,3.1-38.8c1.9-10.5-0.5-32.8-14.9-51.3c-9.1-11.7-26.6-26-58.5-28l-17.5,0 c-31.4,2-48.8,16.3-58,28c-14.5,18.5-16.9,40.8-15,51.3c2.8,15.3,3.9,35,3.1,38.8c-0.2,0.7-0.4,1.2-0.6,1.8 c-2.1,5.5-3.7,11.4-0.4,27.6c3.7,18.4,9.4,28,13.6,32.9c1.5,11.4,5.7,24,9.2,31.6c2.6,5.5,3.8,13,3.8,23.6c0,9.9-0.4,10-2.6,10.7 c-28.1,8.3-72.6,24.3-90.4,32C82.1,345.3,65.3,302.6,65.3,256C65.3,150.9,150.9,65.3,256,65.3z' })
			);
		}
	}]);

	return IosContactOutline;
}(_react2.default.Component);

exports.default = IosContactOutline;
;IosContactOutline.defaultProps = { bare: false };