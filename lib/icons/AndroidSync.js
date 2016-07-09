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

var AndroidSync = function (_React$Component) {
	_inherits(AndroidSync, _React$Component);

	function AndroidSync() {
		_classCallCheck(this, AndroidSync);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidSync).apply(this, arguments));
	}

	_createClass(AndroidSync, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,93.09V32l-80,81.454l80,81.456v-61.093c65.996,0,120,54.982,120,122.183c0,20.363-5,39.714-14.004,57.016L391,342.547 c15.996-25.457,25-54.988,25-86.547C416,166.401,343.998,93.09,256,93.09z M256,378.184c-66.001,0-120-54.988-120-122.184 c0-20.363,5-39.709,13.999-57.02L121,169.454C104.999,193.89,96,224.436,96,256c0,89.599,72.002,162.91,160,162.91V480l80-81.453 l-80-81.457V378.184z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,93.09V32l-80,81.454l80,81.456v-61.093c65.996,0,120,54.982,120,122.183c0,20.363-5,39.714-14.004,57.016L391,342.547 c15.996-25.457,25-54.988,25-86.547C416,166.401,343.998,93.09,256,93.09z M256,378.184c-66.001,0-120-54.988-120-122.184 c0-20.363,5-39.709,13.999-57.02L121,169.454C104.999,193.89,96,224.436,96,256c0,89.599,72.002,162.91,160,162.91V480l80-81.453 l-80-81.457V378.184z' })
			);
		}
	}]);

	return AndroidSync;
}(_react2.default.Component);

exports.default = AndroidSync;
;AndroidSync.defaultProps = { bare: false };