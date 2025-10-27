import React from 'react'
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: clamp(24px, 6vw, 72px) 0;
  background: transparent;
  color: #1a2a44;
  display: flex;
  justify-content: flex-start;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin-left: 0px;   /* 항상 왼쪽 20px 여백 유지 */
  margin-right: auto;
  width: calc(100% - 20px);
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-family: 'Noto Serif KR', 'Nanum Myeongjo', 'Times New Roman', serif;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin: 0 0 14px;
  font-size: clamp(22px, 2.6vw, 36px);
  color: #0f2a4a;
`;

const Sub = styled.h3`
  font-family: 'Noto Serif KR', 'Nanum Myeongjo', 'Times New Roman', serif;
  font-weight: 700;
  margin: clamp(32px, 4vw, 56px) 0 12px;
  font-size: clamp(18px, 2vw, 28px);
  color: #0f2a4a;
`;

const Address = styled.address`
  font-style: normal;
  line-height: 1.8;
  margin-bottom: 14px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 6px 0;
`;

const Icon = styled.span`
  display: inline-flex;
  width: 22px;
  min-width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  transform: translateY(2px);
  svg { width: 18px; height: 18px; fill: #1e3a8a; }
`;

const Text = styled.div`
  font-size: clamp(14px, 1.05vw, 18px);
  a { color: inherit; text-decoration: none; border-bottom: 1px solid rgba(30,58,138,0.25); }
  a:hover { border-bottom-color: rgba(30,58,138,0.6); }
`;

const MapWrap = styled.div`
  margin-top: 14px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0,0,0,0.06);
  background: #eef2f7;
  position: relative;
  width: 80%;
  padding-top: 40%;  /* 56.25% → 40%로 줄이면 지도 높이 약 30% 감소 */
  iframe, img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const HomeContactSection = () => {
  const visitTitle = "Visit Us";
  const infoTitle = "Info Services";
  const addressLines = [
    "[47340] 176, Eomgwang-ro, Busanjin-gu, Busan, Korea",
    "AI Grand ICT Research Center (Bldg. 20),",
    "Dong–Eui University Industry–Academic Cooperation Center 2F",
  ];
  const phone = "+82-51-890-2783";
  const email = "15889@deu.ac.kr";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104403.3890301432!2d128.88934094335934!3d35.14150690000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebb1e7cd71a5%3A0x5d6cf9c83ffdf0bb!2z64-Z7J2Y64yA7ZWZ6rWQIOyCsO2Vme2Ykeugpeq0gA!5e0!3m2!1sko!2skr!4v1761532634901!5m2!1sko!2skr";
  const mapFallbackImg = null;

  return (
    <Section>
      <Inner>
        <Title>{visitTitle}</Title>

        <Row>
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 0 5.5z"/>
            </svg>
          </Icon>
          <Address>
            {addressLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </Address>
        </Row>

        <MapWrap>
          {mapFallbackImg ? (
            <img src={mapFallbackImg} alt="Map" />
          ) : (
            <iframe
              src={mapEmbedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus map"
            />
          )}
        </MapWrap>

        <Sub>{infoTitle}</Sub>

        <Row>
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.36 2.29.55 3.58.55a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h3.51a1 1 0 0 1 1 1c0 1.29.19 2.48.55 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
            </svg>
          </Icon>
          <Text>
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
          </Text>
        </Row>

        <Row>
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
            </svg>
          </Icon>
          <Text>
            <a href={`mailto:${email}`}>{email}</a>
          </Text>
        </Row>
      </Inner>
    </Section>
  );
}

export default HomeContactSection