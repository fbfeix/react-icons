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

var Paperclip = function (_React$Component) {
	_inherits(Paperclip, _React$Component);

	function Paperclip() {
		_classCallCheck(this, Paperclip);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Paperclip).apply(this, arguments));
	}

	_createClass(Paperclip, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M324.6,154.9c-6.3-0.1-11.4,5.1-11.4,11.6L313,361.3c-0.1,43.8-29.7,63.4-57.2,63.2c-27.5-0.3-57.1-20.4-57-64.1 c0-33.5,0.2-167.7,0.3-234.8c0-15.4,6-27.4,16.8-33.7c10.6-6.2,24.4-6.1,35,0.3c10.8,6.5,16.7,18.6,16.7,34l-0.3,224.5 c0,7.3-1.7,13.3-4.7,17.1c-1.9,2.4-4.4,3.8-6.9,3.8c-5.6-0.1-11.4-7.3-11.3-20.8c0,0,0.2-166.3,0.3-172.7c0-6.5-5.1-11.8-11.4-11.8 c-6.3,0-11.4,5.2-11.4,11.7l-0.3,172.7c0,29,17.2,44.3,34.2,44.5c9.4,0.1,18.3-4.4,24.6-12.4c6.3-8,9.7-19,9.7-31.8l0.3-224.5 c0-23.8-10.2-43.6-28.1-54.3c-17.5-10.6-40.3-10.8-57.9-0.5c-17.9,10.5-28.2,30.1-28.3,53.9c-0.1,67-0.2,201.2-0.3,234.8 c-0.1,57.2,40.1,87.4,79.8,87.8c20.5,0.2,41.1-7.7,56.3-23.1c14.2-14.5,23.7-35.7,23.7-63.4l0.1-194.9 C336,160.2,330.9,154.9,324.6,154.9z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M324.6,154.9c-6.3-0.1-11.4,5.1-11.4,11.6L313,361.3c-0.1,43.8-29.7,63.4-57.2,63.2c-27.5-0.3-57.1-20.4-57-64.1 c0-33.5,0.2-167.7,0.3-234.8c0-15.4,6-27.4,16.8-33.7c10.6-6.2,24.4-6.1,35,0.3c10.8,6.5,16.7,18.6,16.7,34l-0.3,224.5 c0,7.3-1.7,13.3-4.7,17.1c-1.9,2.4-4.4,3.8-6.9,3.8c-5.6-0.1-11.4-7.3-11.3-20.8c0,0,0.2-166.3,0.3-172.7c0-6.5-5.1-11.8-11.4-11.8 c-6.3,0-11.4,5.2-11.4,11.7l-0.3,172.7c0,29,17.2,44.3,34.2,44.5c9.4,0.1,18.3-4.4,24.6-12.4c6.3-8,9.7-19,9.7-31.8l0.3-224.5 c0-23.8-10.2-43.6-28.1-54.3c-17.5-10.6-40.3-10.8-57.9-0.5c-17.9,10.5-28.2,30.1-28.3,53.9c-0.1,67-0.2,201.2-0.3,234.8 c-0.1,57.2,40.1,87.4,79.8,87.8c20.5,0.2,41.1-7.7,56.3-23.1c14.2-14.5,23.7-35.7,23.7-63.4l0.1-194.9 C336,160.2,330.9,154.9,324.6,154.9z' })
			);
		}
	}]);

	return Paperclip;
}(_react2.default.Component);

exports.default = Paperclip;
;Paperclip.defaultProps = { bare: false };