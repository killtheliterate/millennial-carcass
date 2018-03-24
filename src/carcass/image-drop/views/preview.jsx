import React from 'react'
import PropTypes from 'prop-types'

const Preview = ({ src }) => (
  src
    ? <img src={src} alt="preview" />
    : null
)

Preview.propTypes = {
  src: PropTypes.string,
}

Preview.defaultProps = {
  src: undefined,
}

export default Preview
