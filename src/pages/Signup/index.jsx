import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { Link } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      await api.post("/user/signup", { ...form, img: imgURL });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-gray-800 font-bold mb-2" htmlFor="formName">
            Nome:
          </label>
          <input
            id="formName"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <label className="text-gray-800 font-bold mb-2" htmlFor="formImg">
            Sua foto de perfil:
          </label>
          <input
            type="file"
            id="formImg"
            onChange={handleImage}
            className="border rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <label className="text-gray-800 font-bold mb-2" htmlFor="formEmail">
            E-mail:
          </label>
          <input
            id="formEmail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <label
            className="text-gray-800 font-bold mb-2"
            htmlFor="formPassword"
          >
            Senha:
          </label>
          <input
            id="formPassword"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <label
            className="text-gray-800 font-bold mb-2"
            htmlFor="formConfirmPassword"
          >
            Confirmação de senha:
          </label>
          <input
            id="formConfirmPassword"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Cadastrar
          </button>

          <div className="flex justify-between">
            <Link
              to={"/"}
              className="text-gray-600 hover:text-gray-800 font-semibold"
            >
              <button>Retornar à página inicial</button>
            </Link>
            <Link
              to={"/login"}
              className="text-purple-600 hover:text-purple-800 font-semibold"
            >
              <button>Entrar</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
