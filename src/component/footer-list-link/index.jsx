import PropTypes from "prop-types"
export function FooterListLink(props) {
  console.log(props)
  return (
    <li><a>{props.name}</a></li>
  )
}

FooterListLink.propTypes = {
  name: PropTypes.string
}

