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

var Beaker = function (_React$Component) {
	_inherits(Beaker, _React$Component);

	function Beaker() {
		_classCallCheck(this, Beaker);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Beaker).apply(this, arguments));
	}

	_createClass(Beaker, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M143.5,192.5V416c0,8.836,7.851,16.5,16.688,16.5h208c8.836,0,15.312-7.664,15.312-16.5V192.5H143.5z M359.5,344 c0,4.418-3.582,8-8,8s-8-3.582-8-8v-48c0-4.418,3.582-8,8-8s8,3.582,8,8V344z M352.188,272c-4.418,0-8-3.581-8-8s3.582-8,8-8 s8,3.581,8,8S356.605,272,352.188,272z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M445.078,32.5H128.438c-54.345,0-64.594,27.426-64.594,39.75C94.094,76.5,95.5,77,95.5,109c0,16,0,307,0,307 c0,35.346,29.341,64.5,64.688,64.5h207.75c35.346,0,63.562-29.154,63.562-64.5c0,0,0-316.75,0-335.5 c0-20.349,12.298-38.276,13.516-40.183c1.219-1.906,3-3.798,3-4.958C448.016,34.188,447.6,32.5,445.078,32.5z M399.5,80.5V416 c0,17.92-12.443,32.5-29.812,32.5h-209.5c-17.617,0-32.688-14.883-32.688-32.5V109c0-11.812,1.094-37.25-3.828-43.957 c0.921-0.793,3.114-0.543,4.516-0.543h272.66C400.112,64.5,399.5,75.299,399.5,80.5z' })
					)
				)
			);
		}
	}]);

	return Beaker;
}(_react2.default.Component);

exports.default = Beaker;
;