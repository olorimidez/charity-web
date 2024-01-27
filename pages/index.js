import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Container, Card } from "react-bootstrap";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Charity Website</title>
        <meta name="description" content="Charity platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        fluid
        style={{ minHeight: "80vh", padding: "0", color: "black" }}
      >
        <HeroSection />
      </Container>
    </main>
  );
}
