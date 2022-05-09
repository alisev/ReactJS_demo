import React from 'react'

const Materialicon = ({ title, style, func, args }) => {
    return (
        <i className="tiny material-icons" style={ style } onClick={ () => func(args) }>{ title }</i>
      );
}

export default Materialicon;