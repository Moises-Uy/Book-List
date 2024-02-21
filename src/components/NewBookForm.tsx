import React, { useState } from "react";

interface Props {
  addBook: (title: string, author: string) => void;
}

export const NewBookForm: React.FC<Props> = ({ addBook }) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBook(title, ": " + author);
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
