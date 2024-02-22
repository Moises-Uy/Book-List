import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookReducer";
import { BookDetail } from "./BookDetail";

const BookList: React.FC = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return (
    <div
      style={{ background: theme.bg, color: theme.syntax }}
      className="book-list"
    >
      {books.length ? (
        <ul>
          {books.map((book) => (
            <BookDetail books={book} key={book.id} />
          ))}
        </ul>
      ) : (
        "No books here ..."
      )}
    </div>
  );
};

export default BookList;
