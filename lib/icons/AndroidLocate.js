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

var AndroidLocate = function (_React$Component) {
	_inherits(AndroidLocate, _React$Component);

	function AndroidLocate() {
		_classCallCheck(this, AndroidLocate);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidLocate).apply(this, arguments));
	}

	_createClass(AndroidLocate, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,176c-44.004,0-80.001,36-80.001,80c0,44.004,35.997,80,80.001,80c44.005,0,79.999-35.996,79.999-80 C335.999,212,300.005,176,256,176z M446.938,234.667c-9.605-88.531-81.074-160-169.605-169.599V32h-42.666v33.067 c-88.531,9.599-160,81.068-169.604,169.599H32v42.667h33.062c9.604,88.531,81.072,160,169.604,169.604V480h42.666v-33.062 c88.531-9.604,160-81.073,169.605-169.604H480v-42.667H446.938z M256,405.333c-82.137,0-149.334-67.198-149.334-149.333 c0-82.136,67.197-149.333,149.334-149.333c82.135,0,149.332,67.198,149.332,149.333C405.332,338.135,338.135,405.333,256,405.333z ' })
					)
				)
			);
		}
	}]);

	return AndroidLocate;
}(_react2.default.Component);

exports.default = AndroidLocate;
;