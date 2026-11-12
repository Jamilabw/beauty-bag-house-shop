import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Contact Now </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="footer-container">

            <div className="footer-about">
              <h3>Beauty Bag House</h3>
              <p>Deals with bags with aesthetic values</p>
            </div>

            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>+9112345678978</p>
              <p>dummy@noone</p>
            </div>

          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container bottom-sec">
              <p>
                @{new Date().getFullYear()} BeautyBagHouse. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY  | TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .footer-container{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between
  }

  .footer-about, .footer-subscribe, .footer-social, .footer-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-subscribe form{
    display: flex;
    flex-direction: column;
    
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 4rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }

    .bottom-sec{
        display: flex;
        justify-content: space-around;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      padding: 2rem;
      margin: auto;
      transform: translateY(50%);
      text-align: center;
      
      .grid div:last-child {
        justify-self: center;
      }
    }

    .footer-container{
      width: 80%;
      display: flex;
      flex-direction: column;
      margin: 4rem auto;
      align-items: baseline;
      gap: 4rem;
    }

    .footer-about, .footer-subscribe, .footer-social, .footer-contact {
      display: flex;
      flex-direction: column;
      align-items: baseline;
       
      h3{
        margin-bottom: 1rem;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4rem;

      .bottom-sec{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;

export default Footer;