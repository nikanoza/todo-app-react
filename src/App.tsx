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

  const actives = tasks.filter((task) => !task.active);
  const completed = tasks.filter((task) => task.active);

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

  const ButtonsDisplay = (
    <Buttons darkMode={darkMode}>
      <Button
        active={displayStatus === "All"}
        darkMode={darkMode}
        onClick={() => changeDisplay("All")}
      >
        All
      </Button>
      <Button
        active={displayStatus === "actives"}
        onClick={() => changeDisplay("actives")}
        darkMode={darkMode}
      >
        Active
      </Button>
      <Button
        active={displayStatus === "completed"}
        onClick={() => changeDisplay("completed")}
        darkMode={darkMode}
      >
        Completed
      </Button>
    </Buttons>
  );

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
      <List darkMode={darkMode}>
        {array.map((item) => (
          <div key={item.id}>
            <Task
              item={item}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
              darkMode={darkMode}
            />
            <Hr darkMode={darkMode} />
          </div>
        ))}
        <Panel darkMode={darkMode}>
          <span>{array.length} items left</span>
          <ButtonsDesktop>{ButtonsDisplay}</ButtonsDesktop>
          <Button active={false} onClick={clearCompleted} darkMode={darkMode}>
            Clear Completed
          </Button>
        </Panel>
      </List>
      <ButtonsMobile>{ButtonsDisplay}</ButtonsMobile>
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
  overflow-X: hidden;
  @media (min-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${props.darkMode ? darkDesktop : lightDesktop});
    padding-top: 70px;
    background-size: 100% 300px;
  }
`
);

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 540px;
  }
`;

const List = styled.div(
  (props: StyledElementPropsType) => `
  width: 100%;
  box-shadow: ${
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
  };
  border-radius: 5px;
  margin-top: 16px;
  background-color: ${props.darkMode ? "#25273D" : "white"};
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: -0.17px;
  @media (min-width: 768px){
    max-width: 540px;
    margin-top: 24px;
  }
`
);

const Hr = styled.div(
  (props: StyledElementPropsType) => `
  background-color: ${props.darkMode ? "#393A4B" : "#e3e4f1"};
  height: 1px;
`
);

const Panel = styled.div(
  (props: StyledElementPropsType) => `
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 20px 20px;
  color:${props.darkMode ? "#5B5E7E" : "#9495a5"} ;
  @media(min-width: 768px){
    height: 64px;
  }
`
);

type ButtonProps = {
  active: boolean;
  darkMode: boolean;
};

const Button = styled.button(
  (props: ButtonProps) => `
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props.active ? "#3A7CFD" : props.darkMode ? "#5B5E7E" : "#9495a5"};
  background-color: transparent;
`
);

const Buttons = styled.div(
  (props: StyledElementPropsType) => `
  width: 100%;
  height: 48px;
  background-color: ${props.darkMode ? "#25273D" : "white"};
  box-shadow: ${
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
  };
  border-radius: 5px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  @media (min-width: 768px){
    max-width: 166px;
  }
  @media(min-width: 768px){
    margin-top:0;
  }
`
);

const ButtonsMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const ButtonsDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export default App;
