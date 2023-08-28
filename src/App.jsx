import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Lobby from "./pages/Lobby";
import CreateProject from "./pages/CreateProject";
import CharacterGallery from "./pages/CharacterGallery";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Lobby />} />
        <Route path="/new" element={<CreateProject />} />
        <Route path="/projects/:project_id" element={<CharacterGallery />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
