import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Spinner from "./components/Loading/Spinner";

const Login = lazy(() => import("./pages/Login"));
const Lobby = lazy(() => import("./pages/Lobby"));
const CreateProject = lazy(() => import("./pages/CreateProject"));
const CharacterGallery = lazy(() => import("./pages/CharacterGallery"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Lobby />} />
          <Route path="/new" element={<CreateProject />} />
          <Route path="/projects/:project_id" element={<CharacterGallery />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
