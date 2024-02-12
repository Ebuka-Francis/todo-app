import Input from "./Input";
import iconCheck from "../Assets/icon-check.svg";
import List from "../Components/List";
import iconCross from "../Assets/iconCross.svg";
export default function Border({ onAdd, tasks, turns, onDel, onMarkToggle, count }) {

  console.log(tasks);

  const TodoListItem = ({ task }) => {
    let uncompletedState = <div className="spanA"></div>;
    if (task.completed === true) {
      uncompletedState = (
        <div className="spanG">
          <div>
            <img src={iconCheck} alt="icon check" />
          </div>
        </div>
      );
    }
    return (
      <li key={task.id} className={task.completed === true ? "taskText" : null}>
        <div onClick={() => onMarkToggle(task.id)}>{uncompletedState}</div>
        <p p>{task.text}</p>
        <button className="btn" onClick={() => onDel(task.id)}>
          <img src={iconCross} alt="cross icon" />
        </button>
      </li>
    );
  };

  return (
    <>
      <div className={turns ? "borders" : "border"}>
        <span></span>
        <Input onAdd={onAdd} />
      </div>
      <ul className={turns ? "ol" : "il"}>
        {tasks.map((task) => (
          <TodoListItem task={task} />
        ))}
            <div className={turns ? "cordinators" : "cordinator"}>
          <List counts={ count} />
        </div>
        
      </ul>
    </>
  );
}
