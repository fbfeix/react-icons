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

var AndroidStopwatch = function (_React$Component) {
	_inherits(AndroidStopwatch, _React$Component);

	function AndroidStopwatch() {
		_classCallCheck(this, AndroidStopwatch);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidStopwatch).apply(this, arguments));
	}

	_createClass(AndroidStopwatch, [{
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
							{ id: 'Icon_7_' },
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M232,306.667h48V176h-48V306.667z' })
							)
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M407.67,170.271l30.786-30.786l-33.942-33.941l-30.785,30.786C341.217,111.057,300.369,96,256,96 C149.961,96,64,181.961,64,288s85.961,192,192,192s192-85.961,192-192C448,243.631,432.943,202.783,407.67,170.271z M362.066,394.066C333.734,422.398,296.066,438,256,438s-77.735-15.602-106.066-43.934C121.602,365.735,106,328.066,106,288 s15.602-77.735,43.934-106.066C178.265,153.602,215.934,138,256,138s77.734,15.602,106.066,43.934 C390.398,210.265,406,247.934,406,288S390.398,365.735,362.066,394.066z' }),
							_react2.default.createElement('rect', { x: '192', y: '32', width: '128', height: '48' })
						)
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
						{ id: 'Icon_7_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M232,306.667h48V176h-48V306.667z' })
						)
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M407.67,170.271l30.786-30.786l-33.942-33.941l-30.785,30.786C341.217,111.057,300.369,96,256,96 C149.961,96,64,181.961,64,288s85.961,192,192,192s192-85.961,192-192C448,243.631,432.943,202.783,407.67,170.271z M362.066,394.066C333.734,422.398,296.066,438,256,438s-77.735-15.602-106.066-43.934C121.602,365.735,106,328.066,106,288 s15.602-77.735,43.934-106.066C178.265,153.602,215.934,138,256,138s77.734,15.602,106.066,43.934 C390.398,210.265,406,247.934,406,288S390.398,365.735,362.066,394.066z' }),
						_react2.default.createElement('rect', { x: '192', y: '32', width: '128', height: '48' })
					)
				)
			);
		}
	}]);

	return AndroidStopwatch;
}(_react2.default.Component);

exports.default = AndroidStopwatch;
;AndroidStopwatch.defaultProps = { bare: false };