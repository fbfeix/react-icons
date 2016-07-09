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

var AndroidApps = function (_React$Component) {
	_inherits(AndroidApps, _React$Component);

	function AndroidApps() {
		_classCallCheck(this, AndroidApps);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidApps).apply(this, arguments));
	}

	_createClass(AndroidApps, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M96,176h80V96H96V176z M216,416h80v-80h-80V416z M96,416h80v-80H96V416z M96,296h80v-80H96V296z M216,296h80v-80h-80V296z M336,96v80h80V96H336z M216,176h80V96h-80V176z M336,296h80v-80h-80V296z M336,416h80v-80h-80V416z' })
					)
				)
			);
		}
	}]);

	return AndroidApps;
}(_react2.default.Component);

exports.default = AndroidApps;
;