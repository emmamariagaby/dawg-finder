import * as React from "react";
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

// class Button extends React.Component {
//     render() {
//         return (
//           <button> Button </button>
        
//         );
//     }
// }

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    className,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  console.log("mount", props.className)
  return (
    <button className={props.className}
      {...rest} // `children` is just another prop!
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