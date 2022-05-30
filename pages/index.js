import Layout from "../components/layout";

const HomePage = () => (
  <Layout>
    <div className="bg"></div>
    <div className="grain">
      <h1>DANIEL ZHANG</h1>
    </div>
    <div className="grain">
      <ul>
        <li><a href="https://instagram.com/danzhanginthemoonlight"><i aria-hidden className="fab fa-instagram"></i></a></li>
        <li><a href="https://twitter.com/dnzhng"><i aria-hidden className="fab fa-twitter"></i></a></li>
        <li><a href="https://linkedin.com/in/danielyzhang"><i aria-hidden className="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/dnzhng"><i aria-hidden className="fab fa-github"></i></a></li>
        <li><a href="https://phlog.co"><i aria-hidden className="fas fa-signature"></i></a></li>
        <li><a href="mailto:dan@dnzhng.com"><i aria-hidden className="far fa-envelope"></i></a></li>
      </ul>
    </div>
  </Layout>
);

export default HomePage;
