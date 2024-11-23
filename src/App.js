import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/users" element={<UserListPage />} /> */}
        {/* <Route path="/users/:id" element={<ProfilePage />} /> */}
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://rapidapi.com/rapihub-rapihub-default/api/imdb-top-100-movies
