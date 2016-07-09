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

var AndroidFilm = function (_React$Component) {
	_inherits(AndroidFilm, _React$Component);

	function AndroidFilm() {
		_classCallCheck(this, AndroidFilm);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidFilm).apply(this, arguments));
	}

	_createClass(AndroidFilm, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { fill: '#010101', d: 'M376,64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64H376z M176,362.667h-40V320h40V362.667z M176,277.334h-40v-42.667h40V277.334z M176,192h-40v-42.666h40V192z M376,362.667h-40V320h40 V362.667z M376,277.334h-40v-42.667h40V277.334z M376,192h-40v-42.666h40V192z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { fill: '#010101', d: 'M376,64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64H376z M176,362.667h-40V320h40V362.667z M176,277.334h-40v-42.667h40V277.334z M176,192h-40v-42.666h40V192z M376,362.667h-40V320h40 V362.667z M376,277.334h-40v-42.667h40V277.334z M376,192h-40v-42.666h40V192z' })
			);
		}
	}]);

	return AndroidFilm;
}(_react2.default.Component);

exports.default = AndroidFilm;
;AndroidFilm.defaultProps = { bare: false };