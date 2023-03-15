
import { useRouter } from 'next/router'

export default function BookDetails() {
    const router = useRouter()
    const {id} = router.query
    console.log(router);
    
    return (
      <h1>Book Details {id}</h1>
    )
  }