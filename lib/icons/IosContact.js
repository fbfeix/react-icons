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

var IosContact = function (_React$Component) {
	_inherits(IosContact, _React$Component);

	function IosContact() {
		_classCallCheck(this, IosContact);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosContact).apply(this, arguments));
	}

	_createClass(IosContact, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,446.7c-58.6,0-111.1-26.6-146.1-68.3c17.8-7.7,62.2-23.7,90.3-31.9c2.2-0.7,2.6-0.8,2.6-10.7c0-10.6-1.2-18.1-3.8-23.6 c-3.5-7.5-7.7-20.2-9.2-31.6c-4.2-4.9-9.9-14.5-13.6-32.9c-3.2-16.2-1.7-22.1,0.4-27.6c0.2-0.6,0.5-1.2,0.6-1.8 c0.8-3.7-0.3-23.5-3.1-38.8c-1.9-10.5,0.5-32.8,15-51.3c9.1-11.7,26.6-26,58-28l17.5,0c31.9,2,49.4,16.3,58.5,28 c14.5,18.5,16.9,40.8,14.9,51.3c-2.8,15.3-3.9,35-3.1,38.8c0.1,0.6,0.4,1.2,0.6,1.7c2.1,5.5,3.7,11.4,0.4,27.6 c-3.7,18.4-9.4,28-13.6,32.9c-1.5,11.4-5.7,24-9.2,31.6c-3.3,6.9-6.6,15.1-6.6,23.3c0,9.9,0.4,10,2.7,10.7 c26.7,7.9,72.7,23.8,93,32.1C367.2,420,314.7,446.7,256,446.7z' })
			);
		}
	}]);

	return IosContact;
}(_react2.default.Component);

exports.default = IosContact;
;