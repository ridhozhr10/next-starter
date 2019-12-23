import React from "react";
import { NextPage, NextPageContext } from "next";
import { Container, Row, Col, Button } from "reactstrap";
import { style } from "typestyle";
import { Layout } from "../component/layout";

const itemClass = style({ border: "1px solid blue" });

type HomeProps = {
  userAgent: string;
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { userAgent } = props;
  return (
    <Layout title="Homepage">
      <Container>
        <Row xs="2">
          <Col className={itemClass}>
            <p>
              hello world - user agent:
              {userAgent}
            </p>
          </Col>
          <Col>
            <img src="/img/logo.svg" alt="logo" />
            <Button outline color="primary">
              hello
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

Home.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers["user-agent"] || "" : "";
  return { userAgent };
};

export default Home;
