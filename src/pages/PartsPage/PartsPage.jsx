import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaUser } from "react-icons/fa";

function PartPage() {
  const [parts, setParts] = useState([]);

  // função para fazer a requisição GET e atualizar a lista de parts
  async function fetchParts() {
    try {
      const response = await api.get("/part");
      setParts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // chama a função fetchParts() quando o componente é montado
  useEffect(() => {
    fetchParts();
  }, []);

  // função para deletar uma part pelo id
  async function deletePart(partId) {
    try {
      const response = await api.delete(`/part/delete/${partId}`);
      console.log(response.data);
      // remove a part deletada da lista de parts
      setParts(parts.filter((part) => part._id !== partId));
    } catch (error) {
      console.error(error);
    }
  }

  // renderiza a lista de parts em cartões
  const partCards = parts.map((part) => (
    <div
      className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden my-5 border-2 border-gray-200"
      key={part._id}
    >
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {part.partNumber}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {part.partName} - {part.machineSerialNumber}
        </p>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          {part.userCreator.name}
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Created At: {part.createdAt.slice(0, 10)}
        </p>
        {localStorage.getItem("loggedInUser") &&
        JSON.parse(localStorage.getItem("loggedInUser")).user.role ===
          "ADMIN" ? (
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded"
            onClick={() => deletePart(part._id)}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  ));

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white h-16">
        <div className="container mx-auto px-4 h-12">
          <div className="flex items-center justify-between py-2">
            <div>
              <Link to="/" className="text-lg font-semibold">
                My App
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="/partform"
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700"
              >
                <FaPlus className="mr-2" />
                Adicionar Part
              </Link>
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700"
              >
                <FaUser className="mr-2" />
                Perfil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Conteúdo da página */}
      <div className="flex flex-col items-center justify-center bg-gray-100 flex-1">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-xl font-semibold mb-6">List of Parts</h2>
          <div className="flex flex-col items-center justify-center">
            {partCards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartPage;
