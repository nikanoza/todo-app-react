import styled from "styled-components";
import { Check, Cross } from "svg";
import { task } from "types";

const Task: React.FC<{ item: task }> = (props) => {
  return (
    <TaskComponent>
      <Checkbox>
        <Check />
      </Checkbox>
      <Text>{props.item.text}</Text>
      <Cross />
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

const Checkbox = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e4f1;
  border-radius: 50%;
`;

const Text = styled.p`
  width: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #494c6b;
  margin-right: 12px;
  margin-left: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Task;
