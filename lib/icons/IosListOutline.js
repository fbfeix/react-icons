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

var IosListOutline = function (_React$Component) {
	_inherits(IosListOutline, _React$Component);

	function IosListOutline() {
		_classCallCheck(this, IosListOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosListOutline).apply(this, arguments));
	}

	_createClass(IosListOutline, [{
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
							_react2.default.createElement('path', { d: 'M432,80v352H80V80H432 M448,64H64v384h384V64L448,64z' }),
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('rect', { x: '192', y: '152', width: '192', height: '16' })
							),
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('rect', { x: '192', y: '248', width: '192', height: '16' })
							),
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('rect', { x: '192', y: '344', width: '192', height: '16' })
							)
						),
						_react2.default.createElement('circle', { cx: '144', cy: '160', r: '16' }),
						_react2.default.createElement('circle', { cx: '144', cy: '256', r: '16' }),
						_react2.default.createElement('circle', { cx: '144', cy: '352', r: '16' })
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
						_react2.default.createElement('path', { d: 'M432,80v352H80V80H432 M448,64H64v384h384V64L448,64z' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('rect', { x: '192', y: '152', width: '192', height: '16' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('rect', { x: '192', y: '248', width: '192', height: '16' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('rect', { x: '192', y: '344', width: '192', height: '16' })
						)
					),
					_react2.default.createElement('circle', { cx: '144', cy: '160', r: '16' }),
					_react2.default.createElement('circle', { cx: '144', cy: '256', r: '16' }),
					_react2.default.createElement('circle', { cx: '144', cy: '352', r: '16' })
				)
			);
		}
	}]);

	return IosListOutline;
}(_react2.default.Component);

exports.default = IosListOutline;
;IosListOutline.defaultProps = { bare: false };