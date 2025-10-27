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

const YearTitle = styled.h2`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
  font-weight: 800;
  font-size: clamp(18px, 2.2vw, 28px);
  margin: clamp(22px, 4vw, 40px) 0 15px;
  color: #0f2a4a;
`;

const List = styled.ul`
  list-style: none;
  margin: 0 0 clamp(14px, 3vw, 28px);
  padding: 0;
`;

const Item = styled.li`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
  position: relative;
  padding-left: 26px;             /* 불릿-텍스트 간격 */
  line-height: 1.9;
  font-size: clamp(14px, 1.1vw, 18px);

  &::before {
    content: "■";
    position: absolute;
    left: 0;
    top: 0.12em;
    font-size: 0.85em;
    color: #1e3a8a;
  }

  & + & { margin-top: 10px; }     /* 항목 간 간격 */
`;

const PublicationsSection = () => {
  const title = "Publications"
  const dataByYear = {
    2025: [
      `Ji-Yeon Kim, Ki-Hwan Kim, Young-Jin Kang, Seok Chan Jeong, “Underwater Fish Length Detection Using the AI–Based Depth Estimation”`,
      `Ji-Yeon Kim, Ki-Hwan Kim, Young-Jin Kang, Seok Chan Jeong, “Study on a LightGBM–Based Model for Detecting Anomaly Operation of Delta Robot”`,
      `SangHyun Ha, Ki–Hwan Kim, Young–Jin Kang, Seok Chan Jeong, “Predicting Port Congestion at Busan Port Using Machine Learning Algorithms and Temporal Variables”`,
      `Byeong Jun Gong, Seok Chan Jeong, “온·오프라인 예매 매크로 사용 탐지를 위한 트리 기반 모델과 딥러닝 모델의 성능 비교 연구”`,
      `In-ho Jeong, Seok-chan Jeong, “객체 탐지 및 단안 깊이 추정을 활용한 객체 크기 추정 실험 설계”`,
      `Min-soo Kim, Ji–Yeon Kim, Ki–Hwan Kim, Young–Jin Kang, Seok Chan Jeong, “AI 윤리 문제와 국제 규제 동향 분석”`,
      `Ki–Hwan Kim, Young–Jin Kang, Ji–Yeon Kim, Seok Chan Jeong, “Beer–Lambert 법칙과 Snell’s Law를 활용한 IR 카메라 기반 육상 양식장 깊이 추정 연구”`,
      `Ji–Yeon Kim, Ki–Hwan Kim, Young–Jin Kang, Seok Chan Jeong, “Understanding Anomaly Detection in Industrial Robots: SHAP and ICE Analysis”`,
      `Byeong Jun Gong, Ji–Yeon Kim, Ki–Hwan Kim, Young–Jin Kang, Seok Chan Jeong, “A Lightweight Voice Phishing Detection Model Using KoBERT and MLP”`,
      `Seong–Hyeon Jo, Ji–Yeon Kim, Ki–Hwan Kim, Young–Jin Kang, Seok Chan Jeong, “Improving Operational Efficiency in Busan Port: A Predictive Approach to Truck Congestion”`,
      `Ji–Yeon Kim, Ki–Hwan Kim, Young–Jin Kang, Seok Chan Jeong, “3D Pose Estimation in Single–Camera Environments for Manufacturing Worker Ergonomic Assessment”`,
    ],
    2024: [
      `추후 추가 예정`
    ]
  }
  const years = Object.keys(dataByYear)
    .map(Number)
    .sort((a, b) => b - a)
    .filter((y) => Array.isArray(dataByYear[y]) && dataByYear[y].length > 0);

  return (
    <Section>
      <Inner>
        <Heading>{title}</Heading>

        {years.map((year) => (
          <div key={year}>
            <YearTitle>{year}</YearTitle>
            <List>
              {dataByYear[year].map((pub, i) => (
                <Item key={`${year}-${i}`}>{pub}</Item>
              ))}
            </List>
          </div>
        ))}
      </Inner>
    </Section>
  );
}

export default PublicationsSection