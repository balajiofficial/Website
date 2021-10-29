import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Fragment, useState } from "react";

export default function Layout({ children }) {
  const [fixEnd, setFixEnd] = useState(false);

  const themeFunc = (theme: string) => {};

  const refreshFooterPosition = () => {
    const footer =
      document.getElementById("__next").clientHeight +
        document.getElementById("footer").clientHeight <=
      window.innerHeight;
    setFixEnd(footer);
  };

  return (
    <Fragment>
      <div
        onMouseMove={() => {
          refreshFooterPosition();
        }}
        onClick={() => {
          refreshFooterPosition();
        }}
      >
        <Navbar themeFunc={themeFunc} />
        {children}
        <Footer fixEnd={fixEnd} />
      </div>
    </Fragment>
  );
}
