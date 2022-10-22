import { lightMobile, darkMobile, darkDesktop, lightDesktop } from "assets";
import { NewTask, Task } from "components";
import { useState } from "react";
import styled from "styled-components";
import { Moon, Sun, Title } from "svg";
import { StyledElementPropsType, task } from "types";

function App() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [displayStatus, setDisplayStatus] = useState<string>("All");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const actives = tasks.filter((task) => task.active);
  const completed = tasks.filter((task) => !task.active);

  const addTask = (newTask: task) => {
    const clone = tasks.slice();
    clone.push(newTask);
    setTasks(clone);
  };

  const updateTaskStatus = (id: number) => {
    const clone = tasks.slice();
    const task = clone.find((item) => item.id === id);
    if (task) {
      task["active"] = !task?.active;
    }
    setTasks(clone);
  };

  const deleteTask = (id: number) => {
    const clone = tasks.slice();
    const taskIndex = clone.findIndex((item) => item.id === id);
    clone.splice(taskIndex, 1);
    setTasks(clone);
  };

  const clearCompleted = () => {
    const clone = tasks.slice();
    const clear = clone.filter((task) => !task.active);
    setTasks(clear);
  };

  const changeDisplay = (text: string) => {
    setDisplayStatus(text);
  };

  const changeDarkMode = () => {
    setDarkMode(true);
  };

  const changeLightMode = () => {
    setDarkMode(false);
  };

  const array =
    displayStatus === "All"
      ? tasks
      : displayStatus === "actives"
      ? actives
      : completed;

  return (
    <AppComponent darkMode={darkMode}>
      <Header>
        <Title />
        {darkMode ? (
          <Sun onClick={changeLightMode} />
        ) : (
          <Moon onClick={changeDarkMode} />
        )}
      </Header>
      <NewTask addTask={addTask} tasks={tasks} darkMode={darkMode} />
      <List>
        {array.map((item) => (
          <div key={item.id}>
            <Task
              item={item}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
            />
            <Hr />
          </div>
        ))}
        <Panel>
          <span>{array.length} items left</span>
          <Button active={false} onClick={clearCompleted}>
            Clear Completed
          </Button>
        </Panel>
      </List>
      <Buttons>
        <Button
          active={displayStatus === "All"}
          onClick={() => changeDisplay("All")}
        >
          All
        </Button>
        <Button
          active={displayStatus === "actives"}
          onClick={() => changeDisplay("actives")}
        >
          Active
        </Button>
        <Button
          active={displayStatus === "completed"}
          onClick={() => changeDisplay("completed")}
        >
          Completed
        </Button>
      </Buttons>
    </AppComponent>
  );
}

const AppComponent = styled.div(
  (props: StyledElementPropsType) => `
  width: 100vw;
  min-height: 100vh;
  background-color: ${props.darkMode ? "#171823" : "#f2f2f2"};
  background-image: url(${props.darkMode ? darkMobile : lightMobile});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 48px 24px 126px 24px;
  font-family: "Josefin Sans", sans-serif;
`
);

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.div`
  width: 100%;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-top: 16px;
  background-color: white;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: -0.17px;
`;

const Hr = styled.div`
  background-color: #e3e4f1;
  height: 1px;
`;

const Panel = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 20px 20px;
  color: #9495a5;
`;

type ButtonProps = {
  active: boolean;
};

const Button = styled.button(
  (props: ButtonProps) => `
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props.active ? "#3A7CFD" : "#9495a5"};
  background-color: transparent;
`
);

const Buttons = styled.div`
  width: 100%;
  height: 48px;
  background-color: white;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`;

export default App;
