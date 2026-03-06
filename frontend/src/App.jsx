import { useState } from "react";
import axios from "axios";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);

      alert("Login successful");   // this will show a popup
    } catch (err) {
      alert("Login failed");
    }
  };

  const createTask = async () => {

    const res = await axios.post(
      "http://localhost:5000/api/tasks",
      { title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setTasks([...tasks, res.data]);

  };

  const getTasks = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/tasks",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setTasks(res.data);

  };

  return (

    <div className="app-container">

      <h1 className="main-title">
        Scalable REST API with JWT Authentication
      </h1>

      <div className="container">

        <h2>Login</h2>

        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={login}>
          Login
        </button>

        <hr />

        <h2>Create Task</h2>

        <input
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="create-btn" onClick={createTask}>
          Create Task
        </button>

        <button className="get-btn" onClick={getTasks}>
          Get Tasks
        </button>

        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.title}</li>
          ))}
        </ul>

      </div>

    </div>

  );
};

export default App;