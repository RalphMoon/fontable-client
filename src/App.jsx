import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import NotFound from "./components/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";
import Spinner from "./components/Loading/Spinner";

const Login = lazy(() => import("./pages/Login"));
const Lobby = lazy(() => import("./pages/Lobby"));
const CharacterGallery = lazy(() => import("./pages/CharacterGallery"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Lobby />} />
            <Route
              path="/projects/:project_id"
              element={<CharacterGallery />}
            />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
