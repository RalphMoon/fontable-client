import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import CharacterGallery from "./pages/CharacterGallery";
import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/new" element={<CreateProject />} />
      <Route path="/projects/:project_id" element={<CharacterGallery />} />
    </Routes>
  );
}

export default App;
