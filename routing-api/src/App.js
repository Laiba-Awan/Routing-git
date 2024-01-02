import "./App.css";
import Albums from "./pages/Albums";
import Posts from "./pages/Posts";
import Pagenotfound from "./pages/Pagenotfound";
import AlbumDetails from "./pages/AlbumDetails";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Albums />} />
        <Route path="/albumDetail/:id" element={<AlbumDetails />} />
        <Route path="pages/Posts" element={<Posts />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
