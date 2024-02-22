import React, { useContext } from "react";
import { bookAction, Book } from "../reducer/Bookact";
import { BookContext } from "../contexts/BookReducer";

interface Prop {
  books: Book;
}

export const BookDetail: React.FC<Prop> = ({ books }) => {
  const { bookDispatch } = useContext(BookContext);
  return (
    <li
      onClick={() =>
        bookDispatch({ type: bookAction.REMOVE_BOOK, id: books.id })
      }
      className="book-details"
    >
      <div>
        <h3>{books.title}</h3>
        <p>{books.author}</p>
      </div>
    </li>
  );
};
