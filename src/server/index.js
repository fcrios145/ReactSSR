import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import React from 'react'

const app = express()

app.use(cors())

app.use(express.static('public'))

app.get('*', (req, res, next) => {
    const markup = renderToString(
        <App />
    )

    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>SSR with react</title>
                <script src='/bundle.js' defer></script>
                <body>
                    <div id='app'>${markup}</div>
                </body>
            </head>
        </html>
    `)

})

app.listen(3000, () => {
    console.log('sd')
})
