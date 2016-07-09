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

var SocialAndroid = function (_React$Component) {
	_inherits(SocialAndroid, _React$Component);

	function SocialAndroid() {
		_classCallCheck(this, SocialAndroid);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialAndroid).apply(this, arguments));
	}

	_createClass(SocialAndroid, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M144,268.4V358c0,6.9,4.5,14,11.4,14H184v52c0,13.3,10.7,24,24,24s24-10.7,24-24v-52h49v52c0,7.5,3.4,14.2,8.8,18.6 c3.9,3.4,9.1,5.4,14.7,5.4c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c13.3,0,24-10.7,24-24v-52h27.6c7,0,11.4-7.1,11.4-13.9v-89.6V192 H144V268.4z' }),
						_react2.default.createElement('path', { d: 'M408,176c-13.3,0-24,10.7-24,24v96c0,13.3,10.7,24,24,24s24-10.7,24-24v-96C432,186.7,421.3,176,408,176z' }),
						_react2.default.createElement('path', { d: 'M104,176c-13.3,0-24,10.7-24,24v96c0,13.3,10.7,24,24,24s24-10.7,24-24v-96C128,186.7,117.3,176,104,176z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M311.2,89.1l18.5-21.9c0.4-0.5-0.2-1.6-1.3-2.5c-1.1-0.8-2.4-1-2.7-0.4l-19.2,22.8c-13.6-5.4-30.2-8.8-50.6-8.8 c-20.5-0.1-37.2,3.2-50.8,8.5l-19-22.4c-0.4-0.5-1.6-0.4-2.7,0.4c-1.1,0.8-1.7,1.8-1.3,2.5l18.3,21.6 c-48.2,20.9-55.4,72.2-56.4,87.2h223.6C366.7,161,359.6,110.4,311.2,89.1z M206.8,138.9c-7.4,0-13.5-6-13.5-13.3 c0-7.3,6-13.3,13.5-13.3c7.4,0,13.5,6,13.5,13.3C220.3,132.9,214.3,138.9,206.8,138.9z M305.2,138.9c-7.4,0-13.5-6-13.5-13.3 c0-7.3,6-13.3,13.5-13.3c7.4,0,13.5,6,13.5,13.3C318.7,132.9,312.6,138.9,305.2,138.9z' })
					)
				)
			);
		}
	}]);

	return SocialAndroid;
}(_react2.default.Component);

exports.default = SocialAndroid;
;