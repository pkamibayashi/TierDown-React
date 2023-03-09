import { api } from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function PartForm() {
  const navigate = useNavigate(); // movido para dentro do componente
  const [newPart, setNewPart] = useState({
    partNumber: "",
    partName: "",
    machineSerialNumber: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewPart({ ...newPart, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("part/createPart", newPart);
      console.log("Part created:", response.data);
      // clear form inputs after successful creation
      setNewPart({
        partNumber: "",
        partName: "",
        machineSerialNumber: "",
      });
      navigate("/parts");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen flex flex-col">
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

      <div className="flex flex-col items-center justify-center bg-gray-100 flex-1">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-xl font-semibold mb-6">Create a New Part</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="partNumber"
              >
                Part Number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="partNumber"
                placeholder="Part number"
                value={newPart.partNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="partName"
              >
                Part Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="partName"
                placeholder="Part name"
                value={newPart.partName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="machineSerialNumber"
              >
                Machine Serial Number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="machineSerialNumber"
                placeholder="Machine serial number"
                value={newPart.machineSerialNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Part
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PartForm;
