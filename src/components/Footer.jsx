import React from "react";
import styled from "styled-components";

const Wrap = styled.footer`
  background: #f1f1f1;
  text-align: center;
  padding: 24px 15px;
  font-size: 15px;
  color: #001029;
  font-weight: 600;
`;

export default function Footer() {
  return (
    <Wrap>
      <div>© AI Grand ICT Research Center, 1st Lab.</div>
      <div>All rights reserved.</div>
    </Wrap>
  );
}