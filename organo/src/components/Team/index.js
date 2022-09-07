import Worker from "../Worker";
import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.secondaryColor };
  return (
    props.workers.length > 0 && (
      <section style={css} className="team">
        <h3 style={{ borderColor: props.secondaryColor }}>{props.name}</h3>
        <div className="workers">
          {props.workers.map((worker) => (
            <Worker color={props.primaryColor} name={worker.name} key={worker.name} role={worker.role} img={worker.img} />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
