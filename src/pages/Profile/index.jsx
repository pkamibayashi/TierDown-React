import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { FaPlus, FaUser, FaThLarge } from "react-icons/fa";
export function Profile() {
  const { setLoggedInUser } = useContext(AuthContext);
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/profile");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white h-16">
        <div className="container mx-auto px-4 h-12 ">
          <div className="flex items-center justify-between py-2 ">
            <div>
              <Link to="/" className="text-lg font-semibold mb-8">
                Home Page
              </Link>
            </div>
            <div className="flex items-center justify-center ">
              <Link
                to="/partform"
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700"
              >
                <FaPlus className="mr-2" />
                Add Part
              </Link>
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700"
              >
                <FaUser className="mr-2" />
                Profile
              </Link>
              <Link
                to="/parts"
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700"
              >
                <FaThLarge className="mr-2" />
                Parts
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <p className="text-gray-700 text-lg mb-4">{user.email}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogOut}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
