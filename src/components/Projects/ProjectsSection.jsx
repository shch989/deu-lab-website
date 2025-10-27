import React from 'react'
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: clamp(24px, 6vw, 30px) 0;
  background: transparent;
  color: #1a2a44;
  display: flex;
  justify-content: flex-start;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin-left: 0px;
  margin-right: auto;
  width: calc(100% - 20px);
  box-sizing: border-box;
`;

const Heading = styled.h1`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
  font-weight: 800;
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.2;
  margin: 0 0 25px;
  color: #0f2a4a;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
  position: relative;
  padding-left: 26px;       /* 불릿-텍스트 간격 */
  line-height: 1.9;
  font-size: clamp(14px, 1.1vw, 18px);

  &::before{
    content: "■";
    position: absolute;
    left: 0; top: 0.12em;
    font-size: 0.85em;
    color: #1e3a8a;
  }

  & + & { margin-top: 10px; }  /* 항목 간 간격 */
`;


const ProjectsSection = () => {
  const title = "Projects"
  const items = [
    "24시간 유무인 생산체계를 위한 산업용 IoT 기반 경량제조시스템 기술 개발, 산업통상자원부, 22.04.01~24.12.31",
    "생육공정 지능화를 위한 산업용 IoT와 인공지능 기반 생육 운용 최적화 시스템 개발 및 실증, 산업통상자원부, 23.04.01~25.12.01",
    "AI 기반 항만 하역 작업 예측 및 항만 권역 혼잡도 가시화 솔루션 개발, 과학기술정보통신부, 25.01.01~25.12.31",
    "산업 IoT 다중 통신 프로토콜 기반의 스마트 데이터 제어장치 개발, 중소벤처기업부, 24.10.01~25.09.30",
    "AI 융합 선박 하역 작업 완료 시간 및 항만 권역 혼잡도 서비스, 정보통신산업진흥원, 24.07.01~26.12.31",
    "고등어 육상 완전 양식을 위한 지능화 생육공정 기술개발, 부산과학기술고등교육진흥원, 2025.06.12~2025.10.31",
  ]

  return (
    <Section>
      <Inner>
        <Heading>{title}</Heading>
        <List>
          {items.map((t, i) => (
            <Item key={i}>{t}</Item>
          ))}
        </List>
      </Inner>
    </Section>
  );
}

export default ProjectsSection