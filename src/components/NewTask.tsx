import styled from "styled-components";
import { Check } from "svg";

const NewTask = () => {
  return (
    <Card>
      <Checkbox>
        <Check />
      </Checkbox>
      <Input placeholder="Create a new todo…" />
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  height: 48px;
  background-color: white;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-top: 40px;
  padding: 14px 20px;
  display: flex;
  column-gap: 12px;
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

const Input = styled.input`
  width: 275px;
  height: 20px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: -0.17px;
  outline: none;
  border: none;
`;

export default NewTask;
