import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Front-end",
      primaryColor: "#82CFFA",
      secondaryColor: "#EBF8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06869",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FF8A05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [employees, setEmployees] = useState([]);

  const registerHandler = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        registerHandler={(employee) => registerHandler(employee)}
      />
      {teams.map((team) => (
        <Team
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          key={team.name}
          name={team.name}
          workers={employees.filter((employe) => employe.team === team.name)}
        />
      ))}
    </div>
  );
}

export default App;
