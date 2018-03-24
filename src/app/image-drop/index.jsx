import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ImageDrop extends Component {
  constructor(props) {
    super(props)
    this.state = { fileURL: '' }

    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(e) {
    e.preventDefault()
    const reader = new FileReader()
    const file = e.target.files[0]
    reader.onloadend = () => { // setState on image load
      this.setState({ fileURL: reader.result })
    }
    reader.readAsDataURL(file)
  }

  render() {
    const { fileURL } = this.state
    const { name } = this.props
    const preview = <img src={fileURL} alt="preview" />
    return (
      <div>
        <input className="image-drop" type="file" name={`${name}File`} onChange={e => this.onDrop(e)} />
        {fileURL ? preview : null}
      </div>
    )
  }
}

ImageDrop.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ImageDrop
