import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  background: #f1f1f1;
  padding: 80px 165px;
  width: 100%;
  box-sizing: border-box;

  /* 선택: 최소 높이 */
  min-height: 1500px;
`;

export default function WhitePanel({ children }) {
  return <Panel>{children}</Panel>;
}