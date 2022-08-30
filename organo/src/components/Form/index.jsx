import "./Form.css";
import TextField from "../TextField";

const Form = () => {
  return (
    <section className="form">
      <form>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Form;
