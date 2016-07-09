var React = require('react');

module.exports.IconBase = React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired
    },



    render: function() {
        return <span className="icon">
            <svg>
            {this.props.children}
            </svg>
        </span>;
    }
});
