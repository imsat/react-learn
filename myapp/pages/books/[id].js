import { getBookDetails, getBooks } from "@/utils/api-utils"

const BookDetails = ({ book }) => {
  return (
   <div>
     <h2>{book.name}</h2>
    <p>{book.description}</p>
   </div>
  )
}

export default BookDetails

export async function getStaticProps({ params }) {
  const book = await getBookDetails(params.id)
  return {
    props: {
      book,
    }
  }
}

export async function getStaticPaths() {
    const books = await getBooks()
    const paths = books.map((book) => {
        return {params: {id: book.id}}

    })
  return {
    paths: paths,
    fallback: false,
  }
}
