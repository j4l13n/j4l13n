import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Julien</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/**
       * Header side
       */}
      <Header />
      {/**
       * About me
       */}
      <div style={{ height: "500px" }}>
        <div className="about-me-title">
          Title
        </div>
        <div className="about-me-body">
          <div className="about-me-body-left">
            Left
          </div>
          <div className="about-me-body-right">
            Right
          </div>
        </div>
      </div>
      {/**
       * Skill
       */}
      <div style={{ height: "500px" }}>Skill</div>
            {/**
       * Footer
       */}
      <div style={{ height: "500px" }}>Footer</div>
    </div>
  );
};

export default Home;
