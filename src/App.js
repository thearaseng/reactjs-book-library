import { useSelector } from 'react-redux';
import LoginForm from "./components/LoginForm";
import BookLibraryForm from "./components/BookLibraryForm";

function App() {

  const user = useSelector((state) => {
    return state.user;
  });

  return user ? <BookLibraryForm /> : <LoginForm />;
}

export default App;