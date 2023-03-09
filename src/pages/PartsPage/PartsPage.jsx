import { api } from "../../api/api";
import { useState, useEffect } from "react";

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
    <div className="card" key={part._id}>
      <div className="card-body">
        <h5 className="card-title">{part.partNumber}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{part.partName}</h6>
        <p className="card-text">{part.machineSerialNumber}</p>
        <p className="card-text">{part.userCreator.name}</p>
        <p className="card-text">{part.createdAt}</p>
        {localStorage.getItem("loggedInUser") &&
        JSON.parse(localStorage.getItem("loggedInUser")).user.role ===
          "ADMIN" ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deletePart(part._id)}
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div>{partCards}</div>
    </div>
  );
}

export default PartPage;
