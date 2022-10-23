import React, { useState } from "react";
import styled from "styled-components";
import { Check } from "svg";
import { StyledElementPropsType } from "types";

type task = {
  text: string;
  active: boolean;
  id: number;
};

const NewTask: React.FC<{
  addTask: (task: task) => void;
  tasks: task[];
  darkMode: boolean;
}> = (props) => {
  const [status, setStatus] = useState<boolean>(false);
  const [taskValue, setTaskValue] = useState<string>("");

  const taskChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setTaskValue(event.currentTarget.value);
  };

  const statusChangeHandler = () => {
    setStatus(!status);
  };

  const addTask = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && taskValue.length > 3) {
      const id =
        props.tasks.length > 0 ? props.tasks[props.tasks.length - 1].id + 1 : 1;
      const newTask: task = {
        text: taskValue,
        active: status,
        id,
      };
      props.addTask(newTask);
      setTaskValue("");
      setStatus(false);
    }
  };

  return (
    <Card darkMode={props.darkMode}>
      <Checkbox
        onClick={statusChangeHandler}
        status={status}
        darkMode={props.darkMode}
      >
        {status && <Check />}
      </Checkbox>
      <Input
        darkMode={props.darkMode}
        placeholder="Create a new todo…"
        type="text"
        value={taskValue}
        onChange={taskChangeHandler}
        onKeyDown={addTask}
      />
    </Card>
  );
};

const Card = styled.div(
  (props: StyledElementPropsType) => `
  width: 100%;
  height: 48px;
  background-color:${props.darkMode ? "#25273D" : "white"};
  box-shadow: ${
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
  };
  border-radius: 5px;
  margin-top: 40px;
  padding: 14px 20px;
  display: flex;
  column-gap: 12px;
  @media (min-width: 768px){
    max-width: 540px;
    height: 64px;
    align-items: center;
  }
`
);

type CheckboxTypes = {
  status: boolean;
  darkMode: boolean;
};

const Checkbox = styled.span(
  (props: CheckboxTypes) => `
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${
    props.status
      ? "none"
      : props.darkMode
      ? "1px solid #393A4B"
      : "1px solid #e3e4f1"
  };
  border-radius: 50%;
  background: ${
    props.status
      ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
      : "transparent"
  };
`
);

const Input = styled.input(
  (props: StyledElementPropsType) => `
  width: 275px;
  height: 20px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: -0.17px;
  color: ${props.darkMode ? "#767992" : "#9495A5"};
  outline: none;
  border: none;
  background-color: transparent;
  @media(min-width: 768px){
    font-size: 18px;
    line-height: 18px;
  }
`
);

export default NewTask;
