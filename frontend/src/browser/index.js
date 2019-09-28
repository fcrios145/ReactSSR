import App from '../shared/App'
import { hydrate } from 'react-dom'
import React from 'react'

hydrate(
    <App />, document.getElementById('app')
)
