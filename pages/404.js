import Layout from "../components/layout";
import Link from "next/link";

const HomePage = () => (
  <Layout>
    <div className="bg"></div>
    <div className="grain">
      <h1>404</h1>
    </div>
    <div className="grain">
      <p>
        <Link href="/">
          Sorry :(
        </Link>
      </p>
    </div>
  </Layout>
);

export default HomePage;
