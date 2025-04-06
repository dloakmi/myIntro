import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/dio.png";
import tdgs from "../../Assets/Projects/3dgs.png";
import musicplayer from "../../Assets/Projects/musicplayer.png";
import choujiang from "../../Assets/Projects/choujiang.png";
import suicide from "../../Assets/Projects/dio.png";
import zuopinji from "../../Assets/Projects/zuopinji.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          我 最 近 的 <strong className="purple">个 人 项 目 </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={choujiang}
              isBlog={false}
              title="抽奖平台 v1"
              description="介 绍 ：大 营 销 平 台 是 各 个 互 联 网 公 司 用 于 拉 新 、促 活 、留 存 、转 化 的 重 要 手 段 ，任 何 一 个 互 联 网 公 司 都 有 这 样 的 平 台 ，每 个 公 司 都 能 找 到 对 口 的 业 务 部 门。"
              ghLink="https://github.com/dloakmi/big-market"
              demoLink="http://117.72.127.86:3000/?strategyId=100006"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zuopinji}
              isBlog={false}
              title="个人介绍+作品集"
              description="基于作者Soumyajit4419开源的作品集项目https://github.com/soumyajit4419/Portfolio，进行二次加工，添加了音乐播放器以及新的动态效果"
              ghLink="https://github.com/dloakmi/myIntro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicplayer}
              isBlog={false}
              title="MusicPlayer"
              description="基于react写的一个音乐播放器"
              ghLink="https://github.com/dloakmi/musicPlayer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={tdgs}
                isBlog={false}
                title="三维重建！"
                description="我的研究生研究方向，代码稍后即来"
                // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="尽请期待"
              description="尽请期待"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="尽请期待"
              description="尽请期待"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
