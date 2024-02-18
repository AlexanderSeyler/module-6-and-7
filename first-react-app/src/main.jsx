import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorMessage from './ErrorMessage'
import { BrowserRouter } from 'react-router-dom'
import { EmojiProvider } from './context/EmojiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    {/* <ErrorBoundary FallbackComponent={ErrorMessage}> */}
      <BrowserRouter>
      <EmojiProvider>
        <App /> {/* can wrap App or other high-level parent components */}
      </EmojiProvider>
      </BrowserRouter>
    {/* </ErrorBoundary> */}
    </React.StrictMode>,
)


