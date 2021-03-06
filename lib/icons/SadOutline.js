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

var SadOutline = function (_React$Component) {
	_inherits(SadOutline, _React$Component);

	function SadOutline() {
		_classCallCheck(this, SadOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SadOutline).apply(this, arguments));
	}

	_createClass(SadOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M399.283,283.797c-5.1-16.379-14.22-29.995-33.802-37.263s-35.265-2.877-49.868,6.15 c-7.615,4.707-10.029,14.019-4.214,22.123c2.049,2.854,5.019,4.717,8.376,5.963c5.059,1.876,10.584,1.678,14.965-1.036 c4.778-2.957,10.644-6.526,19.607-3.199c9.01,3.343,11.103,9.839,12.752,15.161c1.551,4.952,5.62,8.724,10.693,10.606 c3.357,1.246,6.816,1.774,10.236,0.938C396.895,301.056,401.944,292.333,399.283,283.797z' }),
								_react2.default.createElement('path', { d: 'M196.549,252.685c-14.603-9.027-30.286-13.418-49.868-6.15s-28.702,20.884-33.802,37.263 c-2.661,8.536,2.389,17.259,11.255,19.443c3.42,0.837,6.878,0.309,10.236-0.938c5.073-1.883,9.143-5.654,10.693-10.606 c1.649-5.322,3.743-11.818,12.752-15.161c8.964-3.327,14.829,0.242,19.607,3.199c4.381,2.714,9.907,2.912,14.965,1.036 c3.357-1.246,6.327-3.108,8.376-5.963C206.578,266.703,204.164,257.392,196.549,252.685z' })
							),
							_react2.default.createElement('path', { d: 'M256,32C132.288,32,32,132.288,32,256s100.288,224,224,224s224-100.288,224-224S379.712,32,256,32z M391.765,391.765 C355.5,428.028,307.285,448,256,448s-99.5-19.972-135.765-56.235C83.972,355.5,64,307.285,64,256s19.972-99.5,56.235-135.765 C156.5,83.972,204.715,64,256,64s99.5,19.972,135.765,56.235C428.028,156.5,448,204.715,448,256S428.028,355.5,391.765,391.765z' })
						),
						_react2.default.createElement('path', { d: 'M349.119,359.176C348.013,357.59,321,320,256,320c-65.261,0-92.014,37.59-93.121,39.176 c-5.057,7.247-3.283,17.221,3.963,22.278c2.789,1.946,5.982,2.881,9.143,2.881c5.052,0,10.024-2.388,13.135-6.845 C189.296,377.239,208.02,352,256,352c48,0,66.703,25.239,66.879,25.49c3.11,4.457,8.081,6.845,13.134,6.845 c3.161,0,6.354-0.935,9.144-2.881C352.402,376.396,354.177,366.423,349.119,359.176z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M399.283,283.797c-5.1-16.379-14.22-29.995-33.802-37.263s-35.265-2.877-49.868,6.15 c-7.615,4.707-10.029,14.019-4.214,22.123c2.049,2.854,5.019,4.717,8.376,5.963c5.059,1.876,10.584,1.678,14.965-1.036 c4.778-2.957,10.644-6.526,19.607-3.199c9.01,3.343,11.103,9.839,12.752,15.161c1.551,4.952,5.62,8.724,10.693,10.606 c3.357,1.246,6.816,1.774,10.236,0.938C396.895,301.056,401.944,292.333,399.283,283.797z' }),
							_react2.default.createElement('path', { d: 'M196.549,252.685c-14.603-9.027-30.286-13.418-49.868-6.15s-28.702,20.884-33.802,37.263 c-2.661,8.536,2.389,17.259,11.255,19.443c3.42,0.837,6.878,0.309,10.236-0.938c5.073-1.883,9.143-5.654,10.693-10.606 c1.649-5.322,3.743-11.818,12.752-15.161c8.964-3.327,14.829,0.242,19.607,3.199c4.381,2.714,9.907,2.912,14.965,1.036 c3.357-1.246,6.327-3.108,8.376-5.963C206.578,266.703,204.164,257.392,196.549,252.685z' })
						),
						_react2.default.createElement('path', { d: 'M256,32C132.288,32,32,132.288,32,256s100.288,224,224,224s224-100.288,224-224S379.712,32,256,32z M391.765,391.765 C355.5,428.028,307.285,448,256,448s-99.5-19.972-135.765-56.235C83.972,355.5,64,307.285,64,256s19.972-99.5,56.235-135.765 C156.5,83.972,204.715,64,256,64s99.5,19.972,135.765,56.235C428.028,156.5,448,204.715,448,256S428.028,355.5,391.765,391.765z' })
					),
					_react2.default.createElement('path', { d: 'M349.119,359.176C348.013,357.59,321,320,256,320c-65.261,0-92.014,37.59-93.121,39.176 c-5.057,7.247-3.283,17.221,3.963,22.278c2.789,1.946,5.982,2.881,9.143,2.881c5.052,0,10.024-2.388,13.135-6.845 C189.296,377.239,208.02,352,256,352c48,0,66.703,25.239,66.879,25.49c3.11,4.457,8.081,6.845,13.134,6.845 c3.161,0,6.354-0.935,9.144-2.881C352.402,376.396,354.177,366.423,349.119,359.176z' })
				)
			);
		}
	}]);

	return SadOutline;
}(_react2.default.Component);

exports.default = SadOutline;
;SadOutline.defaultProps = { bare: false };