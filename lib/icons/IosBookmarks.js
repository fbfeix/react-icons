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

var IosBookmarks = function (_React$Component) {
	_inherits(IosBookmarks, _React$Component);

	function IosBookmarks() {
		_classCallCheck(this, IosBookmarks);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBookmarks).apply(this, arguments));
	}

	_createClass(IosBookmarks, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M342.9,165.4l9.1-6.4l9.1,6.4l22.9,14.5V64c-20.7,0-44.5,0-64,0v115.9L342.9,165.4z' }),
						_react2.default.createElement('path', { d: 'M432,64c0,0-13.3,0-32,0v146.5l-48-32l-48,32V64c-12.1,0-20.6,0-22.4,0c-8.1,0-17.6,7.2-17.6,15s0,329,0,329l-8,5.5l-8-5.5 c0,0,0-322,0-329s-9.2-15-17.6-15S80,64,80,64c-18.8,0-33,13.3-33,32v286.1c0,18.8,14.2,33.9,33,33.9c0,0,129.5,0,143.3,0 c13.8,0,24.7,4.2,24.7,19.4c0,9.1,0,12.6,0,12.6h8h8c0,0,0-3.4,0-12.6c0-15.3,10.9-19.4,24.7-19.4s143.3,0,143.3,0 c18.8,0,33-15.1,33-33.9V96C465,77.3,450.8,64,432,64z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M342.9,165.4l9.1-6.4l9.1,6.4l22.9,14.5V64c-20.7,0-44.5,0-64,0v115.9L342.9,165.4z' }),
					_react2.default.createElement('path', { d: 'M432,64c0,0-13.3,0-32,0v146.5l-48-32l-48,32V64c-12.1,0-20.6,0-22.4,0c-8.1,0-17.6,7.2-17.6,15s0,329,0,329l-8,5.5l-8-5.5 c0,0,0-322,0-329s-9.2-15-17.6-15S80,64,80,64c-18.8,0-33,13.3-33,32v286.1c0,18.8,14.2,33.9,33,33.9c0,0,129.5,0,143.3,0 c13.8,0,24.7,4.2,24.7,19.4c0,9.1,0,12.6,0,12.6h8h8c0,0,0-3.4,0-12.6c0-15.3,10.9-19.4,24.7-19.4s143.3,0,143.3,0 c18.8,0,33-15.1,33-33.9V96C465,77.3,450.8,64,432,64z' })
				)
			);
		}
	}]);

	return IosBookmarks;
}(_react2.default.Component);

exports.default = IosBookmarks;
;IosBookmarks.defaultProps = { bare: false };