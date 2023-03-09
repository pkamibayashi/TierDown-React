import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10">
        <form onSubmit={handleSumit} className="flex flex-col">
          <label className="text-gray-800 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <label className="text-gray-800 font-bold mb-2" htmlFor="password">
            Senha:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Entrar!
          </button>

          <div className="flex justify-between">
            <Link
              to={"/"}
              className="text-gray-600 hover:text-gray-800 font-semibold"
            >
              <button>Retornar à página inicial</button>
            </Link>
            <Link
              to={"/signup"}
              className="text-purple-600 hover:text-purple-800 font-semibold"
            >
              <button>Cadastre-se</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
