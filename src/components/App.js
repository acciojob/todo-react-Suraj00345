
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTodo = () => {
    let found = false;
    for (let i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      if (task === inputValue) {
        found = true;
        break;
      }
    }

    if (!found) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (taskTobeRemoved) => {
    const remainingTasks = tasks.filter((task) => task !== taskTobeRemoved);
    setTasks(remainingTasks);
  };

  return (
    <div>
      <div>
        <input
          placeholder="Enter Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        {tasks.map((task) => {
          return (
            <ul>
              <li>
              <span style={{ marginRight: "100px" }}>{task}</span>
              <button onClick={() => removeTask(task)}>Delete</button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;
