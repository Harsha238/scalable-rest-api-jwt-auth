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

      alert("Login successful");

    } catch (err) {
      alert("Login failed");
    }
  };

  const createTask = async () => {

    if (!token) {
      alert("Please login first!");
      return;
    }

    try {

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

      // clear input fields
      setTitle("");
      setDescription("");

    } catch (err) {
      alert("Error creating task");
    }

  };

  const getTasks = async () => {

    if (!token) {
      alert("Please login first!");
      return;
    }

    try {

      const res = await axios.get(
        "http://localhost:5000/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setTasks(res.data);

    } catch (err) {
      alert("Error fetching tasks");
    }

  };

  const deleteTask = async (id) => {

    if (!token) {
      alert("Please login first!");
      return;
    }

    try {

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // remove deleted task from UI
      setTasks(tasks.filter((task) => task._id !== id));

    } catch (err) {
      alert("Error deleting task");
    }

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={login}>
          Login
        </button>

        <hr />

        <h2>Create Task</h2>

        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="create-btn" onClick={createTask}>
          Create Task
        </button>

        <button className="get-btn" onClick={getTasks}>
          Get Tasks
        </button>

        <div className="task-container">

  <ul className="task-list">
    {tasks.map((task) => (
      <li key={task._id} className="task-item">

        <span>{task.title}</span>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>

      </li>
    ))}
  </ul>

</div>

      </div>

    </div>

  );
}

export default App;