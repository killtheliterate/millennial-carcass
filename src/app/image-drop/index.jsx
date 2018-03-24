import React, { Component } from 'react'

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
    const preview = <img src={fileURL} alt="preview" />
    return (
      <form method="post" action="" encType="multipart/form-data">
        <input className="image-drop" type="file" onChange={e => this.onDrop(e)} />
        {fileURL ? preview : null}
        <button type="submit">Upload</button>
      </form>
    )
  }
}

export default ImageDrop
