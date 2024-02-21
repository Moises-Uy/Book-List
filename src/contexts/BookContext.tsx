import { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Book {
  title: string;
  author: string;
  id: string;
}

export const BookContext = createContext<Book[]>([]);

export const BookContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [BookList] = useState<Book[]>([
    { title: "Adventures of Tom Sawyer", author: ": Mark Twain", id: uuidv4() },
    { title: "Agni Veena", author: ": Kazi Nasrul Islam", id: uuidv4() },
    { title: "Animal Farm", author: ": George Orwell", id: uuidv4() },
  ]);

  return (
    <BookContext.Provider value={BookList}>{children}</BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
