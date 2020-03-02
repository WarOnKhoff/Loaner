import React, { useContext } from "react";
import Footer from "../components/Footer";
import Background from "../components/Background";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";
import cx from "clsx";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const main = cx({
    main: true,
    main_ligthTheme: theme === "light"
  });
  return (
    <section className={main}>
      <Header />
      <div className="underconstruction">
        <p>This page is under construction.</p>
        <p>We apologize for this inconvenience.</p>
      </div>
      <Footer />
      <Background />
    </section>
  );
};

export default Home;
