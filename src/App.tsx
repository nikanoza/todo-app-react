import { lightMobile } from "assets";
import { NewTask, Task } from "components";
import { useState } from "react";
import styled from "styled-components";
import { Moon, Title } from "svg";
import { task } from "types";

const taskList = [
  {
    text: "nika",
    status: true,
    id: 1,
  },
  {
    text: "nini",
    status: true,
    id: 2,
  },
];

function App() {
  const [tasks, setTasks] = useState<task[]>(taskList);

  return (
    <AppComponent>
      <Header>
        <Title />
        <Moon />
      </Header>
      <NewTask />
      <List>
        {tasks.map((item) => (
          <Task item={item} key={item.id} />
        ))}
      </List>
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
  padding: 16px 20px 20px 20px;
  margin-top: 16px;
  background-color: white;
`;

export default App;
