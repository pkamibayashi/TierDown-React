import { api } from "../../api/api";
import { useState } from "react";

function PartForm() {
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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="partNumber"
        placeholder="Part number"
        value={newPart.partNumber}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="partName"
        placeholder="Part name"
        value={newPart.partName}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="machineSerialNumber"
        placeholder="Machine serial number"
        value={newPart.machineSerialNumber}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Create Part</button>
    </form>
  );
}

export default PartForm;
