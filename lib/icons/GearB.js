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

var GearB = function (_React$Component) {
	_inherits(GearB, _React$Component);

	function GearB() {
		_classCallCheck(this, GearB);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(GearB).apply(this, arguments));
	}

	_createClass(GearB, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M448,294.4v-76.8h-42.8c-3.4-14.4-8.9-28-16.1-40.5l29.8-29.7l-54.3-54.3l-29.1,29.1c-12.6-7.7-26.4-13.5-41.1-17.3V64 h-76.8v40.9c-14.7,3.8-28.5,9.7-41.1,17.3l-29.1-29.1l-54.3,54.3l29.8,29.7c-7.2,12.5-12.6,26.1-16.1,40.5H64v76.8h44.1 c3.8,13.7,9.5,26.6,16.7,38.6l-31.7,31.7l54.3,54.3l32.3-32.3c11.7,6.8,24.5,11.9,37.9,15.4v46h76.8v-46 c13.5-3.5,26.2-8.6,37.9-15.4l32.3,32.3l54.3-54.3L387.3,333c7.2-11.9,12.9-24.8,16.7-38.6H448z M256,309.8 c-29.7,0-53.7-24.1-53.7-53.8s24-53.8,53.7-53.8s53.8,24.1,53.8,53.8S285.7,309.8,256,309.8z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M448,294.4v-76.8h-42.8c-3.4-14.4-8.9-28-16.1-40.5l29.8-29.7l-54.3-54.3l-29.1,29.1c-12.6-7.7-26.4-13.5-41.1-17.3V64 h-76.8v40.9c-14.7,3.8-28.5,9.7-41.1,17.3l-29.1-29.1l-54.3,54.3l29.8,29.7c-7.2,12.5-12.6,26.1-16.1,40.5H64v76.8h44.1 c3.8,13.7,9.5,26.6,16.7,38.6l-31.7,31.7l54.3,54.3l32.3-32.3c11.7,6.8,24.5,11.9,37.9,15.4v46h76.8v-46 c13.5-3.5,26.2-8.6,37.9-15.4l32.3,32.3l54.3-54.3L387.3,333c7.2-11.9,12.9-24.8,16.7-38.6H448z M256,309.8 c-29.7,0-53.7-24.1-53.7-53.8s24-53.8,53.7-53.8s53.8,24.1,53.8,53.8S285.7,309.8,256,309.8z' })
			);
		}
	}]);

	return GearB;
}(_react2.default.Component);

exports.default = GearB;
;GearB.defaultProps = { bare: false };