import styled from "styled-components";
import { Check, Cross } from "svg";

type task = {
  text: string;
  active: boolean;
  id: number;
};

const Task: React.FC<{
  item: task;
  updateTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
  darkMode: boolean;
}> = (props) => {
  return (
    <TaskComponent>
      <Checkbox
        darkMode={props.darkMode}
        onClick={() => {
          props.updateTaskStatus(props.item.id);
        }}
        status={props.item.active}
      >
        {props.item.active && <Check />}
      </Checkbox>
      <Text status={props.item.active} darkMode={props.darkMode}>
        {props.item.text}
      </Text>
      <Cross onClick={props.deleteTask} id={props.item.id} />
    </TaskComponent>
  );
};

const TaskComponent = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 16px 20px 20px 20px;
  @media (min-width: 768px) {
    height: 64px;
  }
`;

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

const Text = styled.p(
  (props: CheckboxTypes) => `
  width: 240px;
  color: ${
    props.status && props.darkMode
      ? "#494c6b"
      : props.status && !props.darkMode
      ? "#D1D2DA"
      : props.darkMode
      ? "#C8CBE7"
      : "#494C6B"
  };
  margin-right: 12px;
  margin-left: 12px;
  text-decoration: ${props.status ? "line-through" : "none"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media(min-width: 768px){
    font-size: 18px;
    line-height: 18px;
  }
`
);

export default Task;
