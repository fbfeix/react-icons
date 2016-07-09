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

var SocialInstagram = function (_React$Component) {
	_inherits(SocialInstagram, _React$Component);

	function SocialInstagram() {
		_classCallCheck(this, SocialInstagram);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialInstagram).apply(this, arguments));
	}

	_createClass(SocialInstagram, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { cx: '256', cy: '255.833', r: '80' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M177.805,176.887c21.154-21.154,49.279-32.929,79.195-32.929s58.041,11.837,79.195,32.991 c13.422,13.422,23.011,29.551,28.232,47.551H448.5v-113c0-26.51-20.49-47-47-47h-288c-26.51,0-49,20.49-49,47v113h85.072 C154.794,206.5,164.383,190.309,177.805,176.887z M416.5,147.7c0,7.069-5.73,12.8-12.8,12.8h-38.4c-7.069,0-12.8-5.73-12.8-12.8 v-38.4c0-7.069,5.73-12.8,12.8-12.8h38.4c7.069,0,12.8,5.73,12.8,12.8V147.7z' }),
						_react2.default.createElement('path', { d: 'M336.195,335.279c-21.154,21.154-49.279,32.679-79.195,32.679s-58.041-11.462-79.195-32.616 c-21.115-21.115-32.759-49.842-32.803-78.842H64.5v143c0,26.51,22.49,49,49,49h288c26.51,0,47-22.49,47-49v-143h-79.502 C368.955,285.5,357.311,314.164,336.195,335.279z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('circle', { cx: '256', cy: '255.833', r: '80' })
				),
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M177.805,176.887c21.154-21.154,49.279-32.929,79.195-32.929s58.041,11.837,79.195,32.991 c13.422,13.422,23.011,29.551,28.232,47.551H448.5v-113c0-26.51-20.49-47-47-47h-288c-26.51,0-49,20.49-49,47v113h85.072 C154.794,206.5,164.383,190.309,177.805,176.887z M416.5,147.7c0,7.069-5.73,12.8-12.8,12.8h-38.4c-7.069,0-12.8-5.73-12.8-12.8 v-38.4c0-7.069,5.73-12.8,12.8-12.8h38.4c7.069,0,12.8,5.73,12.8,12.8V147.7z' }),
					_react2.default.createElement('path', { d: 'M336.195,335.279c-21.154,21.154-49.279,32.679-79.195,32.679s-58.041-11.462-79.195-32.616 c-21.115-21.115-32.759-49.842-32.803-78.842H64.5v143c0,26.51,22.49,49,49,49h288c26.51,0,47-22.49,47-49v-143h-79.502 C368.955,285.5,357.311,314.164,336.195,335.279z' })
				)
			);
		}
	}]);

	return SocialInstagram;
}(_react2.default.Component);

exports.default = SocialInstagram;
;SocialInstagram.defaultProps = { bare: false };