import React from 'react'
import { hot } from 'react-hot-loader'
import One from './one'
import Two from './two'

const App = () => <div><One /><Two /></div>

export default hot(module)(App)
