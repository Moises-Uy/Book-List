import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext, Book } from "../contexts/BookContext";
import { NewBookForm } from "./NewBookForm";
import { v4 as uuidv4 } from "uuid";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  //Add Book
  const bookContext = useContext(BookContext);
  const [BookList, setBooks] = useState<Book[]>(bookContext);
  const addBook = (title: string, author: string) => {
    const newBook: Book = {
      title: title,
      author: author,
      id: uuidv4(),
    };
    setBooks([...BookList, newBook]);
  };
  //Delete Book
  const deleteBook = (id: string) => {
    setBooks(BookList.filter((book) => book.id !== id));
  };

  //Console Checking
  useEffect(() => {
    console.log(BookList);
  });

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {BookList.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <button onClick={() => deleteBook(book.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <NewBookForm addBook={addBook} />
    </div>
  );
};

export default BookList;
