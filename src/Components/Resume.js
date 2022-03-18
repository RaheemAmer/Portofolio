import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2022 - till present"}
            title={"Security Internee"}
            subTitle={"Huawei"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
        <br /> <br /> <br /> <br />
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Voluntary Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"Feb 2019 - Apr 2019"}
            title={"Team Leader"}
            subTitle={"IBM DN-A Ambassadors "}
            text={
              "IBM is partnering with iHub in spreading knowledge about trending technologies in the field of computer software. Trained professionals will be providing workshops, seminars and hands-on trainings assisted with lots of online content provided through IBM. This will be provided to the public in general all across Egypt."
            }
          />
          <ResumeItem
            year={"Sep 2018 - Feb 2019"}
            title={"Digital Nation Africa Ambassador"}
            subTitle={"IBM Studios"}
            text={
              "IBM is partnering with iHub in spreading knowledge about trending technologies in the field of computer software. Trained professionals will be providing workshops, seminars and hands-on trainings assisted with lots of online content provided through IBM. This will be provided to the public in general all across Egypt."
            }
          />
          <ResumeItem
            year={"Apr 2020 - Oct 2020"}
            title={"L&D member"}
            subTitle={
              "The Duke of Edinburgh's International Award FoundationThe Duke of Edinburgh's International Award Foundation "
            }
            text={
              "The Duke of Edinburgh’s International Award is a non-formal education and learning framework operating in more than 130 countries and territories around the world, through which young people’s achievements outside of academia are recognised and celebrated. "
            }
          />
          <ResumeItem
            year={"Apr 2020 - Oct 2020"}
            title={"L&D member"}
            subTitle={
              " The Duke of Edinburgh's International Award FoundationThe Duke of Edinburgh's International Award Foundation "
            }
            text={
              "The Duke of Edinburgh’s International Award is a non-formal education and learning framework operating in more than 130 countries and territories around the world, through which young people’s achievements outside of academia are recognised and celebrated. "
            }
          />
          <ResumeItem
            year={"Jun 2015 - Jan 2021"}
            title={"Co-Founder"}
            subTitle={"EMC team ( Empowering and Motivating Creatives ) "}
            text={
              "EMC team ( Empowering and Motivating Creatives ) (AKA M.A.C) Is a science team was made for young kids from 10:18 years old in Malawy /Minia /Egypt, for helping them to know the basics of scientific research and help them to join INTEL ISEF competition . "
            }
          />
          <ResumeItem
            year={"Sep 2019 - Mar 2020"}
            title={"Team LeaderTeam "}
            subTitle={"Bio Schoola"}
            text={
              "This Educational Team was made by Dr/Wael AbouElwafa for Empowering and increase the practical Teachnology skills of six chosen students and help them to increase the scientific research skill. I learned how to work in a team and how to motivate my teammates. "
            }
          />
          <ResumeItem
            year={"Oct 2016 - Jun 2017"}
            title={"Volunteer "}
            subTitle={"MCE team ( Minia Creative Engineers)"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"Mar 2019 - Feb 2020"}
            title={"Technical Team Member"}
            subTitle={"iHub: Innovation Hub"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
        {/* Educational */}
        <br />
        <br />
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"201 - 2022"}
            title={"Computer Science Degree"}
            subTitle={"Sussex University"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"A - Levels"}
            subTitle={"Church Hill High"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"High School Graduation"}
            subTitle={"ABC School"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
