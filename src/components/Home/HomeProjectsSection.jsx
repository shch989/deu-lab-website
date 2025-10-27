import React from 'react'
import styled, { css } from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: clamp(24px, 2vw, 72px) 0; /* ✅ 좌우 패딩 제거 */
  background: transparent; /* ✅ 배경 투명 */
  color: #1a2a44;
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 유지 */
`;

const Inner = styled.div`
  max-width: 1100px;
  margin-left: 0px; /* ✅ 항상 왼쪽 20px 여백 유지 */
  margin-right: auto; /* ✅ 오른쪽은 자동 여백 */
  box-sizing: border-box;
  width: calc(100% - 20px);
`;

const Block = styled.div`
  & + & {
    margin-top: clamp(28px, 6vw, 64px);
  }
  ${({ spacious }) =>
    spacious &&
    css`
      margin-top: clamp(40px, 7vw, 80px);
    `}
`;

const Title = styled.h1`
  font-family: 'Noto Serif KR', 'Nanum Myeongjo', 'Times New Roman', serif;
  font-weight: 800;
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.2;
  margin: 0 0 18px;
  color: #0f2a4a;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  position: relative;
  padding-left: 30px;
  line-height: 1.9;
  font-size: clamp(14px, 1.1vw, 18px);

  &::before {
    content: "■";
    position: absolute;
    left: 0;
    top: 0.15em;
    font-size: 0.9em;
    color: #1e3a8a;
  }

  & + & {
    margin-top: 6px;
  }
`;

const HomeProjectsSection = () => {
    // 여기 내용만 추가 삭제하면 됨 
  const news = [
    "제10회 AI·SW 융합 해커톤 정보산업진흥원장상 장려상 수상",
    "2025년도 추계학술대회 우수논문상 수상",
    "기술이전 – AI모델 추론 정확화 알고리즘",
    "특허출원 – 강화학습 기반의 차량 운반선 선하적 관리를 위한 시스템 및 방법",
    "특허출원 – YOLO-NAS 기반의 수중 어류 체고 계장 자동 측정을 위한 장치 및 방법",
  ];
  // 여기 내용만 추가 삭제하면 됨 
  const projects = [
    "AI 기반 항만 하역 작업 예측 및 항만 권역 혼잡도 가시화 솔루션 개발",
    "24시간 유무인 생산체계를 위한 산업용 IoT 기반 경량제조시스템 기술 개발",
    "생육공정 지능화를 위한 산업용 IoT와 인공지능 기반 생육 운용 최적화 시스템 개발 및 실증",
    "혁신거점 인공지능 데이터 융합과제",
    "고등어 육상 완전 양식을 위한 지능형 생육공정 기술개발",
    "AI 기반 다중 해상도 비전 시스템을 활용한 불량 예측 및 제품 인식 기술 개발",
  ];

  return (
    <Section>
      <Inner>
        <Block>
          <Title>Recent news</Title>
          <List>
            {news.map((item, index) => (
              <Item key={index}>{item}</Item>
            ))}
          </List>
        </Block>

        <Block spacious>
          <Title>Ongoing Project</Title>
          <List>
            {projects.map((item, index) => (
              <Item key={index}>{item}</Item>
            ))}
          </List>
        </Block>
      </Inner>
    </Section>
  );
}

export default HomeProjectsSection