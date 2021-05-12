import { useState } from "react";
import { useSelector } from "react-redux";
import { getFiles } from "../../store/selectors/vault";

import NewFileForm from "../../components/NewFileForm";
import Grid from "../../components/Grid";

require('dotenv').config()

export default function Vault() {
  const [vaultKey, setVaultKey] = useState("");
  const [search, setSearch] = useState("");
  const files = useSelector((state) => getFiles(state));
  let filtered = files.filter((file) => {
    if (search === "") return file;
    let isIncluded = false;
    file.tags.forEach((tag) => {
      isIncluded += tag.includes(search);
    });
    return isIncluded;
  });
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleVaultKey = (event) => {
    setVaultKey(event.target.value);
  };

  return (
    <>
      <input onChange={handleVaultKey} />
      { vaultKey === process.env.REACT_APP_VAULT_KEY &&
        <div>
          <div id="overlay" />
          <NewFileForm />
          <input id="search" onChange={handleChange} placeholder="Search by tags" />
          <Grid title="Vault" itemWidth="275px">
            {filtered.map((file) => (
              <img
                src={`${process.env.REACT_APP_STORAGE_URL}${file.url}`}
                alt={file.title}
                onClick={toggleFullscreen}
                key={file.id}
                style={{maxWidth: "275px"}}
              />
            ))}
          </Grid>
        </div>
      }
    </>
  );
}

const toggleFullscreen = () => {
  document.getElementById("overlay").classList.toggle("visible");
  document.getElementById("grid").classList.toggle("full");
  document.getElementById("search").classList.toggle("top");
};
