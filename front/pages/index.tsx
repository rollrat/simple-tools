import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Simple Tools</Navbar.Brand>
        {/* <div style={{ display: "flex" }}>
          <div style={{ padding: "0 16px 0 0" }}></div>
        </div> */}
      </Container>
    </Navbar>
  );
};

export default Home;
