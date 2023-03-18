import {books} from '../../data/utils'
import Link from 'next/link'

export default function Book() {
    return (
      <div className="">
        {books.map((book, i) => {
          return (
           <div 
           key={i} 
           style={{
            width: 300, 
            background: 'whitesmoke',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
            }}
            >
            <h2>{book.name}</h2>
            <p>{book.description}</p>
            <article 
            style={{
                 border: '1px solid black',
                 padding: 12,
                 background: '#ccc'
            }}
            >
              <Link href={`/books/${book.id}`} >Detail  </Link>
              </article>
           </div>
          )
        })}
      </div>
    )
  }
  