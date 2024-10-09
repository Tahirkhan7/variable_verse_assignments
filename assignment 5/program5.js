// program 5
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 2007,
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    yearPublished: 2011,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
  },
];

books
  .filter((book) => book.yearPublished > 2000)
  .forEach((book) => console.log(book.title));

const bookInAsc = books.sort((a, b) => a.yearPublished - b.yearPublished);
console.log(bookInAsc);

const Arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
