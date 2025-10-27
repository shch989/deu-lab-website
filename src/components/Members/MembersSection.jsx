import React from 'react'
import styled from "styled-components";
import defaultProfile from '../../assets/defaultProfile.jpg'

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

const TeamTitle = styled.h2`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
  font-weight: 800;
  font-size: clamp(18px, 2.1vw, 28px);
  margin: clamp(12px, 3.6vw, 62px) 0 6px;
  color: #0f2a4a;

  a {
    color: #0f2a4a;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const RoleTitle = styled.h3`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
  font-weight: 700;
  font-size: clamp(16px, 1.7vw, 22px);
  margin: clamp(25px, 2.5vw, 26px) 0 12px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: clamp(18px, 3vw, 40px) clamp(28px, 5vw, 80px);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 70px;
  align-items: center;

  @media (max-width: 420px) {
    grid-template-columns: 72px 1fr;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 148px;
  border-radius: 12px;
  background: ${({ $src }) =>
    $src
      ? `center/cover no-repeat url(${$src})`
      : `center/cover no-repeat url(${defaultProfile})`};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -22px;
    width: 110px;
    height: 48px;
    border-radius: 12px;
    background: #e6e8ec;
    z-index: -1;
  }
`;

const Info = styled.div`
  font-family: 'Noto Serif KR','Nanum Myeongjo','Times New Roman', serif;
`;

const Name = styled.div`
  font-weight: 800;
  color: #0f2a4a;
  font-size: clamp(18px, 1.9vw, 24px);
  margin-bottom: 4px;
`;

const Line = styled.div`
  line-height: 1.55;
  font-size: clamp(13px, 1.05vw, 16px);

  a {
    color: #1e3a8a;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid rgba(30,58,138,0.25);
  }
  a:hover { border-bottom-color: rgba(30,58,138,0.6); }
`;

const MembersSection = () => {
  const title = "Members"
const sections = [
  {
    team: "R&D Team",
    teamLink: "#",
    groups: [
      {
        role: "Research Professors",
        members: [
          {
            name: "Young Jin Kang",
            dept: "Dept. of Artificial Intelligence",
            phone: "+82-51-890-2776",
            email: "15073@deu.ac.kr",
            photo: "",
          },
          {
            name: "Ki Hwan Kim",
            dept: "Dept. of Artificial Intelligence",
            phone: "+82-51-890-2803",
            email: "15541@deu.ac.kr",
            photo: "",
          },
        ],
      },
      {
        role: "Researcher",
        members: [
          {
            name: "Da Sol Jeon",
            dept: "Industrial ICT Technology Engineering",
            phone: "",
            email: "15889@deu.ac.kr",
            photo: "",
          },
        ],
      },
    ],
  },
  {
    team: "Students",
    teamLink: "#",
    groups: [
      {
        role: "Ph.D. Students",
        members: [
          {
            name: "Ji Yeon Kim",
            dept: "Dept. of Artificial Intelligence",
            phone: "",
            email: "jnsp0907@naver.com",
            photo: "",
          },
        ],
      },
      {
        role: "Master Students",
        members: [
          {
            name: "Byeong Jun Gong",
            dept: "Dept. of Artificial Intelligence",
            phone: "",
            email: "qkatpkd@naver.com",
            photo: "",
          },
          {
            name: "In Ho Jeong",
            dept: "Dept. of Artificial Intelligence",
            phone: "",
            email: "jungh456@gmail.com",
            photo: "",
          },
          {
            name: "Seong Hyeon Jo",
            dept: "Dept. of Artificial Intelligence",
            phone: "",
            email: "thch989@naver.com",
            photo: "",
          },
          {
            name: "Min Soo Kim",
            dept: "Dept. of Artificial Intelligence",
            phone: "",
            email: "h_ellow_orlid@naver.com",
            photo: "",
          },
          {
            name: "Ji Hyeon Sin",
            dept: "Dept. of Artificial Intelligence",
            phone: "",
            email: "zh2326@naver.com",
            photo: "",
          },
        ],
      },
    ],
  },
];

  return (
    <Section>
      <Inner>
        <Heading>{title}</Heading>

        {sections.map((sec, sIdx) => (
          <div key={`sec-${sIdx}`}>
            {sec.team && (
              <TeamTitle>
                {sec.teamLink ? (
                  <a href={sec.teamLink}>{sec.team}</a>
                ) : (
                  sec.team
                )}
              </TeamTitle>
            )}

            {sec.groups?.map((grp, gIdx) => (
              <div key={`grp-${sIdx}-${gIdx}`}>
                {grp.role && <RoleTitle>{grp.role}</RoleTitle>}

                <Grid>
                  {grp.members?.map((m, i) => (
                    <Card key={`m-${sIdx}-${gIdx}-${i}`}>
                      <Avatar $src={m.photo} />
                      <Info>
                        <Name>{m.name}</Name>
                        {m.dept && <Line>{m.dept}</Line>}
                        {m.phone && <Line>{m.phone}</Line>}
                        {m.email && (
                          <Line>
                            <a href={`mailto:${m.email}`}>{m.email}</a>
                          </Line>
                        )}
                      </Info>
                    </Card>
                  ))}
                </Grid>
              </div>
            ))}
          </div>
        ))}
      </Inner>
    </Section>
  )
}

export default MembersSection