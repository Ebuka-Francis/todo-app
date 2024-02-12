import { useState } from "react";
import Border from "./Components/Border";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const [prevState, setNewState] = useState(false);

  const [projectState, setProjectState] = useState({
    tasks: [],
  });
  function onAddProject(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectedId,
        id: taskId,
        completed: false,
        length: 0,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function onDeleteProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function toggleMarkAsCompleted(id) {
    setProjectState((prevState) => {
      const tasks = [...prevState.tasks];
      const taskIndex = tasks.findIndex((task) => task.id === id);
      let task = tasks[taskIndex]
      task = {...task, completed: !task.completed}
      tasks[taskIndex] = task
      return { tasks };
    });
  }
  

  function handleChange(newState) {
    setNewState(prevState ? false : true);
  }
  let TodoImage = <div className="firstImg"></div>;
  document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
  if (prevState) {
    TodoImage = <div className="secondImg"></div>
    ;
    document.body.style.backgroundColor = "#fff";
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header onSelect={handleChange} turns={prevState} />
        {TodoImage}
        <div className="container">
          <Border
            turns={prevState}
            tasks={projectState.tasks}
            onAdd={onAddProject}
            onDel={onDeleteProject}
            onMarkToggle={toggleMarkAsCompleted}
            count={projectState.tasks.length}
          />
      
        </div>
      </header>
    </div>
  );
}

export default App;
