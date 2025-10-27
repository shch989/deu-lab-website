import React from 'react'
import styled from "styled-components";
import professor01 from '../../assets/professor01.jpg'

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
  margin-left: 0px;     /* 항상 왼쪽 20px */
  margin-right: auto;
  width: calc(100% - 20px);
  box-sizing: border-box;
`;

const Heading = styled.h1`
  font-family: 'Noto Serif KR', 'Nanum Myeongjo', 'Times New Roman', serif;
  font-weight: 800;
  font-size: clamp(24px, 3vw, 40px);
  line-height: 1.2;
  margin: 0 0 18px;
  color: #0f2a4a;
`;

const TopWrap = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: clamp(16px, 2.5vw, 36px);
  align-items: start;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Photo = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.06);
  background: #e9eef6;
`;

const NameBlock = styled.div`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
`;

const Role = styled.div`
  font-weight: 600;
  color: #0f2a4a;
  margin-bottom: 8px;
`;

const Name = styled.h2`
  font-weight: 800;
  font-size: clamp(22px, 2.6vw, 36px);
  margin: 0 0 10px;
  color: #0f2a4a;
`;

const Dept = styled.p`
  margin: 0 0 16px;
  line-height: 1.7;
`;

const ContactRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #1e3a8a;
  font-weight: 700;
  border-bottom: 1px solid rgba(30,58,138,0.25);
  &:hover { border-bottom-color: rgba(30,58,138,0.6); }
  svg { width: 18px; height: 18px; fill: #1e3a8a; }
`;

const SectionTitle = styled.h3`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
  font-weight: 800;
  font-size: clamp(18px, 2.2vw, 28px);
  margin: clamp(26px, 4vw, 48px) 0 12px;
  color: #0f2a4a;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  position: relative;
  padding-left: 22px;
  line-height: 1.9;
  &::before{
    content: "■";
    position: absolute;
    left: 0; top: 0.15em;
    font-size: 0.8em;
    color: #1e3a8a;
  }
  & + & { margin-top: 6px; }
`;

const ProfessorProfile = () => {
  const photo = professor01;
  const role = "Professor | Director";
  const name = "Seok chan Jeong";
  const dept = `Dept. of e–Business and\nGraduate School of Artificial Intelligence,\nDong–Eui University`;
  const email = "scjeong@deu.ac.kr";
  const phone = "+82-51-890-2760";

  const expertise = ["Artificial Intelligence, Big Data, IoT, Edge Computing"];
  const education = [
    "Bachelor, Pusan National University (Mechanical Design Major)",
    "Master & Ph.D., Osaka Prefecture University, Japan (Industrial Engineering Major)"
  ];
  const employment = [
    "Professor, Dept. of e–business, Dong–Eui Univ.",
    "Director, AI Grand ICT Research Center",
    "Director, Convergence of IT Devices Institute Busan",
    "California State Univ. / Missouri State Univ. Visiting Prof."
  ];
  const awards = [
    "IT Innovation Grand Prize, Commendation from the Minister of Knowledge Economy (Dec 5, 2008)",
    "Commendation of Mayor of Busan Metropolitan City for Information and Communication Merit (Dec 26, 2018)",
    "Order of Service Merit, Red Stripes, for Contributions to the Development of the Software Industry (Dec 2, 2019)",
    "Commendation for Outstanding Contributions to Digital Talent Development, Busan Metropolitan City (Dec 8, 2022)",
    "Commendation for Outstanding Cooperation in Busan’s Industry–Academia Collaboration, Busan Metropolitan City (Dec 19, 2022)",
    "Commendation for Outstanding Social Achievements, Busan Metropolitan City (Sep 26, 2024)"
  ];

  return (
    <Section>
      <Inner>
        <Heading>Professor</Heading>

        <TopWrap>
          <Photo src={photo} alt={`${name} portrait`} />
          <NameBlock>
            <Role>{role}</Role>
            <Name>{name}</Name>
            <Dept>
              {dept.split("\n").map((l, i) => (
                <span key={i}>{l}<br/></span>
              ))}
            </Dept>

            <ContactRow>
              <ContactItem href={`mailto:${email}`}>
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
                </svg>
                {email}
              </ContactItem>
              <ContactItem href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.36 2.29.55 3.58.55a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h3.51a1 1 0 0 1 1 1c0 1.29.19 2.48.55 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
                </svg>
                {phone}
              </ContactItem>
            </ContactRow>
          </NameBlock>
        </TopWrap>

        <SectionTitle>Areas of Expertise</SectionTitle>
        <List>{expertise.map((t, i) => <Item key={i}>{t}</Item>)}</List>

        <SectionTitle>Education</SectionTitle>
        <List>{education.map((t, i) => <Item key={i}>{t}</Item>)}</List>

        <SectionTitle>Employment</SectionTitle>
        <List>{employment.map((t, i) => <Item key={i}>{t}</Item>)}</List>

        <SectionTitle>Major Awards and Achievements</SectionTitle>
        <List>{awards.map((t, i) => <Item key={i}>{t}</Item>)}</List>
      </Inner>
    </Section>
  );
};

export default ProfessorProfile