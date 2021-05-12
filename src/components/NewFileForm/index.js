import { useDispatch } from "react-redux";
import { SaveNewFile } from "../../store/reducers/vault";

export default function NewFileForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formEntries = new FormData(event.target).entries()
    let data = {}
    for(let [key, value] of formEntries) {
      data[key] = value
    }
    dispatch(SaveNewFile(data));
  };

  return (
    <form id="newFile" onSubmit={handleSubmit}>
      <label htmlFor="title">Título / Nombre</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="url">Url</label>
      <input type="text" id="url" name="url" />
      <label htmlFor="tags">Tags (separados por ", ")</label>
      <input type="text" id="tags" name="tags" />

      <button type="submit">Enviar</button>
    </form>
  );
}
