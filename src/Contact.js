import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 2rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <div>
      <h2 className="common-heading">Feel Free to Contact US</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.48667074501105!2d74.86738452785883!3d24.45828170286339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966735c814caaef%3A0x3ec9cd8de81629e0!2sBeauty%20Bag%20House!5e0!3m2!1sen!2sin!4v1778154078040!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mrejaevp" method="POST" className="contact-inputs">
          <input
            type="text"
            placeholder="enter username"
            name="username"
            required
            autoComplete="off"
            
          />
          <input
            type="email"
            placeholder="enter email"
            name="email"
            required
            autoComplete="off"
            
          />
          <textarea 
            name="Message" 
            placeholder="Enter your message"
            required
            autoComplete="off"
            rows="10"
            cols="30"
          ></textarea>

          <input type="submit" />
        </form>
      </div>
    </div>

  </Wrapper>;
};

export default Contact;
