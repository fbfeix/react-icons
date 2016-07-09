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

var AndroidTrain = function (_React$Component) {
	_inherits(AndroidTrain, _React$Component);

	function AndroidTrain() {
		_classCallCheck(this, AndroidTrain);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidTrain).apply(this, arguments));
	}

	_createClass(AndroidTrain, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_35_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M80,346.666c0,41.604,33.062,74.666,74.667,74.666L128,448v16h256v-16l-26.667-26.668 c41.604,0,74.667-33.062,74.667-74.666V133.334C432,58.668,349.864,48,256,48S80,58.668,80,133.334V346.666z M256,376 c-22.002,0-40-17.997-40-39.999S233.998,296,256,296s40,17.999,40,40.001S278.002,376,256,376z M384,224H128v-96h256V224z' })
						)
					)
				)
			);
		}
	}]);

	return AndroidTrain;
}(_react2.default.Component);

exports.default = AndroidTrain;
;