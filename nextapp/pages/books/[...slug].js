
import { useRouter } from 'next/router'

export default function Slug() {
    const router = useRouter()
    const {yy} = router.query
    console.log(router);
    
    return (
      <h1>Slug </h1>
    )
  }