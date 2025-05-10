import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/gege.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/danshiwojujue.jpg";
import MyImage from "../backupPic";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              自 我 介 绍 ×  <span className="purple"> 快 速 上 手 √ </span>
            </h1>
            <p className="home-about-body">
              我的本科专业是机器人工程，研究生专业是计算机科学与技术（钢铁侠bushi）… 🤷‍♂️

              <br/>
              <br/>
              是一名 <a className="purple" href="http://www.cvlab-ouc.cn/#/index">ouc_cvlab </a>的牛马研究生（叠甲：感谢王老师的栽培）
              <br/>
              <br/>
              常用的语言 有
              <i>
                <b className="purple"> C++, Java and Python. </b>
              </i>
              <br/>
              <br/>
              喜欢 <b className="purple">唱 跳 rap 篮球.</b>
              <br/>
              <br/>

              <i>
                <b className="purple"> Music！！！！</b>
                （ps: 往下滑）
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <MyImage
                   primarySrc='https://wsl-learn.obs.cn-east-317.qdrgznjszx.com/images-bed/gege.svg'
                   backupSrc = {myImg}
                   className="img-fluid"
                   alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
