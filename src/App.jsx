import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/forms/login/Login";
import Register from "./components/forms/register/Register";
import ChangePassword from "./components/forms/password/ChangePassword";
import CreateTeam from "./components/forms/team/CreateTeam";
import CreateTask from "./components/forms/task/CreateTask";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
