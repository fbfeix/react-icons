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

var IosPulse = function (_React$Component) {
	_inherits(IosPulse, _React$Component);

	function IosPulse() {
		_classCallCheck(this, IosPulse);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPulse).apply(this, arguments));
	}

	_createClass(IosPulse, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M448,288c-15.268,0-28.029,10.695-31.223,25h-59.004l-30.181-90.896c-1.105-3.329-4.246-5.543-7.759-5.478 c-3.508,0.072-6.559,2.422-7.524,5.795L258.067,411.74L199.892,62.685c-0.624-3.74-3.787-6.528-7.576-6.679 c-3.809-0.139-7.161,2.382-8.078,6.061L121.748,313H32v16h96c3.674,0,6.875-2.502,7.763-6.066l54.685-219.591l57.661,345.973 c0.615,3.688,3.703,6.459,7.437,6.672c0.153,0.009,0.307,0.013,0.459,0.013c3.549,0,6.699-2.35,7.687-5.797l56.872-198.496 l23.845,71.813c1.087,3.271,4.146,5.479,7.593,5.479h65.292c3.89,13.289,16.161,23,30.708,23c17.674,0,32-14.327,32-32 S465.674,288,448,288z' })
			);
		}
	}]);

	return IosPulse;
}(_react2.default.Component);

exports.default = IosPulse;
;