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

var IosFlagOutline = function (_React$Component) {
	_inherits(IosFlagOutline, _React$Component);

	function IosFlagOutline() {
		_classCallCheck(this, IosFlagOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosFlagOutline).apply(this, arguments));
	}

	_createClass(IosFlagOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M368,112c-11,1.4-24.9,3.5-39.7,3.5c-23.1,0-44-5.7-65.2-10.2c-21.5-4.6-43.7-9.3-67.2-9.3c-46.9,0-62.8,10.1-64.4,11.2 l-3.4,2.4v2.6v161.7V416h16V272.7c6-2.5,21.8-6.9,51.9-6.9c21.8,0,42.2,8.3,63.9,13c22,4.7,44.8,9.6,69.5,9.6 c14.7,0,27.7-2,38.7-3.3c6-0.7,11.3-1.4,16-2.2V126v-16.5C379.4,110.4,374,111.2,368,112z M368,269c-11,1.4-23.9,3.5-38.7,3.5 c-23.1,0-45-4.7-66.2-9.2c-21.5-4.6-43.6-13.3-67.1-13.3c-25.7,0-41.9,3-51.9,6V118.7c6-2.5,21.9-6.8,51.9-6.8 c21.8,0,42.2,4.3,63.9,9c22,4.7,43.8,10.6,68.5,10.6c14.7,0,28.7-2,39.7-3.3L368,269L368,269z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M368,112c-11,1.4-24.9,3.5-39.7,3.5c-23.1,0-44-5.7-65.2-10.2c-21.5-4.6-43.7-9.3-67.2-9.3c-46.9,0-62.8,10.1-64.4,11.2 l-3.4,2.4v2.6v161.7V416h16V272.7c6-2.5,21.8-6.9,51.9-6.9c21.8,0,42.2,8.3,63.9,13c22,4.7,44.8,9.6,69.5,9.6 c14.7,0,27.7-2,38.7-3.3c6-0.7,11.3-1.4,16-2.2V126v-16.5C379.4,110.4,374,111.2,368,112z M368,269c-11,1.4-23.9,3.5-38.7,3.5 c-23.1,0-45-4.7-66.2-9.2c-21.5-4.6-43.6-13.3-67.1-13.3c-25.7,0-41.9,3-51.9,6V118.7c6-2.5,21.9-6.8,51.9-6.8 c21.8,0,42.2,4.3,63.9,9c22,4.7,43.8,10.6,68.5,10.6c14.7,0,28.7-2,39.7-3.3L368,269L368,269z' })
				)
			);
		}
	}]);

	return IosFlagOutline;
}(_react2.default.Component);

exports.default = IosFlagOutline;
;IosFlagOutline.defaultProps = { bare: false };