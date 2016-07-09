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

var MicC = function (_React$Component) {
	_inherits(MicC, _React$Component);

	function MicC() {
		_classCallCheck(this, MicC);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MicC).apply(this, arguments));
	}

	_createClass(MicC, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M329.2,32H182.9C152.5,32,128,55.4,128,84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0,29,24.5,52.2,54.9,52.2H213 v77h86v-77h30.2c30.3,0,54.8-23.2,54.8-52.2V309h-59v-37h59v-43h-59v-37h59v-43h-59v-37h59V84.4C384,55.4,359.5,32,329.2,32z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M329.2,32H182.9C152.5,32,128,55.4,128,84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0,29,24.5,52.2,54.9,52.2H213 v77h86v-77h30.2c30.3,0,54.8-23.2,54.8-52.2V309h-59v-37h59v-43h-59v-37h59v-43h-59v-37h59V84.4C384,55.4,359.5,32,329.2,32z' })
			);
		}
	}]);

	return MicC;
}(_react2.default.Component);

exports.default = MicC;
;MicC.defaultProps = { bare: false };