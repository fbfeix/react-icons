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

var Happy = function (_React$Component) {
	_inherits(Happy, _React$Component);

	function Happy() {
		_classCallCheck(this, Happy);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Happy).apply(this, arguments));
	}

	_createClass(Happy, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,32C132.288,32,32,132.288,32,256s100.288,224,224,224s224-100.288,224-224S379.712,32,256,32z M103.272,253.324 c-8.272-5.574-9.249-15.145-3.747-22.207C110.074,217.573,123.25,208,144.137,208s34.174,9.593,44.655,23.174 c5.464,7.076,3.765,17.011-3.787,22.144c-2.915,1.975-6.341,2.683-9.922,2.683c-5.412,0-10.539-2.119-13.716-6.223 c-3.398-4.416-7.621-9.777-17.23-9.777c-9.561,0-13.818,5.387-17.269,9.821c-3.163,4.069-8.274,6.178-13.669,6.179 C109.618,256,106.186,255.287,103.272,253.324z M394.245,310.945C370.607,356.719,316.344,384,256.004,384 c-61.869,0-117.55-28.235-138.556-73.677c-3.663-7.939-0.191-17.383,7.734-21.057c2.137-0.978,4.363-1.463,6.658-1.463 c6.163,0,11.818,3.61,14.407,9.199C162.164,331.438,206.27,352,256.004,352c48.602,0,91.8-20.269,110.053-55.615 c2.746-5.301,8.148-8.588,14.104-8.588c2.532,0,5.06,0.621,7.308,1.796C395.201,293.598,398.254,303.184,394.245,310.945z M409.006,253.317c-2.915,1.975-6.341,2.683-9.922,2.683c-5.412,0-10.539-2.119-13.717-6.223c-3.398-4.416-7.62-9.777-17.23-9.777 c-9.561,0-13.817,5.387-17.268,9.821c-3.163,4.069-8.275,6.178-13.67,6.179c-3.581,0-7.014-0.713-9.928-2.676 c-8.271-5.574-9.248-15.145-3.746-22.207C334.074,217.573,347.25,208,368.137,208c20.888,0,34.175,9.593,44.656,23.174 C418.257,238.25,416.558,248.185,409.006,253.317z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32C132.288,32,32,132.288,32,256s100.288,224,224,224s224-100.288,224-224S379.712,32,256,32z M103.272,253.324 c-8.272-5.574-9.249-15.145-3.747-22.207C110.074,217.573,123.25,208,144.137,208s34.174,9.593,44.655,23.174 c5.464,7.076,3.765,17.011-3.787,22.144c-2.915,1.975-6.341,2.683-9.922,2.683c-5.412,0-10.539-2.119-13.716-6.223 c-3.398-4.416-7.621-9.777-17.23-9.777c-9.561,0-13.818,5.387-17.269,9.821c-3.163,4.069-8.274,6.178-13.669,6.179 C109.618,256,106.186,255.287,103.272,253.324z M394.245,310.945C370.607,356.719,316.344,384,256.004,384 c-61.869,0-117.55-28.235-138.556-73.677c-3.663-7.939-0.191-17.383,7.734-21.057c2.137-0.978,4.363-1.463,6.658-1.463 c6.163,0,11.818,3.61,14.407,9.199C162.164,331.438,206.27,352,256.004,352c48.602,0,91.8-20.269,110.053-55.615 c2.746-5.301,8.148-8.588,14.104-8.588c2.532,0,5.06,0.621,7.308,1.796C395.201,293.598,398.254,303.184,394.245,310.945z M409.006,253.317c-2.915,1.975-6.341,2.683-9.922,2.683c-5.412,0-10.539-2.119-13.717-6.223c-3.398-4.416-7.62-9.777-17.23-9.777 c-9.561,0-13.817,5.387-17.268,9.821c-3.163,4.069-8.275,6.178-13.67,6.179c-3.581,0-7.014-0.713-9.928-2.676 c-8.271-5.574-9.248-15.145-3.746-22.207C334.074,217.573,347.25,208,368.137,208c20.888,0,34.175,9.593,44.656,23.174 C418.257,238.25,416.558,248.185,409.006,253.317z' })
				)
			);
		}
	}]);

	return Happy;
}(_react2.default.Component);

exports.default = Happy;
;Happy.defaultProps = { bare: false };