import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Wrap = styled.nav`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 16px;
  gap: 16px;
  background: #001029;
  color: ${({ theme }) => theme.colors.white};     /* ✅ 흰 글씨 기본값 */
`;

const LogoBox = styled.div`
  width: 100%;
  height: 80px;
  margin: 50px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

const List = styled.ul`
  display: grid;
  gap: 6px;                /* 필요시 0~6px로 조정 */
  align-content: start;    /* 🔥 남는 세로 공간을 위로 몰기 */
  grid-auto-rows: min-content; /* 🔥 각 행을 내용 높이에 맞춤 */
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 0px;
`;

const SLink = styled(NavLink)`
  display: block;
  padding: 10px 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};    /* ✅ 흰색 글씨 */
  text-decoration: none;
  border: 1px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.1);         /* ✅ hover 시 밝은 배경 */
  }

  &.active {
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 2px;
    font-weight: bold;
  }
`;

export default function Sidebar() {
  const menus = [
    { path: "/", label: "Home" },
    { path: "/professor", label: "Professor" },
    { path: "/members", label: "Members" },
    { path: "/projects", label: "Projects" },
    { path: "/publications", label: "Publications" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <Wrap>
      <div>
        <LogoBox>
          <LogoImage src={logo}/>
        </LogoBox>
      </div>
      <List>
        {menus.map((m) => (
          <Item key={m.path}>
            <SLink to={m.path}>{m.label}</SLink>
          </Item>
        ))}
      </List>
      <div />
    </Wrap>
  );
}