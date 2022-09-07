import "./Form.css";
import TextField from "../TextField";
import Combobox from "../ComboBox";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [img, setImg] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerHandler({
      name,
      role,
      img,
      team,
    });
    setName("");
    setRole("");
    setImg("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <TextField
          value={name}
          setValue={(value) => setName(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          value={role}
          setValue={(value) => setRole(value)}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          value={img}
          setValue={(value) => setImg(value)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <Combobox
          value={team}
          setValue={(e) => setTeam(e)}
          label="times"
          itens={props.teams}
        ></Combobox>
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
