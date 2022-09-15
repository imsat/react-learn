import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import { faker } from '@faker-js/faker';

const el = document.getElementById('root')

const root =  ReactDOM.createRoot(el)

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail 
                author="Sam" 
                timeAgo="Todat at 4:45PM" 
                textBody="Very good blog post!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Todat at 5:30PM" 
                textBody="Good blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Johonnnn" 
                timeAgo="Todat at 08:00PM" 
                textBody="Awsome blog post!" 
                avatar={faker.image.avatar()}
            />


<ApprovalCard />
        </div>
    )
}

root.render(<App />)