import { lightMobile } from "assets";
import { NewTask, Task } from "components";
import { useState } from "react";
import styled from "styled-components";
import { Moon, Title } from "svg";
import { task } from "types";

const taskList = [
  {
    text: "nika dfsdf sdfsdf sdf sdf sd fsd fsdf sdf sdfsd  fwef sdfhdgfhdfgswdf sd gre gdfvjh rd fyjkgfdhdsdffg tdfg jdgfj strfdgj ",
    active: true,
    id: 1,
  },
  {
    text: "nini",
    active: true,
    id: 2,
  },
];

function App() {
  const [tasks, setTasks] = useState<task[]>(taskList);
  const [displayStatus, setDisplayStatus] = useState<string>("All");

  const actives = tasks.filter((task) => task.active);
  const completed = tasks.filter((task) => task.active);

  const array =
    displayStatus === "All"
      ? tasks
      : displayStatus === "actives"
      ? actives
      : completed;

  return (
    <AppComponent>
      <Header>
        <Title />
        <Moon />
      </Header>
      <NewTask />
      <List>
        {array.map((item) => (
          <>
            <Task item={item} key={item.id} />
            <Hr />
          </>
        ))}
        <Panel>
          <span>{tasks.length} items left</span>
          <Button active={false}>Clear Completed</Button>
        </Panel>
      </List>
      <Buttons>
        <Button active={displayStatus === "All"}>All</Button>
        <Button active={displayStatus === "actives"}>Active</Button>
        <Button active={displayStatus === "completed"}>Completed</Button>
      </Buttons>
    </AppComponent>
  );
}

const AppComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  background-image: url(${lightMobile});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 48px 24px 126px 24px;
  font-family: "Josefin Sans", sans-serif;
`;

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
