import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {fetchBookFromId} from '../../data/utils'


export default function BookDetails() {
    const router = useRouter()
    const {id} = router.query
    const [book, setBook] = useState({})

    useEffect(() => {
        setBook(fetchBookFromId(id))
    }, [id])
    
    return (
      <div 
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
      </div>
     )
  }