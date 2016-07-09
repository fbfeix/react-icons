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

var MicB = function (_React$Component) {
	_inherits(MicB, _React$Component);

	function MicB() {
		_classCallCheck(this, MicB);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MicB).apply(this, arguments));
	}

	_createClass(MicB, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256.4,32c-35.1,0.1-65.8,23.2-76.8,59.3c-5.6,18.5-3.5,44.8-1.2,54.5c2.3,9.7,7.3,19.9,13.2,28.3 c2.8,4.2,6.7,7.4,11.2,9.2c0.6,0.3,1.3,0.5,2,0.8c3.3,1.1,6.5,2.2,10.1,3.1c11.8,3,27.1,4.7,41.1,4.8v0c0,0,0.6,0,0.7,0 c0.3,0,0.3,0,1.3,0v-0.1c14-0.1,27.3-1.7,39.1-4.8c3.6-0.9,6.9-2,10.2-3.1c0.7-0.2,1.3-0.5,1.9-0.8c4.5-1.8,8.4-5,11.2-9.2 c5.9-8.4,10.8-18.6,13.2-28.3c2.3-9.7,4.4-36-1.2-54.5C321.4,55.2,291.6,32.1,256.4,32z' }),
					_react2.default.createElement('path', { d: 'M295.3,201.1c-0.4,0-0.7,0-1.1,0.1c-0.6,0.1-1.3,0.3-1.9,0.4c-2,0.4-4.1,0.8-6.1,1.2c-9.2,1.5-18.9,2.3-29,2.4 c-10.1-0.1-22.3-0.9-31-2.4c-2.1-0.4-4.2-0.8-6.2-1.2c-0.6-0.1-1.3-0.3-1.9-0.4c-0.4-0.1-0.8-0.1-1.1-0.1c-6.1,0-11,5.3-11.2,11.9 c0.1,0.8,0.2,1.6,0.2,2.4c4.8,67.2,16.8,240.7,18.2,252c0,0,2.8,12.7,32.1,12.6c0,0,0,0,0,0c29.2,0.1,32.1-12.6,32.1-12.6 c1.4-11.3,13.4-184.8,18.2-252c0-0.8,0.1-1.6,0.2-2.4C306.3,206.4,301.4,201.1,295.3,201.1z M266,281.7c0,6-4.5,10.9-10,10.9 c-5.5,0-10-4.9-10-10.9V249c0-6,4.5-10.9,10-10.9c5.5,0,10,4.9,10,10.9V281.7z' })
				)
			);
		}
	}]);

	return MicB;
}(_react2.default.Component);

exports.default = MicB;
;