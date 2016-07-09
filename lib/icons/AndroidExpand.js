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

var AndroidExpand = function (_React$Component) {
	_inherits(AndroidExpand, _React$Component);

	function AndroidExpand() {
		_classCallCheck(this, AndroidExpand);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidExpand).apply(this, arguments));
	}

	_createClass(AndroidExpand, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '396.795,396.8 320,396.8 320,448 448,448 448,320 396.795,320 \t' }),
						_react2.default.createElement('polygon', { points: '396.8,115.205 396.8,192 448,192 448,64 320,64 320,115.205 \t' }),
						_react2.default.createElement('polygon', { points: '115.205,115.2 192,115.2 192,64 64,64 64,192 115.205,192 \t' }),
						_react2.default.createElement('polygon', { points: '115.2,396.795 115.2,320 64,320 64,448 192,448 192,396.795 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '396.795,396.8 320,396.8 320,448 448,448 448,320 396.795,320 \t' }),
					_react2.default.createElement('polygon', { points: '396.8,115.205 396.8,192 448,192 448,64 320,64 320,115.205 \t' }),
					_react2.default.createElement('polygon', { points: '115.205,115.2 192,115.2 192,64 64,64 64,192 115.205,192 \t' }),
					_react2.default.createElement('polygon', { points: '115.2,396.795 115.2,320 64,320 64,448 192,448 192,396.795 \t' })
				)
			);
		}
	}]);

	return AndroidExpand;
}(_react2.default.Component);

exports.default = AndroidExpand;
;AndroidExpand.defaultProps = { bare: false };