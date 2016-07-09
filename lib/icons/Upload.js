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

var Upload = function (_React$Component) {
	_inherits(Upload, _React$Component);

	function Upload() {
		_classCallCheck(this, Upload);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Upload).apply(this, arguments));
	}

	_createClass(Upload, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M398.1,233.2c0-1.2,0.2-2.4,0.2-3.6c0-65-51.8-117.6-115.7-117.6c-46.1,0-85.7,27.4-104.3,67c-8.1-4.1-17.2-6.5-26.8-6.5 c-29.5,0-54.1,21.9-58.8,50.5C57.3,235.2,32,269.1,32,309c0,50.2,40.1,91,89.5,91H224v-80l-48.2,0l80.2-83.7l80.2,83.6l-48.2,0v80 h110.3c45.2,0,81.7-37.5,81.7-83.4C480,270.6,443.3,233.3,398.1,233.2z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M398.1,233.2c0-1.2,0.2-2.4,0.2-3.6c0-65-51.8-117.6-115.7-117.6c-46.1,0-85.7,27.4-104.3,67c-8.1-4.1-17.2-6.5-26.8-6.5 c-29.5,0-54.1,21.9-58.8,50.5C57.3,235.2,32,269.1,32,309c0,50.2,40.1,91,89.5,91H224v-80l-48.2,0l80.2-83.7l80.2,83.6l-48.2,0v80 h110.3c45.2,0,81.7-37.5,81.7-83.4C480,270.6,443.3,233.3,398.1,233.2z' })
			);
		}
	}]);

	return Upload;
}(_react2.default.Component);

exports.default = Upload;
;Upload.defaultProps = { bare: false };