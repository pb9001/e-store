import Navbar from "../components/Navbar";
import hero from "../assets/hero.png";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="hero-text">

          <p className="tagline">WELCOME TO E-STORE</p>

          <h1>Your Trusted Store for Electronic Gadgets</h1>

          <p className="hero-description">
            Discover quality electronic accessories including keyboards,
            mice and monitors at affordable prices. Shop with confidence
            and enjoy a simple, secure and convenient shopping experience.
          </p>

        </div>

        <div className="hero-image">
          <img src={hero} alt="E-Store" />
        </div>

      </section>

      <section className="why-us">

        <h2>Why Choose E-Store?</h2>

        <div className="cards">

          <div className="card">
            <h3>Quality Products</h3>

            <p>
              Every product is carefully selected to ensure
              excellent quality, durability and reliable performance.
            </p>
          </div>

          <div className="card">
            <h3>Affordable Pricing</h3>

            <p>
              We provide premium electronic accessories
              at prices suitable for every customer.
            </p>
          </div>

          <div className="card">
            <h3>Quick Support</h3>

            <p>
              Our support team is always ready to assist
              you whenever you need help.
            </p>
          </div>

        </div>

      </section>

      <section className="highlights">

        <div className="highlight-box">
          <h3>100+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="highlight-box">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>

      </section>

      <section className="about-store">

        <h2>About E-Store</h2>

        <p>
          E-Store is an online shopping platform dedicated to
          providing quality electronic accessories with a smooth,
          reliable and user-friendly shopping experience. Our goal
          is to deliver trusted products, affordable prices and
          excellent customer service.
        </p>

      </section>

      <section className="cta">

        <h2>Start Shopping Today</h2>

        <p>
          Browse our collection and discover the latest
          electronic gadgets for your workspace.
        </p>

      </section>

    </>
  );
}

export default Home;