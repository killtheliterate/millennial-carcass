import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FileInput, Preview } from './views'

class ImageDrop extends PureComponent {
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
    return (
      <div>
        <FileInput name={name} onChange={e => this.onDrop(e)} />
        <Preview src={fileURL} />
      </div>
    )
  }
}

ImageDrop.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ImageDrop
