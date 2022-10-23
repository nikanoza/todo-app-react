import styled from "styled-components";

const Cross: React.FC<{
  onClick: (id: number) => void;
  id: number;
}> = (props) => {
  return (
    <Svg onClick={() => props.onClick(props.id)}>
      <path
        fill="#494C6B"
        fillRule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </Svg>
  );
};

export default Cross;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 18px;
  height: 18px;
  margin-left: auto;
  cursor: pointer;
`;
