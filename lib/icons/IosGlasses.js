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

var IosGlasses = function (_React$Component) {
	_inherits(IosGlasses, _React$Component);

	function IosGlasses() {
		_classCallCheck(this, IosGlasses);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosGlasses).apply(this, arguments));
	}

	_createClass(IosGlasses, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M465.4,247c-2.2-22-12.4-43-28.9-58.4c-17.1-15.9-39.3-24.7-62.7-24.7c-41.5,0-77.3,27.4-88.5,67c-7-7-18.5-11.7-29.3-11.7 c-10.8,0-22.3,4.7-29.3,11.7c-11.2-39.6-47-67-88.5-67c-23.3,0-45.6,8.7-62.7,24.6C59,204,48.8,225,46.6,247H32v18h14.6 c2.2,22,12.4,43,28.9,58.4c17.1,15.9,39.3,24.7,62.7,24.7c50.8,0,92.1-41.2,92.1-92c0-0.1,0-0.1,0-0.1h0c0-9.9,11.5-21.6,25.7-21.6 s25.7,11.7,25.7,21.6h0c0,0,0,0,0,0.1c0,50.8,41.3,92,92.1,92c23.3,0,45.6-8.7,62.7-24.7c16.5-15.4,26.7-36.5,28.9-58.5H480v-18 H465.4z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M465.4,247c-2.2-22-12.4-43-28.9-58.4c-17.1-15.9-39.3-24.7-62.7-24.7c-41.5,0-77.3,27.4-88.5,67c-7-7-18.5-11.7-29.3-11.7 c-10.8,0-22.3,4.7-29.3,11.7c-11.2-39.6-47-67-88.5-67c-23.3,0-45.6,8.7-62.7,24.6C59,204,48.8,225,46.6,247H32v18h14.6 c2.2,22,12.4,43,28.9,58.4c17.1,15.9,39.3,24.7,62.7,24.7c50.8,0,92.1-41.2,92.1-92c0-0.1,0-0.1,0-0.1h0c0-9.9,11.5-21.6,25.7-21.6 s25.7,11.7,25.7,21.6h0c0,0,0,0,0,0.1c0,50.8,41.3,92,92.1,92c23.3,0,45.6-8.7,62.7-24.7c16.5-15.4,26.7-36.5,28.9-58.5H480v-18 H465.4z' })
			);
		}
	}]);

	return IosGlasses;
}(_react2.default.Component);

exports.default = IosGlasses;
;IosGlasses.defaultProps = { bare: false };