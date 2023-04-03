export async function getBooks() {
    const res = await fetch("https://next-app-ab1e7-default-rtdb.firebaseio.com/books.json") 
    const data = await res.json();
    return data
}

export async function getBookDetails(id) {
    const books = await getBooks()
    const book = books.find(book => book.id === id);
    return book
}