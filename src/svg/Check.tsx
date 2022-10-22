import styled from "styled-components";

const Check = () => {
  return (
    <Svg>
      <path
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </Svg>
  );
};

export default Check;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 11px;
  height: 9px;
`;
