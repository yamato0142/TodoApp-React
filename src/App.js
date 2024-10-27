import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoApp } from "./components/Todo/TodoApp.jsx";
import { SignIn } from "./components/Login/SignIn.jsx";
import { auth } from "./firebase"; // firebase.jsからauthをインポート

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<TodoApp />} />
        <Route path={`/login`} element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
