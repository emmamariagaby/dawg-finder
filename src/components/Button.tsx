import * as React from "react";
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

/*
Holding all buttons related to router 
*/ 

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    className,
    ...rest
  } = props
  return (
    <button className={props.className}
      {...rest} 
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)