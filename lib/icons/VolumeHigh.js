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

var VolumeHigh = function (_React$Component) {
	_inherits(VolumeHigh, _React$Component);

	function VolumeHigh() {
		_classCallCheck(this, VolumeHigh);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeHigh).apply(this, arguments));
	}

	_createClass(VolumeHigh, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '231,407.8 231,104.3 136.1,192 32,192 32,320 136.1,320 \t' }),
					_react2.default.createElement('path', { d: 'M287.1,355.7c20.5-27.9,32.8-62.3,32.8-99.7c0-37.4-12.3-71.8-32.8-99.7l-20.4,15.3c17.4,23.6,27.8,52.7,27.8,84.4 c0,31.6-10.4,60.8-27.8,84.3L287.1,355.7z' }),
					_react2.default.createElement('path', { d: 'M353.7,401.7c30-40.7,48-91.1,48-145.7s-18-104.9-48-145.7l-20.4,15.3c26.9,36.4,43,81.5,43,130.4 c0,48.9-16.1,93.9-43,130.3L353.7,401.7z' }),
					_react2.default.createElement('path', { d: 'M396.7,79.4c36.4,49.3,57.9,110.5,57.9,176.6c0,66.1-21.5,127.2-57.9,176.6l20.5,15.4c39.4-53.6,62.8-120,62.8-192 c0-72-23.4-138.4-62.8-192L396.7,79.4z' })
				)
			);
		}
	}]);

	return VolumeHigh;
}(_react2.default.Component);

exports.default = VolumeHigh;
;