import React from 'react'
import { hot } from 'react-hot-loader'
import ImageDrop from './image-drop'

const App = () => (
  <form method="post" action="" encType="multipart/form-data">
    <ImageDrop name="head" />
    <ImageDrop name="torso" />
    <ImageDrop name="legs" />
    <button type="submit">Upload</button>
  </form>
)

export default hot(module)(App)
