var React = require('react');

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
});
