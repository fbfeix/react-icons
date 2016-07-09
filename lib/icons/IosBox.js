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

var IosBox = function (_React$Component) {
	_inherits(IosBox, _React$Component);

	function IosBox() {
		_classCallCheck(this, IosBox);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBox).apply(this, arguments));
	}

	_createClass(IosBox, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M112,400h288V208H112V400z M224,240h64c8.8,0,16,7.2,16,16s-7.2,16-16,16h-64c-8.8,0-16-7.2-16-16S215.2,240,224,240z' }),
						_react2.default.createElement('polygon', { points: '96,112 96,192 112,192 400,192 416,192 416,112 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M112,400h288V208H112V400z M224,240h64c8.8,0,16,7.2,16,16s-7.2,16-16,16h-64c-8.8,0-16-7.2-16-16S215.2,240,224,240z' }),
					_react2.default.createElement('polygon', { points: '96,112 96,192 112,192 400,192 416,192 416,112 \t' })
				)
			);
		}
	}]);

	return IosBox;
}(_react2.default.Component);

exports.default = IosBox;
;IosBox.defaultProps = { bare: false };