import React from "react";
import styled from "styled-components";

export default function Button({
  name,
  icon,
  onClick,
  bg,
  buttonPad,
  color,
  borderRadius,
}) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: buttonPad,
        borderRadius: borderRadius,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;
