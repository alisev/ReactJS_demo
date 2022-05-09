import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ title, style, type, onClick }) => {
    return (
        <button className={ style } type={ type } onClick={ onClick }>{ title }</button>
      );
}

Button.defaultProps = {
    style: "btn waves-effect deep-purple lighten-1 waves-light",
}

Button.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
}

export default Button;