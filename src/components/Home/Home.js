import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/danshiwojujue.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import MyImage from "../backupPic";
import laptopImg from "../../Assets/jljy.png";



function Home() {
  return (
      <section>
        <Particle/>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{paddingBottom: 15}} className="heading">
                  大家好!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                </h1>

                <h1 className="heading-name">
                  我是
                  <strong className="main-name"> 机智 的 赛尔 </strong>
                </h1>

                <div style={{padding: 50, textAlign: "left"}}>
                  <Type/>
                </div>
              </Col>

              <Col md={5} style={{paddingBottom: 20}}>
                <MyImage
                    primarySrc='https://wsl-learn.obs.cn-east-317.qdrgznjszx.com/images-bed/danshiwojujue.jpg'
                    backupSrc = {homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{maxHeight: "450px"}}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2/>
      </section>
  );
}

export default Home;
