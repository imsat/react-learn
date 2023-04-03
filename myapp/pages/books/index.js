import { getBooks } from "@/utils/api-utils";
import Link from 'next/link'

const Book = ({ books }) => {
  return (
    <div className="">
      <ul>
        {books &&
          books.map((book, i) => {
            return (
                <li key={i}>
                <div>
                  <h2>{book.name}</h2>
                  <p>{book.description}</p>
                  <article><Link href={`books/${book.id}`}>Go to Book </Link></article>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  );
};

export default Book;

export async function getStaticProps() {
  const books = await getBooks();
  return {
    props: {
      books,
    }
  };
}
