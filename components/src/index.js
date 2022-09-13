import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentDetail from './CommentDetail';

const el = document.getElementById('root')

const root =  ReactDOM.createRoot(el)

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail author="Sam" />
            <CommentDetail author="Alex" />
            <CommentDetail author="Johonnnn" />
        </div>
    )
}

root.render(<App />)