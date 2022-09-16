import React from 'react'
import ReactDOM from 'react-dom/client'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import { faker } from '@faker-js/faker';
import Segment from './Segment';

const el = document.getElementById('root')

const root =  ReactDOM.createRoot(el)

const App = () => {
    return (
        <div className='ui container comments'>

            <Segment>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No document are listed for this customer.
                </div>
                <div className="ui primary button">Add Document</div>
            </Segment>

            <Segment>
                <div className="ui icon header">For Your Information</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit nemo vel, itaque nobis dolorum ex ipsa dolorem deleniti id doloribus maxime eos ea provident fugit blanditiis rem officiis incidunt.</p>
            </Segment>

            
            

{/*             
            <Message
            headerText="This is example header"
            description="welll whats good"
            >
                
            </Message>

            <ApprovalCard>
                <div>
                    <h4>Warning!!</h4>
                </div>
                Are you sure you want this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Todat at 4:45PM" 
                    textBody="Very good blog post!" 
                     avatar={faker.image.avatar()}
                />
            </ApprovalCard>  
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Todat at 5:30PM" 
                    textBody="Good blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Johonnnn" 
                    timeAgo="Todat at 08:00PM" 
                    textBody="Awsome blog post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard> */}
            
        </div>
    )
}

root.render(<App />)