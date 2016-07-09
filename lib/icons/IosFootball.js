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

var IosFootball = function (_React$Component) {
	_inherits(IosFootball, _React$Component);

	function IosFootball() {
		_classCallCheck(this, IosFootball);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosFootball).apply(this, arguments));
	}

	_createClass(IosFootball, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48C141.137,48,48,141.136,48,256c0,114.864,93.137,208,208,208c114.872,0,208-93.138,208-208 C464,141.138,370.87,48,256,48z M297.151,442.179c-13.514,2.657-30.327,4.187-44,4.45c-13.198-0.195-26.074-1.735-38.5-4.493 c-2.144-0.549-4.383-1.138-6.805-1.777l-24.417-65.435L203.074,336h105.854l0.57,1.076l19.34,38.852L305.22,440.21 C302.553,440.924,299.862,441.579,297.151,442.179z M189.578,77.28L247,116.576v58.147l-70.997,60.067L126.6,212.28l-4.167-1.899 l-22.332-64.019C122.11,115.158,153.239,90.83,189.578,77.28z M411.564,146.067l-22.432,64.483l-53.992,24.388L264,174.723v-58.147 l57.596-39.415C357.958,90.644,389.501,114.913,411.564,146.067z M66.144,273.414l53.756-46.518l49.539,22.599l0.559,0.255 l19.718,77.287l-20.433,38.529l-69.86-0.915C81.075,338.291,69.209,307.105,66.144,273.414z M342.719,365.565l-20.434-38.529 l19.752-77.416l49.997-22.781l53.822,46.575c-3.065,33.691-14.932,64.877-33.277,91.236L342.719,365.565z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,48C141.137,48,48,141.136,48,256c0,114.864,93.137,208,208,208c114.872,0,208-93.138,208-208 C464,141.138,370.87,48,256,48z M297.151,442.179c-13.514,2.657-30.327,4.187-44,4.45c-13.198-0.195-26.074-1.735-38.5-4.493 c-2.144-0.549-4.383-1.138-6.805-1.777l-24.417-65.435L203.074,336h105.854l0.57,1.076l19.34,38.852L305.22,440.21 C302.553,440.924,299.862,441.579,297.151,442.179z M189.578,77.28L247,116.576v58.147l-70.997,60.067L126.6,212.28l-4.167-1.899 l-22.332-64.019C122.11,115.158,153.239,90.83,189.578,77.28z M411.564,146.067l-22.432,64.483l-53.992,24.388L264,174.723v-58.147 l57.596-39.415C357.958,90.644,389.501,114.913,411.564,146.067z M66.144,273.414l53.756-46.518l49.539,22.599l0.559,0.255 l19.718,77.287l-20.433,38.529l-69.86-0.915C81.075,338.291,69.209,307.105,66.144,273.414z M342.719,365.565l-20.434-38.529 l19.752-77.416l49.997-22.781l53.822,46.575c-3.065,33.691-14.932,64.877-33.277,91.236L342.719,365.565z' })
			);
		}
	}]);

	return IosFootball;
}(_react2.default.Component);

exports.default = IosFootball;
;IosFootball.defaultProps = { bare: false };