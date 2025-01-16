'use client'

import Header from "../../components/Header";
import Title from "../../components/Title";
import Grid from "../../components/Grid";
import Details from "../../components/Details";
import Func from "../../components/Func";
import FromApp from "../../components/FromApp";
import Footer from "../../components/Footer";

import styles from "./page.module.css";
import './../../styles/font.css';

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <main>
          <Title />
          <Grid />
          <Details />
          <Func />
          <FromApp />
        </main>
      </div>

      <Footer />
    </>
  );
}
