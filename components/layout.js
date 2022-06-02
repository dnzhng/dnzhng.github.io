import Head from "next/head";
import DarkModeToggle from "./darkModeToggle";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Daniel Zhang</title>
    </Head>
    { children }
    <DarkModeToggle />
  </>
);

export default Layout;
