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

var AndroidSubway = function (_React$Component) {
	_inherits(AndroidSubway, _React$Component);

	function AndroidSubway() {
		_classCallCheck(this, AndroidSubway);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidSubway).apply(this, arguments));
	}

	_createClass(AndroidSubway, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,48c-93.864,0-176,10.668-176,85.334v213.332c0,41.604,33.062,74.666,74.667,74.666L128,448v16h256v-16l-26.667-26.668 c41.604,0,74.667-33.062,74.667-74.666V133.334C432,58.668,349.864,48,256,48z M160,384c-18.136,0-32-13.865-32-32 c0-18.137,13.864-32,32-32s32,13.863,32,32C192,370.135,178.136,384,160,384z M240,240H128v-96h112V240z M352,384 c-18.136,0-32-13.865-32-32c0-18.137,13.864-32,32-32s32,13.863,32,32C384,370.135,370.136,384,352,384z M384,240H272v-96h112V240z ' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48c-93.864,0-176,10.668-176,85.334v213.332c0,41.604,33.062,74.666,74.667,74.666L128,448v16h256v-16l-26.667-26.668 c41.604,0,74.667-33.062,74.667-74.666V133.334C432,58.668,349.864,48,256,48z M160,384c-18.136,0-32-13.865-32-32 c0-18.137,13.864-32,32-32s32,13.863,32,32C192,370.135,178.136,384,160,384z M240,240H128v-96h112V240z M352,384 c-18.136,0-32-13.865-32-32c0-18.137,13.864-32,32-32s32,13.863,32,32C384,370.135,370.136,384,352,384z M384,240H272v-96h112V240z ' })
				)
			);
		}
	}]);

	return AndroidSubway;
}(_react2.default.Component);

exports.default = AndroidSubway;
;AndroidSubway.defaultProps = { bare: false };