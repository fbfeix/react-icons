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

var SoupCanOutline = function (_React$Component) {
	_inherits(SoupCanOutline, _React$Component);

	function SoupCanOutline() {
		_classCallCheck(this, SoupCanOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SoupCanOutline).apply(this, arguments));
	}

	_createClass(SoupCanOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M255.82,144c88.269,0,159.824-28.654,159.824-64S344.089,16,255.82,16C167.552,16,95.997,44.654,95.997,80 S167.552,144,255.82,144z M255.82,33.041c69.729,0,126.26,19.234,126.26,42.959s-56.531,42.959-126.26,42.959 c-69.729,0-126.258-19.234-126.258-42.959S186.091,33.041,255.82,33.041z' }),
						_react2.default.createElement('path', { d: 'M256.57,160c-88.269,0-160.567-28.654-160.567-64c0,0-0.003,33.999,7.997,40v240c0,35.346,63.732,64,152,64 c88.269,0,152-28.654,152-64V136c8-7.438,7.708-34.853,7.817-40C414.665,130.946,344.116,160,256.57,160z M376,375.588 c0,2.232-7.961,10.682-29.423,18.688C322.853,403.126,290.812,408,256.273,408c-34.539,0-66.83-4.874-90.554-13.725 C144.257,386.27,137,377.82,136,375.588v-79.564c18,9.721,42.742,17.115,72.156,20.979l1.588,0.237 C215.487,337.308,233.936,352,255.826,352c21.89,0,40.338-14.689,46.084-34.754l1.755-0.244 C333.08,313.139,358,305.744,376,296.023V375.588z M376,264.023c-18,9.831-43.476,17.284-73.325,21.11l-2.61,0.195 C292.791,268.097,275.723,256,255.859,256c-19.867,0-36.919,12.102-44.19,29.34l-2.514-0.206 c-29.85-3.826-55.155-11.279-73.155-21.11v-91.265C170,185.25,211.923,192,256.499,192C300.665,192,343,185.287,376,173.045 V264.023z' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M274.002,463.58' }),
							_react2.default.createElement('path', { d: 'M256.272,464c0.293,0,0.583-0.006,0.876-0.007c-0.351,0.001-0.699,0.005-1.051,0.005 C256.156,463.998,256.214,464,256.272,464z' }),
							_react2.default.createElement('path', { d: 'M408,415.999V400c0,36.001-63.432,64-152,64c-88.569,0-152-28.654-152-64v15.999L96.261,432 c0,6.994,2.938,13.725,8.117,20.025C125.37,477.562,185.471,496,256.273,496c70.801,0,130.87-18.438,151.863-43.975 c5.18-6.301,7.923-13.031,7.923-20.025L408,415.999z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M255.82,144c88.269,0,159.824-28.654,159.824-64S344.089,16,255.82,16C167.552,16,95.997,44.654,95.997,80 S167.552,144,255.82,144z M255.82,33.041c69.729,0,126.26,19.234,126.26,42.959s-56.531,42.959-126.26,42.959 c-69.729,0-126.258-19.234-126.258-42.959S186.091,33.041,255.82,33.041z' }),
					_react2.default.createElement('path', { d: 'M256.57,160c-88.269,0-160.567-28.654-160.567-64c0,0-0.003,33.999,7.997,40v240c0,35.346,63.732,64,152,64 c88.269,0,152-28.654,152-64V136c8-7.438,7.708-34.853,7.817-40C414.665,130.946,344.116,160,256.57,160z M376,375.588 c0,2.232-7.961,10.682-29.423,18.688C322.853,403.126,290.812,408,256.273,408c-34.539,0-66.83-4.874-90.554-13.725 C144.257,386.27,137,377.82,136,375.588v-79.564c18,9.721,42.742,17.115,72.156,20.979l1.588,0.237 C215.487,337.308,233.936,352,255.826,352c21.89,0,40.338-14.689,46.084-34.754l1.755-0.244 C333.08,313.139,358,305.744,376,296.023V375.588z M376,264.023c-18,9.831-43.476,17.284-73.325,21.11l-2.61,0.195 C292.791,268.097,275.723,256,255.859,256c-19.867,0-36.919,12.102-44.19,29.34l-2.514-0.206 c-29.85-3.826-55.155-11.279-73.155-21.11v-91.265C170,185.25,211.923,192,256.499,192C300.665,192,343,185.287,376,173.045 V264.023z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M274.002,463.58' }),
						_react2.default.createElement('path', { d: 'M256.272,464c0.293,0,0.583-0.006,0.876-0.007c-0.351,0.001-0.699,0.005-1.051,0.005 C256.156,463.998,256.214,464,256.272,464z' }),
						_react2.default.createElement('path', { d: 'M408,415.999V400c0,36.001-63.432,64-152,64c-88.569,0-152-28.654-152-64v15.999L96.261,432 c0,6.994,2.938,13.725,8.117,20.025C125.37,477.562,185.471,496,256.273,496c70.801,0,130.87-18.438,151.863-43.975 c5.18-6.301,7.923-13.031,7.923-20.025L408,415.999z' })
					)
				)
			);
		}
	}]);

	return SoupCanOutline;
}(_react2.default.Component);

exports.default = SoupCanOutline;
;SoupCanOutline.defaultProps = { bare: false };