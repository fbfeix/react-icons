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

var AndroidNotificationsNone = function (_React$Component) {
	_inherits(AndroidNotificationsNone, _React$Component);

	function AndroidNotificationsNone() {
		_classCallCheck(this, AndroidNotificationsNone);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidNotificationsNone).apply(this, arguments));
	}

	_createClass(AndroidNotificationsNone, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M257,120.471c7.083,0,23.911,4.479,23.911,4.479c45.589,10.447,77.678,52.439,77.678,99.85v114.4v13.212l9.321,9.364 l7.788,7.823H136.302l7.788-7.823l9.321-9.364V339.2V224.8c0-47.41,32.089-89.403,77.678-99.85c0,0,18.043-4.479,23.911-4.479 M256,48c-17.602,0-31.059,13.518-31.059,31.2v14.559c-59.015,13.523-103.53,67.601-103.53,131.041v114.4L80,380.8v20.8h352v-20.8 l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2C287.059,61.518,273.602,48,256,48L256,48z M297.411,422.4h-82.823 c0,22.881,18.633,41.6,41.412,41.6S297.411,445.281,297.411,422.4L297.411,422.4z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M257,120.471c7.083,0,23.911,4.479,23.911,4.479c45.589,10.447,77.678,52.439,77.678,99.85v114.4v13.212l9.321,9.364 l7.788,7.823H136.302l7.788-7.823l9.321-9.364V339.2V224.8c0-47.41,32.089-89.403,77.678-99.85c0,0,18.043-4.479,23.911-4.479 M256,48c-17.602,0-31.059,13.518-31.059,31.2v14.559c-59.015,13.523-103.53,67.601-103.53,131.041v114.4L80,380.8v20.8h352v-20.8 l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2C287.059,61.518,273.602,48,256,48L256,48z M297.411,422.4h-82.823 c0,22.881,18.633,41.6,41.412,41.6S297.411,445.281,297.411,422.4L297.411,422.4z' })
			);
		}
	}]);

	return AndroidNotificationsNone;
}(_react2.default.Component);

exports.default = AndroidNotificationsNone;
;AndroidNotificationsNone.defaultProps = { bare: false };