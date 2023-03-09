import { Route, Routes } from "react-router-dom";
import { AuthContextComponent } from "./contexts/authContext";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";
import PartPage from "./pages/PartsPage/PartsPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import PartForm from "./pages/PartsPage/PartForm";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route
            path="/parts"
            element={<ProtectedRoute component={PartPage} />}
          />
          <Route
            path="/partform"
            element={<ProtectedRoute component={PartForm} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
