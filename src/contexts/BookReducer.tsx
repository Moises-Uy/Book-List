import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import { bookReducer, Book } from "../reducer/Bookact";
import { v4 as uuidv4 } from "uuid";

interface BookContextValue {
  books: Book[];
  bookDispatch: React.Dispatch<any>;
}

export const BookContext = createContext<BookContextValue>({
  books: [],
  bookDispatch: () => null,
});

export const BookContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //Default Data [given]
  const initialState: Book[] = [
    { title: "Adventures of Tom Sawyer", author: ": Mark Twain", id: uuidv4() },
    { title: "Agni Veena", author: ": Kazi Nasrul Islam", id: uuidv4() },
    { title: "Animal Farm", author: ": George Orwell", id: uuidv4() },
  ];

  //Using Local Storage for Data
  const [books, dispatch] = useReducer(
    bookReducer,
    initialState,
    () => JSON.parse(localStorage.getItem("books") || "[]") as Book[]
  );
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, bookDispatch: dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
