import Worker from "../Worker";
import "./Team.css";

const Team = (props) => {
  const css = { backgroundColor: props.primaryColor };
  console.log("secondary: " , props.secondaryColor)
  return (
    <section style={css} className="team">
      <h3 style={{borderColor: props.secondaryColor}}>{props.name}</h3>
      <Worker/>
    </section>
  );
};

export default Team;
