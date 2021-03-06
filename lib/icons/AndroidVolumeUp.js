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

var AndroidVolumeUp = function (_React$Component) {
	_inherits(AndroidVolumeUp, _React$Component);

	function AndroidVolumeUp() {
		_classCallCheck(this, AndroidVolumeUp);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidVolumeUp).apply(this, arguments));
	}

	_createClass(AndroidVolumeUp, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M64,192v128h85.334L256,431.543V80.458L149.334,192H64z M352,256c0-38.399-21.333-72.407-53.333-88.863v176.636 C330.667,328.408,352,294.4,352,256z M298.667,64v44.978C360.531,127.632,405.334,186.882,405.334,256 c0,69.119-44.803,128.369-106.667,147.022V448C384,428.254,448,349.257,448,256C448,162.744,384,83.746,298.667,64z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M64,192v128h85.334L256,431.543V80.458L149.334,192H64z M352,256c0-38.399-21.333-72.407-53.333-88.863v176.636 C330.667,328.408,352,294.4,352,256z M298.667,64v44.978C360.531,127.632,405.334,186.882,405.334,256 c0,69.119-44.803,128.369-106.667,147.022V448C384,428.254,448,349.257,448,256C448,162.744,384,83.746,298.667,64z' })
			);
		}
	}]);

	return AndroidVolumeUp;
}(_react2.default.Component);

exports.default = AndroidVolumeUp;
;AndroidVolumeUp.defaultProps = { bare: false };