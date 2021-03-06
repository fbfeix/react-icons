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

var IosRecording = function (_React$Component) {
	_inherits(IosRecording, _React$Component);

	function IosRecording() {
		_classCallCheck(this, IosRecording);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosRecording).apply(this, arguments));
	}

	_createClass(IosRecording, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M386.2,144c-60.6,0-109.8,49.9-109.8,111.8c0,40.4,21,76.2,52.5,95.2H183.1c31.5-19,52.5-54.8,52.5-95.2 c0-61.9-49.2-111.9-109.8-111.9C65.2,143.9,16,194.1,16,255.9C16,317.8,65.2,368,125.8,368h260.4c60.6,0,109.8-50.1,109.8-112 C496,194.1,446.8,144,386.2,144z M128,320c-35.3,0-64-28.7-64-64c0-35.3,28.7-64,64-64s64,28.7,64,64C192,291.3,163.3,320,128,320z M384,320c-35.3,0-64-28.7-64-64c0-35.3,28.7-64,64-64s64,28.7,64,64C448,291.3,419.3,320,384,320z' }),
						_react2.default.createElement('path', { d: 'M384,208c-26.5,0-48,21.5-48,48c0,26.5,21.5,48,48,48s48-21.5,48-48C432,229.5,410.5,208,384,208z' }),
						_react2.default.createElement('path', { d: 'M128,208c-26.5,0-48,21.5-48,48c0,26.5,21.5,48,48,48s48-21.5,48-48C176,229.5,154.5,208,128,208z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M386.2,144c-60.6,0-109.8,49.9-109.8,111.8c0,40.4,21,76.2,52.5,95.2H183.1c31.5-19,52.5-54.8,52.5-95.2 c0-61.9-49.2-111.9-109.8-111.9C65.2,143.9,16,194.1,16,255.9C16,317.8,65.2,368,125.8,368h260.4c60.6,0,109.8-50.1,109.8-112 C496,194.1,446.8,144,386.2,144z M128,320c-35.3,0-64-28.7-64-64c0-35.3,28.7-64,64-64s64,28.7,64,64C192,291.3,163.3,320,128,320z M384,320c-35.3,0-64-28.7-64-64c0-35.3,28.7-64,64-64s64,28.7,64,64C448,291.3,419.3,320,384,320z' }),
					_react2.default.createElement('path', { d: 'M384,208c-26.5,0-48,21.5-48,48c0,26.5,21.5,48,48,48s48-21.5,48-48C432,229.5,410.5,208,384,208z' }),
					_react2.default.createElement('path', { d: 'M128,208c-26.5,0-48,21.5-48,48c0,26.5,21.5,48,48,48s48-21.5,48-48C176,229.5,154.5,208,128,208z' })
				)
			);
		}
	}]);

	return IosRecording;
}(_react2.default.Component);

exports.default = IosRecording;
;IosRecording.defaultProps = { bare: false };