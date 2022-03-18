import React from "react";
import styled from "styled-components";
import { saveAs } from "file-saver";

function PrimaryButton({ title }) {
  const saveFile = () => {
    saveAs(
      " Access-Control-Allow-Origin :https://drive.google.com/file/d/14Ov2q9z-DqO68_raIIWF1WrIxcLw_O9-/view?usp=sharing",
      "Mohamed-nabil-cv.pdf"
    );
  };
  return (
    <PrimaryButtonStyled>
      <button onClick={saveFile}>download</button>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  button {
    all: unset;
    cursor: pointer;
  }

  button:focus {
    outline: blue 5px auto;
  }
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default PrimaryButton;
