import { v4 as uuidv4 } from "uuid";

export interface Book {
  title: string;
  author: string;
  id: string;
}

interface Action {
  type: string;
  book?: Book;
  id?: string;
}

export const bookAction = {
  ADD_BOOK: "ADD_BOOK",
  REMOVE_BOOK: "REMOVE_BOOK",
};

export const bookReducer = (state: Book[], action: Action) => {
  switch (action.type) {
    case bookAction.ADD_BOOK:
      return [
        {
          title: action.book!.title,
          author: action.book!.author,
          id: uuidv4(),
        },
        ...state,
      ];
    case bookAction.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
