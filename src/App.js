import { BrowserRouter, Routes, Route} from "react-router-dom";
import { TodoApp } from "./components/Todo/TodoApp.jsx";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// Firebase Authの初期化（必要であれば）
const auth = getAuth(app);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
