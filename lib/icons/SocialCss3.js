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

var SocialCss3 = function (_React$Component) {
	_inherits(SocialCss3, _React$Component);

	function SocialCss3() {
		_classCallCheck(this, SocialCss3);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialCss3).apply(this, arguments));
	}

	_createClass(SocialCss3, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ transform: 'translate(336 96)' },
						_react2.default.createElement(
							'g',
							{ id: 'icon-css3' },
							_react2.default.createElement('path', { d: 'M-79.718,243.488L-79.718,243.488z' }),
							_react2.default.createElement('path', { d: 'M-272-64l34.946,403.219L-80.233,384l157.259-44.85L112-64H-272z M18.676,270.898l-98.607,28.125l-98.458-28.248 L-185.136,193h48.253l3.433,39.562l53.586,15.163l0.132,0.273h0.034l53.467-14.852L-20.619,169H-133l-4-50h120.646l4.396-51H-196 l-4-49H40.58L18.676,270.898z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ transform: 'translate(336 96)' },
					_react2.default.createElement(
						'g',
						{ id: 'icon-css3' },
						_react2.default.createElement('path', { d: 'M-79.718,243.488L-79.718,243.488z' }),
						_react2.default.createElement('path', { d: 'M-272-64l34.946,403.219L-80.233,384l157.259-44.85L112-64H-272z M18.676,270.898l-98.607,28.125l-98.458-28.248 L-185.136,193h48.253l3.433,39.562l53.586,15.163l0.132,0.273h0.034l53.467-14.852L-20.619,169H-133l-4-50h120.646l4.396-51H-196 l-4-49H40.58L18.676,270.898z' })
					)
				)
			);
		}
	}]);

	return SocialCss3;
}(_react2.default.Component);

exports.default = SocialCss3;
;SocialCss3.defaultProps = { bare: false };