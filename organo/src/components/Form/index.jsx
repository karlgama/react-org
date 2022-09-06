import "./Form.css";
import TextField from "../TextField";
import Combobox from "../ComboBox";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerHandler({
      nome,cargo,imagem,time
    })
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <TextField
          value={nome}
          setValue={(value) => setNome(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          value={cargo}
          setValue={(value) => setCargo(value)}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          value={imagem}
          setValue={(value) => setImagem(value)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <Combobox value={time} setValue={e=>setTime(e)} label="times" itens={props.teams}></Combobox>
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
