import styled from "styled-components";

const breakpoints = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

 const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};

const wrapper = styled.main`
  height: 310vh;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--White);
    height: 3.2rem;
    padding-left: 56px;

    position: absolute;

    width: 100vw;
    padding-right: 220px;

    nav {
      a {
        margin: 1rem;
        text-decoration: none;
        color: var(--Grayish-Blue);
      }
      a:hover {
        border-bottom: 3px solid var(--Bright-Cyan);
      }
    }
    button {
      padding: 0.3rem;
      border-radius: 20px;
      padding-left: 1.3rem;
      padding-right: 1.3rem;
      background-image: linear-gradient(
        to right,
        var(--Lime-Green),
        var(--Bright-Cyan)
      );
      color: var(--White);
      cursor: pointer;
      border: none;
    }
    .hamburger {
      display: none;
    }
  }
  .banner {
    display: flex;
    padding-left: 56px;
    .hero-content {
      margin-top: 150px;
      h1 {
        color: var(--Dark-Blue);
        font-weight: 400;
        font-size: 200%;
        margin-bottom: 30px;
      }
      p {
        color: var(--Grayish-Blue);
        margin-bottom: 30px;
        line-height: 25px;
      }
      button {
        padding: 0.3rem;
        border-radius: 20px;
        padding-left: 1.3rem;
        padding-right: 1.3rem;
        background-image: linear-gradient(
          to right,
          var(--Lime-Green),
          var(--Bright-Cyan)
        );
        color: var(--White);
        cursor: pointer;
        border: none;
      }
    }
    .banner-img {
      max-width: 800px;
      margin-top: -100px;
      margin-left: 500px;
      position: absolute;
      z-index: -99;
    }
    .banner-mobile {
      display: none;
    }
  }
  .mockup {
    right: -90px;
    margin-top: -480px;
    margin-left: 510px;
    position: relative;
    z-index: -1;
  }
  .choose-section {
    background-color: var(--Light-Grayish-Blue);
    height: 460px;
    margin-top: -150px;
    position: absolute;
    width: 100vw;
    overflow-x: visible;
    z-index: -3;
    padding-left: 56px;
    h2 {
      padding-top: 50px;
      margin-bottom: 20px;
      font-weight: 400;
      opacity: 0.7;
    }
    p {
      color: var(--Grayish-Blue);
    }
    .choose-category {
      display: flex;
      gap: 15px;
      margin-top: 50px;
      h3 {
        font-weight: 400;
        color: var(--Dark-Blue);
        margin-bottom: 30px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  .article-section {
    margin-top: 380px;
    margin-left: 56px;
    .cards {
      display: flex;
      gap: 20px;
    }
    h1 {
      margin-bottom: 30px;
      font-weight: 400;
      color: var(--Dark-Blue);
    }
    .article-card {
      //border: 1px solid black;
      width: 250px;
      background-color: var(--White);
      display: flex;
      flex-direction: column;
      padding-bottom: 15px;
      img {
        width: 250px;
        height: 200px;
        border-radius: 5px;
        margin-bottom: 20px;
      }
      h4 {
        font-size: 10px;
        padding-left: 30px;
        margin-bottom: 15px;
        color: var(--Grayish-Blue);
      }
      h2 {
        font-size: 15px;
        padding-left: 30px;
        margin-bottom: 15px;
        color: var(--Dark-Blue);
      }
      h2:hover {
        color: var(--Bright-Cyan);
        cursor: pointer;
      }
      p {
        font-size: 12px;
        padding-left: 30px;
        line-height: 18px;
        color: var(--Grayish-Blue);
      }
    }
  }
  footer {
    background-color: var(--Dark-Blue);
    margin-top: 50px;
    padding-left: 56px;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 25px;
    .logo-social {
      .logo {
        fill: red;
        //fill: var(--White);
        //margin-bottom: 30px;
      }
      .social {
        margin-top: 30px;
        img {
          margin-right: 10px;
          cursor: pointer;

          img:hover {
            //fill: var(--Bright-Cyan);
          }
        }
      }
    }
    .footer-nav {
      nav {
        a {
          text-decoration: none;
          color: var(--Grayish-Blue);
          font-size: 12px;
        }
        a:hover {
          color: var(--Lime-Green);
        }
      }
    }
    .button-rights {
      display: flex;
      flex-direction: column;
      button {
        padding: 0.3rem;
        border-radius: 20px;
        padding-left: 1.3rem;
        padding-right: 1.3rem;
        background-image: linear-gradient(
          to right,
          var(--Lime-Green),
          var(--Bright-Cyan)
        );
        color: var(--White);
        cursor: pointer;
        border: none;
        align-self: flex-end;
        margin-right: 160px;
        margin-bottom: 5px;
        width: 150px;
      }
      p {
        color: var(--Grayish-Blue);
        margin-right: 160px;
        margin-top: 15px;
        font-size: 13px;
      }
    }
  }

  @media ${devices.xs} {
    header {
      margin-left: -20px;
      z-index: 9000;
      nav {
        display: none;
      }
      button {
        display: none;
      }
      .hamburger {
        display: block;
        margin-left: 140px;
        cursor: pointer;
      }
    }
    .banner {
      .hero-content {
        margin-top: 380px;
        margin-bottom: 220px;
        margin-left: -20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          margin-left: -45px;
        }
        p {
          font-size: 13px;
        }
        button {
        }
      }
      .banner-img {
        display: none;
      }
      .banner-mobile {
        display: block;
        margin-top: 50px;
        margin-left: -355px;
        width: 383px;
        height: 350px;
      }
    }
    .mockup {
      margin-left: -60px;
      width: 310px;
      height: 320px;
      top: -580px;
      z-index: 1;
    }
    .choose-section {
      margin-left: -20px;
      height: 1150px;
      width: 395px;
      h2 {
      }
      p {
        font-size: 15px;
        text-align: center;
      }
      .choose-category {
        display: flex;
        flex-direction: column;
        .choose-card {
          padding-right: 30px;
          img {
            margin-left: 125px;
            margin-bottom: 10px;
          }
          h3 {
            text-align: center;
          }
          //font-size: ;
          p {
            font-size: 14px;
            margin-bottom: 10px;
          }
        }
      }
    }
    .article-section {
      margin-top: 1050px;

      .cards {
        display: flex;
        flex-direction: column;
      }
      .article-card {
      }
    }
    footer {
      display: flex;
      flex-direction: column;
      height: 380px;
      padding-left: 100px;
      .logo {
      }
      .social {
        margin-bottom: 20px;
      }
      .footer-nav {
       
        padding-left: 40px;
      }
      .navtwo{
        margin-top: -15px;
      }
      .button-rights {
       
        button {
         
          margin-right: 120px;
        }
        p {
          margin-bottom: 30px;
          width: 100%;
        }
      }
    }
  }
`;

export default wrapper;
