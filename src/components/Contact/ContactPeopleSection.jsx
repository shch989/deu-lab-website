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
  margin: 0 0 40px;
  color: #0f2a4a;
`;

const Card = styled.article`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
  & + & { margin-top: clamp(28px, 6vw, 56px); } /* 카드 간 간격 */
`;

const Role = styled.div`
  font-weight: 700;
  color: #0f2a4a;
  margin-bottom: 6px;
`;

const Name = styled.h2`
  margin: 0 0 10px;
  font-weight: 800;
  font-size: clamp(22px, 1.5vw, 36px);
  color: #0f2a4a;
`;

const Dept = styled.p`
  margin: 0 0 14px;
  line-height: 1.7;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
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

const TextLink = styled.a`
  color: #1e3a8a;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid rgba(30,58,138,0.25);
  &:hover { border-bottom-color: rgba(30,58,138,0.6); }
`;

const ContactPeopleSection = () => {
  const title = "Contact"
  const people = [
    {
      role: "Professor | Director",
      name: "Seok chan Jeong",
      dept: `Dept. of e–Business and\nGraduate School of Artificial Intelligence,\nDong–Eui University`,
      email: "scjeong@deu.ac.kr",
      phone: "+82-51-890-2760",
    },
    {
      role: "Research Professor",
      name: "Young jin Kang",
      dept: `Dept. of Artificial Intelligence\nDong–Eui University`,
      email: "15073@deu.ac.kr",
      phone: "+82-51-890-2776",
    },
  ]

  return (
    <Section>
      <Inner>
        <Heading>{title}</Heading>

        {people.map((p, idx) => (
          <Card key={idx}>
            <Role>{p.role}</Role>
            <Name>{p.name}</Name>
            <Dept>
              {p.dept.split("\n").map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}
            </Dept>

            <Row>
              <Icon>
                {/* mail */}
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
                </svg>
              </Icon>
              <TextLink href={`mailto:${p.email}`}>{p.email}</TextLink>
            </Row>

            <Row>
              <Icon>
                {/* phone */}
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.36 2.29.55 3.58.55a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.07 22 2 13.93 2 3a1 1 0 0 1 1-1h3.51a1 1 0 0 1 1 1c0 1.29.19 2.48.55 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
                </svg>
              </Icon>
              <TextLink href={`tel:${(p.phone || "").replace(/[^+\d]/g, "")}`}>
                {p.phone}
              </TextLink>
            </Row>
          </Card>
        ))}
      </Inner>
    </Section>
  )
}

export default ContactPeopleSection