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

var CodeDownload = function (_React$Component) {
	_inherits(CodeDownload, _React$Component);

	function CodeDownload() {
		_classCallCheck(this, CodeDownload);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CodeDownload).apply(this, arguments));
	}

	_createClass(CodeDownload, [{
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
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M330.967,284.104c6.48-6.467,6.48-16.951,0-23.422c-6.48-6.467-17.342-6.467-23.823,0L272,295.432V176.58 c0-9.151-6.839-16.56-15.999-16.56c-9.162,0-16.001,7.408-16.001,16.56v118.852l-35.005-34.75 c-6.481-6.467-17.095-6.467-23.573,0c-6.482,6.471-6.539,16.955-0.057,23.422l63.07,63.023c0.02,0.02,0.028,0.037,0.05,0.057 c0.725,0.716,1.513,1.367,2.368,1.945c0.102,0.067,0.2,0.134,0.302,0.2c0.322,0.206,0.651,0.403,0.99,0.587 c0.117,0.064,0.231,0.133,0.35,0.193c0.421,0.218,0.849,0.423,1.292,0.605c0.002,0.001,0.004,0.001,0.006,0.002 c0.405,0.167,0.817,0.308,1.233,0.442c0.112,0.037,0.222,0.085,0.335,0.118c0.151,0.047,0.307,0.074,0.461,0.115 c1.424,0.385,2.872,0.588,4.315,0.588c1.442,0,2.89-0.203,4.312-0.588c0.153-0.041,0.312-0.068,0.464-0.115 c0.113-0.033,0.224-0.081,0.335-0.118c0.416-0.135,0.829-0.275,1.233-0.442c0.002-0.001,0.004-0.001,0.007-0.002 c0.441-0.183,0.87-0.387,1.289-0.604c0.122-0.064,0.24-0.133,0.36-0.198c0.332-0.185,0.658-0.376,0.975-0.579 c0.109-0.069,0.217-0.14,0.323-0.212c0.408-0.274,0.806-0.562,1.184-0.872c0.004-0.002,0.007-0.004,0.011-0.006 c0.406-0.332,0.791-0.684,1.162-1.051c0.024-0.022,0.051-0.043,0.074-0.066L330.967,284.104z' })
							)
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M168,392c-6.143,0-12.285-2.344-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569,0-33.941l112-112 c9.373-9.372,24.568-9.372,33.941,0c9.371,9.372,9.371,24.568,0,33.941L89.941,256l95.029,95.029 c9.371,9.372,9.371,24.568,0,33.941C180.283,389.656,174.143,392,168,392z' }),
							_react2.default.createElement('path', { d: 'M344,392c6.143,0,12.285-2.344,16.971-7.029l112-112c9.373-9.373,9.373-24.569,0-33.941l-112-112 c-9.373-9.372-24.568-9.372-33.941,0c-9.371,9.372-9.371,24.568,0,33.941L422.059,256l-95.029,95.029 c-9.371,9.372-9.371,24.568,0,33.941C331.717,389.656,337.857,392,344,392z' })
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
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M330.967,284.104c6.48-6.467,6.48-16.951,0-23.422c-6.48-6.467-17.342-6.467-23.823,0L272,295.432V176.58 c0-9.151-6.839-16.56-15.999-16.56c-9.162,0-16.001,7.408-16.001,16.56v118.852l-35.005-34.75 c-6.481-6.467-17.095-6.467-23.573,0c-6.482,6.471-6.539,16.955-0.057,23.422l63.07,63.023c0.02,0.02,0.028,0.037,0.05,0.057 c0.725,0.716,1.513,1.367,2.368,1.945c0.102,0.067,0.2,0.134,0.302,0.2c0.322,0.206,0.651,0.403,0.99,0.587 c0.117,0.064,0.231,0.133,0.35,0.193c0.421,0.218,0.849,0.423,1.292,0.605c0.002,0.001,0.004,0.001,0.006,0.002 c0.405,0.167,0.817,0.308,1.233,0.442c0.112,0.037,0.222,0.085,0.335,0.118c0.151,0.047,0.307,0.074,0.461,0.115 c1.424,0.385,2.872,0.588,4.315,0.588c1.442,0,2.89-0.203,4.312-0.588c0.153-0.041,0.312-0.068,0.464-0.115 c0.113-0.033,0.224-0.081,0.335-0.118c0.416-0.135,0.829-0.275,1.233-0.442c0.002-0.001,0.004-0.001,0.007-0.002 c0.441-0.183,0.87-0.387,1.289-0.604c0.122-0.064,0.24-0.133,0.36-0.198c0.332-0.185,0.658-0.376,0.975-0.579 c0.109-0.069,0.217-0.14,0.323-0.212c0.408-0.274,0.806-0.562,1.184-0.872c0.004-0.002,0.007-0.004,0.011-0.006 c0.406-0.332,0.791-0.684,1.162-1.051c0.024-0.022,0.051-0.043,0.074-0.066L330.967,284.104z' })
						)
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M168,392c-6.143,0-12.285-2.344-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569,0-33.941l112-112 c9.373-9.372,24.568-9.372,33.941,0c9.371,9.372,9.371,24.568,0,33.941L89.941,256l95.029,95.029 c9.371,9.372,9.371,24.568,0,33.941C180.283,389.656,174.143,392,168,392z' }),
						_react2.default.createElement('path', { d: 'M344,392c6.143,0,12.285-2.344,16.971-7.029l112-112c9.373-9.373,9.373-24.569,0-33.941l-112-112 c-9.373-9.372-24.568-9.372-33.941,0c-9.371,9.372-9.371,24.568,0,33.941L422.059,256l-95.029,95.029 c-9.371,9.372-9.371,24.568,0,33.941C331.717,389.656,337.857,392,344,392z' })
					)
				)
			);
		}
	}]);

	return CodeDownload;
}(_react2.default.Component);

exports.default = CodeDownload;
;CodeDownload.defaultProps = { bare: false };