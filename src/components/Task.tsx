import styled from "styled-components";
import { Check } from "svg";
import { task } from "types";

const Task: React.FC<{ item: task}> = (props) => {
    return (
      <TaskComponent>
        <Checkbox>
          <Check />
        </Checkbox>
      </TaskComponent>
    );
};

const TaskComponent = styled.div`
  width: 100%;
  display: flex;
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

export default Task;
