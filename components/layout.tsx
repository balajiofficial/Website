import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, footer = false }): JSX.Element {
  return (
    <>
      <NavBar />
      {children}
      {footer ? <Footer /> : <></>}
    </>
  );
}
