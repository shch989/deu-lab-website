import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import HeaderHero from "./HeaderHero";
import WhitePanel from "./WhitePanel";  // ✅ 추가
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Shell = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.sizes.sidebar} 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
  }
`;

const SidebarArea = styled.aside`
  grid-area: sidebar;
  position: sticky;
  top: 0;
  height: 100vh;
  border-right: none;
  background: ${({ theme }) => theme.colors.white};
`;

const HeaderArea = styled.header`
  grid-area: header;
`;

const MainArea = styled.main`
  grid-area: main;
  width: 100%;
  box-sizing: border-box;
`;

export default function Layout() {
  return (
    <Shell>
      <SidebarArea><Sidebar /></SidebarArea>
      <HeaderArea><HeaderHero /></HeaderArea>
      <MainArea>
        <WhitePanel>
          <Outlet /> {/* ✅ 모든 페이지 콘텐츠가 자동으로 패널 안으로 */}
        </WhitePanel>
        <Footer/>
      </MainArea>
    </Shell>
  );
}
