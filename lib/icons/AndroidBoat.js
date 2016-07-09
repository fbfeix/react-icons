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

var AndroidBoat = function (_React$Component) {
	_inherits(AndroidBoat, _React$Component);

	function AndroidBoat() {
		_classCallCheck(this, AndroidBoat);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidBoat).apply(this, arguments));
	}

	_createClass(AndroidBoat, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M84.255,413h1.063c34.123,0,63.977-19.021,85.305-42.494c21.325,23.473,51.18,42.762,85.304,42.762 s63.979-19.334,85.305-42.806C362.559,393.934,392.412,413,426.535,413h1.062l51.253-138.78c2.126-5.329,1.063-11.641-1.07-16.976 c-2.136-5.333-7.237-8.487-12.567-10.623L427,234.133v-98.15C427,112.51,407.344,93,383.884,93h-63.979l-15.993-53h-95.969 l-15.995,53h-63.979C104.511,93,85,112.51,85,135.982v98.15l-38.074,12.533c-5.33,2.136-10.582,5.334-12.718,10.667 c-2.135,5.335-3.158,10.49-1.031,16.887L84.255,413z M128,136h256v84.261l-128-41.605l-128,41.605V136z' }),
						_react2.default.createElement('path', { d: 'M341.231,408.007c-52.253,36.267-118.356,36.258-170.608-0.009c0,0-57.638,64.002-106.632,64.002h21.327 c29.854,0,58.646-11.726,85.305-25.594c53.315,27.734,117.293,27.728,170.608-0.007C367.89,460.268,396.681,472,426.535,472h21.328 C400.212,472,341.231,408.007,341.231,408.007z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M84.255,413h1.063c34.123,0,63.977-19.021,85.305-42.494c21.325,23.473,51.18,42.762,85.304,42.762 s63.979-19.334,85.305-42.806C362.559,393.934,392.412,413,426.535,413h1.062l51.253-138.78c2.126-5.329,1.063-11.641-1.07-16.976 c-2.136-5.333-7.237-8.487-12.567-10.623L427,234.133v-98.15C427,112.51,407.344,93,383.884,93h-63.979l-15.993-53h-95.969 l-15.995,53h-63.979C104.511,93,85,112.51,85,135.982v98.15l-38.074,12.533c-5.33,2.136-10.582,5.334-12.718,10.667 c-2.135,5.335-3.158,10.49-1.031,16.887L84.255,413z M128,136h256v84.261l-128-41.605l-128,41.605V136z' }),
					_react2.default.createElement('path', { d: 'M341.231,408.007c-52.253,36.267-118.356,36.258-170.608-0.009c0,0-57.638,64.002-106.632,64.002h21.327 c29.854,0,58.646-11.726,85.305-25.594c53.315,27.734,117.293,27.728,170.608-0.007C367.89,460.268,396.681,472,426.535,472h21.328 C400.212,472,341.231,408.007,341.231,408.007z' })
				)
			);
		}
	}]);

	return AndroidBoat;
}(_react2.default.Component);

exports.default = AndroidBoat;
;AndroidBoat.defaultProps = { bare: false };