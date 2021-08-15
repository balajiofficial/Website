import NavBar from "./navbar";
import Footer from "./footer";
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
