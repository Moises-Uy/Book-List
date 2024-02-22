import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import { NewBookForm } from "./components/NewBookForm";
import ThemeToggle from "./components/ThemeToggle";
import { BookContextProvider } from "./contexts/BookReducer";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookContextProvider>
          <BookList />
          <NewBookForm />
        </BookContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
