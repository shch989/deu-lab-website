import React from "react";
import styled from "styled-components";
import headerImg from "../assets/header.jpg";

const Hero = styled.div`
  width: 100%;
  height: 500px;
  background: url(${headerImg}) center center / cover no-repeat; /* ✅ 핵심 */
  box-shadow: inset 0 -40px 80px rgba(0, 0, 0, 0.25);
`;

export default function HeaderHero() {
  return <Hero />;
}
