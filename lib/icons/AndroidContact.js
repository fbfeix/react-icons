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

var AndroidContact = function (_React$Component) {
	_inherits(AndroidContact, _React$Component);

	function AndroidContact() {
		_classCallCheck(this, AndroidContact);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidContact).apply(this, arguments));
	}

	_createClass(AndroidContact, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M331.08,338.205c-22.156,12.594-47.777,19.783-75.084,19.783c-27.302,0-52.919-7.182-75.073-19.771 C122.153,356.152,77.262,396,64,448h384C434.745,396,389.854,356.131,331.08,338.205z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M255.996,64c-72.871,0-131.945,59.127-131.945,132.013c0,72.887,59.074,131.972,131.945,131.972 s131.945-59.085,131.945-131.972C387.941,123.127,328.867,64,255.996,64z M255.996,294.986c-41.958,0-77.813-25.986-92.209-62.986 h184.418C333.809,269,297.953,294.986,255.996,294.986z' })
					)
				)
			);
		}
	}]);

	return AndroidContact;
}(_react2.default.Component);

exports.default = AndroidContact;
;