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

var SocialRssOutline = function (_React$Component) {
	_inherits(SocialRssOutline, _React$Component);

	function SocialRssOutline() {
		_classCallCheck(this, SocialRssOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialRssOutline).apply(this, arguments));
	}

	_createClass(SocialRssOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M119.9,336.1c-30.8,0-55.9,25.1-55.9,55.8c0,30.8,25.1,55.6,55.9,55.6c30.9,0,55.9-24.9,55.9-55.6 C175.8,361.2,150.8,336.1,119.9,336.1z M119.9,431.5c-22,0-39.9-17.8-39.9-39.6c0-21.9,17.9-39.8,39.9-39.8 c22,0,39.9,17.9,39.9,39.8C159.8,413.7,141.9,431.5,119.9,431.5z' }),
						_react2.default.createElement('path', { d: 'M64,192v79.9c48,0,94.1,14.2,128,48.1c33.9,33.9,48,79.9,48,128h80C320,308.1,204,192,64,192z M303.5,432h-48 c-3.1-49.7-21-92.1-52.2-123.3C172.1,277.4,130,259.5,80,256.4v-47.8c26,1.8,52.1,8,76.7,18.5c28.5,12.2,54.2,29.6,76.4,51.8 c22.2,22.2,39.6,47.9,51.8,76.4C295.5,379.9,301.7,405.6,303.5,432z' }),
						_react2.default.createElement('path', { d: 'M64,64v79.9c171,0,303.9,133,303.9,304.1H448C448,236.3,276,64,64,64z M291.4,220.5C235.4,164.4,161,132,80,128.2V80.3 C270,88.5,423.5,241.8,431.7,432h-48.2C379.7,351.1,347.3,276.5,291.4,220.5z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M119.9,336.1c-30.8,0-55.9,25.1-55.9,55.8c0,30.8,25.1,55.6,55.9,55.6c30.9,0,55.9-24.9,55.9-55.6 C175.8,361.2,150.8,336.1,119.9,336.1z M119.9,431.5c-22,0-39.9-17.8-39.9-39.6c0-21.9,17.9-39.8,39.9-39.8 c22,0,39.9,17.9,39.9,39.8C159.8,413.7,141.9,431.5,119.9,431.5z' }),
					_react2.default.createElement('path', { d: 'M64,192v79.9c48,0,94.1,14.2,128,48.1c33.9,33.9,48,79.9,48,128h80C320,308.1,204,192,64,192z M303.5,432h-48 c-3.1-49.7-21-92.1-52.2-123.3C172.1,277.4,130,259.5,80,256.4v-47.8c26,1.8,52.1,8,76.7,18.5c28.5,12.2,54.2,29.6,76.4,51.8 c22.2,22.2,39.6,47.9,51.8,76.4C295.5,379.9,301.7,405.6,303.5,432z' }),
					_react2.default.createElement('path', { d: 'M64,64v79.9c171,0,303.9,133,303.9,304.1H448C448,236.3,276,64,64,64z M291.4,220.5C235.4,164.4,161,132,80,128.2V80.3 C270,88.5,423.5,241.8,431.7,432h-48.2C379.7,351.1,347.3,276.5,291.4,220.5z' })
				)
			);
		}
	}]);

	return SocialRssOutline;
}(_react2.default.Component);

exports.default = SocialRssOutline;
;SocialRssOutline.defaultProps = { bare: false };