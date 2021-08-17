import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Fragment, ReactElement, ReactFragment } from "react";

export default function Layout({
  children = {},
  footer = false,
}): ReactElement<ReactFragment> {
  return (
    <Fragment>
      <NavBar />
      {children}
      {footer ? <Footer /> : <></>}
    </Fragment>
  );
}
