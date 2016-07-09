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

var Thumbsdown = function (_React$Component) {
	_inherits(Thumbsdown, _React$Component);

	function Thumbsdown() {
		_classCallCheck(this, Thumbsdown);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Thumbsdown).apply(this, arguments));
	}

	_createClass(Thumbsdown, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M87.8,252.7C74,257.2,64,270.2,64,285.5c0,19,15.4,34.5,34.5,34.5h102.6c-2,25-10,53.6-1.1,87.3 c7.5,28.4,39.4,49.7,52.4,36.8c5-4.9,3.5-15.2,3.5-33.8c0-42.8,17.8-86.1,39.8-108.7c9.4-9.7,25.2-13,40.2-13.6v16h112V64H336v32 c-20.6,0.5-52.6-5.2-75.8-6.6c-52-3.1-102,2.4-126.3,8.1c-24.3,5.7-35,13-35,30.6c0,6.4,1.9,12.3,5.1,17.3 c-11.8,4.7-20.1,16.2-20.1,29.7c0,7.2,2.4,13.8,6.4,19.2c-11.9,4.6-20.4,16.2-20.4,29.8C70,236.6,77.3,247.5,87.8,252.7z M400,96.3 c8.8,0,16,7.1,16,16c0,8.8-7.2,16-16,16s-16-7.1-16-16C384,103.5,391.2,96.3,400,96.3z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M87.8,252.7C74,257.2,64,270.2,64,285.5c0,19,15.4,34.5,34.5,34.5h102.6c-2,25-10,53.6-1.1,87.3 c7.5,28.4,39.4,49.7,52.4,36.8c5-4.9,3.5-15.2,3.5-33.8c0-42.8,17.8-86.1,39.8-108.7c9.4-9.7,25.2-13,40.2-13.6v16h112V64H336v32 c-20.6,0.5-52.6-5.2-75.8-6.6c-52-3.1-102,2.4-126.3,8.1c-24.3,5.7-35,13-35,30.6c0,6.4,1.9,12.3,5.1,17.3 c-11.8,4.7-20.1,16.2-20.1,29.7c0,7.2,2.4,13.8,6.4,19.2c-11.9,4.6-20.4,16.2-20.4,29.8C70,236.6,77.3,247.5,87.8,252.7z M400,96.3 c8.8,0,16,7.1,16,16c0,8.8-7.2,16-16,16s-16-7.1-16-16C384,103.5,391.2,96.3,400,96.3z' })
				)
			);
		}
	}]);

	return Thumbsdown;
}(_react2.default.Component);

exports.default = Thumbsdown;
;Thumbsdown.defaultProps = { bare: false };