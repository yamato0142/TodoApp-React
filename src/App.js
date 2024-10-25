import { BrowserRouter, Routes, Route} from "react-router-dom";
import { TodoApp } from "./components/Todo/TodoApp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<TodoApp></TodoApp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
