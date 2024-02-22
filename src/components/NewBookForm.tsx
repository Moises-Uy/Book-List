import React, { useState, useContext } from "react";
import { bookAction } from "../reducer/Bookact";
import { BookContext } from "../contexts/BookReducer";

//Add Book
export const NewBookForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const { bookDispatch } = useContext(BookContext);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookDispatch({
      type: bookAction.ADD_BOOK,
      book: { title, author },
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="bookName"
          placeholder="Book name:"
          autoComplete="off"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="authorName"
          placeholder="Author name:"
          value={author}
          autoComplete="off"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="submit" value="Add book" />
      </form>
    </div>
  );
};
