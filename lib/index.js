'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _alert = require('icons/alert');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

/*
module.exports.IconBase = React.createClass({
    propTypes: {
        src: React.PropTypes.String,
        children: React.PropTypes.element.isRequired
    },

    getDefaultProps: function() {
        return {
            src: ''
        };
    },

    render: function() {
        return <span className="icon">
            <svg>
            {this.props.children}
            </svg>
        </span>;
    }
})

*/

_reactDom2.default.render(React.createElement(_alert2.default, null), document.getElementById('app'));