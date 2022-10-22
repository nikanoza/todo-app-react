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
}> = (props) => {
  return (
    <TaskComponent>
      <Checkbox
        onClick={() => {
          props.updateTaskStatus(props.item.id);
        }}
        status={props.item.active}
      >
        <Check />
      </Checkbox>
      <Text status={props.item.active}>{props.item.text}</Text>
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
`;

type CheckboxTypes = {
  status: boolean;
};

const Checkbox = styled.span(
  (props: CheckboxTypes) => `
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props.status ? "none" : "1px solid #e3e4f1"};
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
  color: ${props.status ? "#D1D2DA" : "#494c6b"};
  margin-right: 12px;
  margin-left: 12px;
  text-decoration: ${props.status ? "line-through" : "none"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
);

export default Task;
