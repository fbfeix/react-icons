'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AndroidCall = require('icons/AndroidCall');

var _AndroidCall2 = _interopRequireDefault(_AndroidCall);

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

_reactDom2.default.render(React.createElement(
    'svg',
    { className: 'icon', version: '1.1', x: '0px', y: '0px',
        viewBox: '0 0 512 512', 'enable-background': 'new 0 0 512 512' },
    React.createElement(_AndroidCall2.default, { bare: 'true' })
), document.getElementById('app'));