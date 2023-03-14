
import { useRouter } from 'next/router'

export default function BookDetails() {
    const router = useRouter()
    const {yy} = router.query
    console.log(router);
    
    return (
      <h1>Book Details {yy}</h1>
    )
  }