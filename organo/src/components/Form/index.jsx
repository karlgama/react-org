import "./Form.css";
import TextField from "../TextField";
import Combobox from "../ComboBox";
import Button from "../Button";
import { useState } from "react";

const Form = () => {
  const times = [
    "Programação",
    "Front-end",
    "Devops",
    "UX e design",
    "Inovação e gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("teste");
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
        <Combobox value={time} setValue={e=>setTime(e)} label="times" itens={times}></Combobox>
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
