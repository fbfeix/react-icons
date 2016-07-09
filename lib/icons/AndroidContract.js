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

var AndroidContract = function (_React$Component) {
	_inherits(AndroidContract, _React$Component);

	function AndroidContract() {
		_classCallCheck(this, AndroidContract);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidContract).apply(this, arguments));
	}

	_createClass(AndroidContract, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_2_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M64,371.2h76.795V448H192V320H64V371.2z M140.795,140.8H64V192h128V64h-51.205V140.8z M320,448h51.2v-76.8H448V320H320 V448z M371.2,140.8V64H320v128h128v-51.2H371.2z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_2_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M64,371.2h76.795V448H192V320H64V371.2z M140.795,140.8H64V192h128V64h-51.205V140.8z M320,448h51.2v-76.8H448V320H320 V448z M371.2,140.8V64H320v128h128v-51.2H371.2z' })
					)
				)
			);
		}
	}]);

	return AndroidContract;
}(_react2.default.Component);

exports.default = AndroidContract;
;AndroidContract.defaultProps = { bare: false };