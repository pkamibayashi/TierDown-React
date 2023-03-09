import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";

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
    <div className="h-screen flex flex-row bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex justify-center w-4/12 h-96 bg-white rounded-xl shadow-xl mx-auto my-auto  p-10 ">
        <form
          onSubmit={handleSumit}
          className="flex flex-col items-center justify-center"
        >
          <label className="text-gray-300 font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <label className="text-gray-300 font-medium">Senha:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Entrar!
          </button>
        </form>
      </div>
    </div>
  );
}
