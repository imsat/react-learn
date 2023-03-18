export const books = [
  {
    id: "1",
    name: "Mindset",
    description: "This is my first book",
  },
  {
    id: "2",
    name: "The Secret",
    description: "This is my first book",
  },
  {
    id: "3",
    name: "The Money",
    description: "This is my first book",
  },
  {
    id: "4",
    name: "Atomic Habits",
    description: "This is my first book",
  },
  {
    id: "5",
    name: "Rich Dad Poor Dad",
    description: "This is my first book",
  },
]

export const fetchBookFromId = (id) => {
    const book = books.find(book => book.id ===id)
    return book
}
