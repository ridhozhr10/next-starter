import React from "react";
import { NextPage, NextPageContext } from "next";
import { Container, Row, Col, Button } from "reactstrap";
import { style } from "typestyle";

const itemClass = style({ border: "1px solid blue" });

type HomeProps = {
  userAgent: string;
};

const Home: NextPage<HomeProps> = ({ userAgent }: HomeProps) => (
  <Container>
    <Row xs="2">
      <Col className={itemClass}>
        <h1>
          hello world - user agent:
          {userAgent}
        </h1>
      </Col>
      <Col>
        <Button outline color="primary">
          hello
        </Button>
      </Col>
    </Row>
  </Container>
);

Home.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers["user-agent"] || "" : "";
  return { userAgent };
};

export default Home;
