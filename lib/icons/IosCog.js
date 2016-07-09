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

var IosCog = function (_React$Component) {
	_inherits(IosCog, _React$Component);

	function IosCog() {
		_classCallCheck(this, IosCog);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCog).apply(this, arguments));
	}

	_createClass(IosCog, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M293.25,150.32L265.2,254.9l74.954,75C358.159,309.457,368,283.486,368,256c0-29.916-11.65-58.042-32.805-79.196 C323.154,164.763,308.854,155.807,293.25,150.32z' }),
						_react2.default.createElement('path', { d: 'M278.068,146.161C270.88,144.732,263.496,144,256,144c-29.916,0-58.042,11.65-79.196,32.805 C155.65,197.958,144,226.084,144,256c0,7.468,0.727,14.824,2.145,21.988L250.3,250.1L278.068,146.161z' }),
						_react2.default.createElement('path', { d: 'M150.473,293.697c5.5,15.43,14.404,29.572,26.331,41.498C197.958,356.35,226.083,368,256,368 c27.009,0,52.558-9.499,72.835-26.911L253.9,266.2L150.473,293.697z' }),
						_react2.default.createElement('path', { d: 'M448,272.754v-32.008l-33.291-8.703l-2.601-13.204l27.594-20.905l-12.197-29.608l-34.392,4.802l-7.498-10.603 l17.695-29.708l-22.594-22.605l-30.191,17.404l-10.697-7.302l5.298-35.009l-29.492-12.303L294.04,101.31l-12.297-2.601L273.045,64 h-31.991l-9.197,34.909l-12.098,2.4l-21.494-29.008l-29.592,12.304l4.799,35.709l-11.697,7.202l-31.292-18.705l-22.594,22.606 l18.795,31.508l-6.698,10.502l-35.49-5.001l-12.197,29.608l28.893,21.706l-2.399,12.203L64,240.846v32.007l34.69,8.903l2.4,12.503 l-28.394,21.307l12.297,29.508l34.991-5.002l7.099,11.303l-17.896,30.607l22.595,22.605l30.192-18.204l11.196,7.302l-4.498,34.311 l29.592,12.202l20.595-27.808l13.396,2.5L241.054,448h31.991l8.298-33.109l13.597-2.601l20.694,27.106l29.593-12.203l-4.998-33.709 l10.196-7.4l28.992,16.904l22.595-22.606l-16.795-28.907l7.896-11.402l33.791,4.802l12.298-29.508l-27.193-20.507l2.7-13.502 L448,272.754z M256,384c-70.692,0-128-57.307-128-128c0-70.692,57.308-128,128-128c70.692,0,128,57.308,128,128 C384,326.693,326.692,384,256,384z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M293.25,150.32L265.2,254.9l74.954,75C358.159,309.457,368,283.486,368,256c0-29.916-11.65-58.042-32.805-79.196 C323.154,164.763,308.854,155.807,293.25,150.32z' }),
					_react2.default.createElement('path', { d: 'M278.068,146.161C270.88,144.732,263.496,144,256,144c-29.916,0-58.042,11.65-79.196,32.805 C155.65,197.958,144,226.084,144,256c0,7.468,0.727,14.824,2.145,21.988L250.3,250.1L278.068,146.161z' }),
					_react2.default.createElement('path', { d: 'M150.473,293.697c5.5,15.43,14.404,29.572,26.331,41.498C197.958,356.35,226.083,368,256,368 c27.009,0,52.558-9.499,72.835-26.911L253.9,266.2L150.473,293.697z' }),
					_react2.default.createElement('path', { d: 'M448,272.754v-32.008l-33.291-8.703l-2.601-13.204l27.594-20.905l-12.197-29.608l-34.392,4.802l-7.498-10.603 l17.695-29.708l-22.594-22.605l-30.191,17.404l-10.697-7.302l5.298-35.009l-29.492-12.303L294.04,101.31l-12.297-2.601L273.045,64 h-31.991l-9.197,34.909l-12.098,2.4l-21.494-29.008l-29.592,12.304l4.799,35.709l-11.697,7.202l-31.292-18.705l-22.594,22.606 l18.795,31.508l-6.698,10.502l-35.49-5.001l-12.197,29.608l28.893,21.706l-2.399,12.203L64,240.846v32.007l34.69,8.903l2.4,12.503 l-28.394,21.307l12.297,29.508l34.991-5.002l7.099,11.303l-17.896,30.607l22.595,22.605l30.192-18.204l11.196,7.302l-4.498,34.311 l29.592,12.202l20.595-27.808l13.396,2.5L241.054,448h31.991l8.298-33.109l13.597-2.601l20.694,27.106l29.593-12.203l-4.998-33.709 l10.196-7.4l28.992,16.904l22.595-22.606l-16.795-28.907l7.896-11.402l33.791,4.802l12.298-29.508l-27.193-20.507l2.7-13.502 L448,272.754z M256,384c-70.692,0-128-57.307-128-128c0-70.692,57.308-128,128-128c70.692,0,128,57.308,128,128 C384,326.693,326.692,384,256,384z' })
				)
			);
		}
	}]);

	return IosCog;
}(_react2.default.Component);

exports.default = IosCog;
;IosCog.defaultProps = { bare: false };