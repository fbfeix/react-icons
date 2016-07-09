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

var IosBellOutline = function (_React$Component) {
	_inherits(IosBellOutline, _React$Component);

	function IosBellOutline() {
		_classCallCheck(this, IosBellOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBellOutline).apply(this, arguments));
	}

	_createClass(IosBellOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M381.7,225.9c0-97.6-52.5-130.8-101.6-138.2c0-0.5,0.1-1,0.1-1.6c0-12.3-10.9-22.1-24.2-22.1c-13.3,0-23.8,9.8-23.8,22.1 c0,0.6,0,1.1,0.1,1.6c-49.2,7.5-102,40.8-102,138.4c0,113.8-28.3,126-66.3,158h384C410.2,352,381.7,339.7,381.7,225.9z M107.2,368 c8.6-9,16.4-18.4,22.7-31.8c12-25.3,17.4-59.2,17.4-110.2c0-46.4,12.5-80.4,37.1-101.2c22.9-19.3,51.7-23.3,71.8-23.3 c20.1,0,48.9,4,71.6,23.3c24.5,20.7,37,54.5,37,100.9c0,83.8,14.9,117.3,40.3,142.3H107.2z' }),
						_react2.default.createElement('path', { d: 'M256.2,448c26.8,0,48.8-19.9,51.7-43H204.5C207.3,428.1,229.4,448,256.2,448z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M381.7,225.9c0-97.6-52.5-130.8-101.6-138.2c0-0.5,0.1-1,0.1-1.6c0-12.3-10.9-22.1-24.2-22.1c-13.3,0-23.8,9.8-23.8,22.1 c0,0.6,0,1.1,0.1,1.6c-49.2,7.5-102,40.8-102,138.4c0,113.8-28.3,126-66.3,158h384C410.2,352,381.7,339.7,381.7,225.9z M107.2,368 c8.6-9,16.4-18.4,22.7-31.8c12-25.3,17.4-59.2,17.4-110.2c0-46.4,12.5-80.4,37.1-101.2c22.9-19.3,51.7-23.3,71.8-23.3 c20.1,0,48.9,4,71.6,23.3c24.5,20.7,37,54.5,37,100.9c0,83.8,14.9,117.3,40.3,142.3H107.2z' }),
					_react2.default.createElement('path', { d: 'M256.2,448c26.8,0,48.8-19.9,51.7-43H204.5C207.3,428.1,229.4,448,256.2,448z' })
				)
			);
		}
	}]);

	return IosBellOutline;
}(_react2.default.Component);

exports.default = IosBellOutline;
;IosBellOutline.defaultProps = { bare: false };