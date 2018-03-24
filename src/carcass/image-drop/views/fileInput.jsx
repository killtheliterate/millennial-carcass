import React from 'react'
import PropTypes from 'prop-types'

const FileInput = ({ name, onChange }) => (
  <input
    className={`${name}-image-drop`}
    type="file"
    name={`${name}File`}
    onChange={onChange}
  />
)

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FileInput
