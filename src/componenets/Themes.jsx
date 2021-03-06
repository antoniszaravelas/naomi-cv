import React from "react";
import styled from "styled-components";
import { mobileS } from "../responsive";
import { mobileM } from "../responsive";
import { tablet } from "../responsive";
import "./theme.css";

const Container = styled.div`
  overflow: hidden;
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgba(204, 24, 87, 1);
  border-radius: 8px;
  ${mobileS({ width: "40%", height: "20vh" })}
  ${mobileM({ width: "40%", height: "30vh" })}
${tablet({ width: "40%", height: "30vh" })}
`;

const Browser = styled.div`
  height: 20px;
  background-color: #252525;
  background: linear-gradient(
    36deg,
    rgba(57, 56, 59, 1) 0%,
    rgba(112, 29, 58, 1) 43%,
    rgba(204, 24, 87, 1) 84%,
    rgba(206, 42, 100, 1) 92%
  );
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`;
const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgb(243, 242, 242);
  margin: 3px;
`;
const Image = styled.img`
  width: 100%;
`;
const Themes = ({ img, link }) => {
  return (
    <Container>
      <Browser>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </Browser>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={img} className="theme-animation"></Image>
      </a>
    </Container>
  );
};

export default Themes;
