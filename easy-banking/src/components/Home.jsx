import React,{useState} from 'react'
import Wrapper from '../assets/wrappers/Home'
import LogoComponent from './LogoComponent';
function Home() {
const [open ,setOpen] = useState(false);
  return (
    <Wrapper>
      <header>
        <img src="../logo.svg" alt="logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </nav>
        <button>Request Invite</button>
        <img open={open} onClick={()=> setOpen(!open)} className="hamburger" src="../images/icon-hamburger.svg" alt="" />
      </header>

      <section className="banner">
        <div className="hero-content">
          <h1>
            Next generation <br />
            digital banking
          </h1>
          <p>
            Take your financial life online. Your Easybank account <br />
            will be a one-stop-shop for spending, saving, <br />
            budgeting, investing, and much more.
          </p>
          <button>Request Invite</button>
        </div>
        <img
          className="banner-img"
          src="../images/bg-intro-desktop.svg"
          alt="desk"
        />
        <img
          className="banner-mobile"
          src="../images/bg-intro-mobile.svg"
          alt="mobile"
        />
      </section>

      <img className="mockup" src="../images/image-mockups.png" alt="mockups" />

      <aside className="choose-section">
        <h2>
          Why choose <span>Easybank?</span>
        </h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br />
          Control your finances like never before.
        </p>
        <div className="choose-category">
          <div className="choose-card">
            <img src="../images/icon-online.svg" alt="" />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile <br />
              applications allow you to keep <br />
              track of your finances wherever you <br />
              are in the world.
            </p>
          </div>
          <div className="choose-card">
            <img src="../images/icon-budgeting.svg" alt="" />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money <br />
              goes each month. Receive <br />
              notifications when you’re close to <br />
              hitting your limits.
            </p>
          </div>
          <div className="choose-card">
            <img src="../images/icon-onboarding.svg" alt="" />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your <br />
              account in minutes online and start <br />
              taking control of your finances <br />
              right away.
            </p>
          </div>
          <div className="choose-card">
            <img src="../images/icon-api.svg" alt="" />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, <br />
              pension, and much more from one <br />
              account. Tracking your money has <br />
              never been easier.
            </p>
          </div>
        </div>
      </aside>

      <section className="article-section">
        <h1>Latest Articles</h1>
        <div className="cards">
          <div className="article-card">
            <img src="../images/image-currency.jpg" alt="" />
            <h4>By Claire Robinson</h4>
            <h2>
              Receive money in any <br />
              currency with no fees
            </h2>
            <p>
              The world is getting smaller and <br />
              we’re becoming more mobile. So <br />
              why should you be forced to only <br />
              receive money in a single …
            </p>
          </div>
          <div className="article-card">
            <img src="../images/image-restaurant.jpg" alt="" />
            <h4>By Wilson Hutton</h4>
            <h2>
              Treat yourself without <br />
              worrying about money
            </h2>
            <p>
              Our simple budgeting feature <br />
              allows you to separate out your <br />
              spending and set realistic limits <br />
              each month. That means you …
            </p>
          </div>
          <div className="article-card">
            <img src="../images/image-plane.jpg" alt="" />
            <h4>By Wilson Hutton</h4>
            <h2>
              Take your Easybank card <br />
              wherever you go
            </h2>
            <p>
              We want you to enjoy your travels. <br />
              This is why we don’t charge any <br />
              fees on purchases while you’re <br />
              abroad. We’ll even show you …
            </p>
          </div>
          <div className="article-card">
            <img src="../images/image-confetti.jpg" alt="" />
            <h4>By Claire Robinson</h4>
            <h2>
              Our invite-only Beta <br />
              accounts are now live!
            </h2>
            <p>
              After a lot of hard work by the <br />
              whole team, we’re excited to launch <br />
              our closed beta. It’s easy to request <br />
              an invite through the site ...
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="logo-social">
          <LogoComponent className="logo" color={"white"} />
          <div className="social">
            <img src="../images/icon-facebook.svg" alt="facebook icon" />
            <img src="../images/icon-youtube.svg" alt="youtube icon" />
            <img src="../images/icon-twitter.svg" alt="twitter icon" />
            <img src="../images/icon-pinterest.svg" alt="pinterest icon" />
            <img src="../images/icon-instagram.svg" alt="instagram icon" />
          </div>
        </div>
        <div className="footer-nav">
          <nav>
            <a href="#">About Us</a> <br />
            <a href="#">Contact</a> <br />
            <a href="#">Blog</a>
          </nav>
        </div>
        <div className="footer-nav navtwo">
          <nav>
            <a href="#">Careers</a> <br />
            <a href="#">Support</a> <br />
            <a href="#">Privacy Policy</a>
          </nav>
        </div>
        <div className="button-rights">
          <button>Request Invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Home